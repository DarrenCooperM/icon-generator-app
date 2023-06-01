// Import the necessary TRPC components
import { TRPCError } from "@trpc/server"; // Error handling in TRPC
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"; // Router and protected procedure creators from TRPC

import { z } from "zod"; // zod for input validation

// Import OpenAI's API configuration
import { Configuration, OpenAIApi } from "openai";

// Import environment variables
import { env } from "~/env.mjs";

// Import predefined base64 image
import { b64Image } from "~/data/b64Image";

// Import AWS SDK
import AWS from "aws-sdk";

// Configure AWS S3 instance with provided credentials and region
const s3 = new AWS.S3({
  credentials: {
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_ACCESS_KEY,
  },
  region: "us-east-1",
});

// Define the bucket name for S3 storage
const BUCKET_NAME = "icon-generator-dalle-api";

// Configure OpenAI instance with provided API key
const configuration = new Configuration({
  apiKey: env.DALLE_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define a function to generate icons using DALL-E API or a mock
async function generateIcon(prompt: string, numberOfIcons = 1) {
  // If mocking is enabled, return predefined base64 images
  if (env.MOCK_DALLE === "true") {
    return new Array<string>(numberOfIcons).fill(b64Image);
  } else {
    // Otherwise, call the DALL-E API to generate images
    const response = await openai.createImage({
      prompt,
      n: numberOfIcons,
      size: "1024x1024",
      response_format: "b64_json",
    });
    // Extract and return base64 images from the response
    return response.data.data.map((result) => result.b64_json || "");
  }
}

// Export a TRPC router with a mutation to generate icons
export const generateRouter = createTRPCRouter({
  generateIcon: protectedProcedure
    .input(
      // Define the input schema for the procedure
      z.object({
        company: z.string(),
        prompt: z.string(),
        colour: z.string(),
        shape: z.string(),
        style: z.string(),
        numberOfIcons: z.number().min(1).max(10),
        abstractLiteral: z.string(),
        imagery: z.string(),
        mood: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Deduct credits from the user's account for each icon to be generated
      const { count } = await ctx.prisma.user.updateMany({
        where: {
          id: ctx.session.user.id,
          credits: {
            gte: input.numberOfIcons,
          },
        },
        data: {
          credits: {
            decrement: input.numberOfIcons,
          },
        },
      });

      // If no credits were deducted, the user didn't have enough credits
      if (count <= 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "you do not have enough credits",
        });
      }

      // Create the final prompt for DALL-E
      const finalPrompt = `Design a logo for a ${input.company} company operating in the ${input.prompt} industry. The logo should incorporate a ${input.style} style, utilizing a ${input.colour} colour scheme. The primary shape should resemble a ${input.shape}. The design should be minimalistic, of high quality, and inspired by trending designs on ArtStation. Strive for a level of detail and visual appeal comparable to graphics seen in Unreal Engine-powered games.`;

      // Generate the icons
      const base64EncodedImages = await generateIcon(
        finalPrompt,
        input.numberOfIcons
      );

      // For each generated icon, create a record in the database and store the image in S3
      const createdIcons = await Promise.all(
        base64EncodedImages.map(async (image) => {
          // Create a record in the database for the icon
          const icon = await ctx.prisma.icon.create({
            data: {
              prompt: input.prompt,
              userId: ctx.session.user.id,
            },
          });
          // Store the image in S3
          await s3
            .putObject({
              Bucket: BUCKET_NAME,
              Body: Buffer.from(image, "base64"),
              Key: icon.id,
              ContentEncoding: "base64",
              ContentType: "image/png",
            })
            .promise();

          // Return the created icon
          return icon;
        })
      );

      // Return the URLs of the created icons
      return createdIcons.map((icon) => {
        return { 
          imageUrl: `https://${BUCKET_NAME}.s3.ap-southeast-2.amazonaws.com/${icon.id}`,
        };
      });
    }),
});

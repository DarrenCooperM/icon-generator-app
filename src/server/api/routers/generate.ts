import { TRPCError } from "@trpc/server";
import {  z } from "zod";

import {
  createTRPCRouter, protectedProcedure, publicProcedure,} from "~/server/api/trpc";
  import { Configuration, OpenAIApi } from "openai";
import { env } from "~/env.mjs";
  
  const configuration = new Configuration({
    apiKey: env.DALLE_API_KEY
  });
  const openai = new OpenAIApi(configuration);

async function generateIcon(prompt: string): Promise<string | undefined> {
    if (env.MOCK_DALLE === 'true'){
return "https://oaidalleapiprodscus.blob.core.windows.net/private/org-GonWukWG5yDlEWPKO1xryZbo/user-mxFK9zQWjuFjfaq4hhsZdl32/img-C7Wx5SllYHR9ODzam3AEDyvQ.png?st=2023-04-27T23%3A25%3A20Z&se=2023-04-28T01%3A25%3A20Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-27T20%3A34%3A53Z&ske=2023-04-28T20%3A34%3A53Z&sks=b&skv=2021-08-06&sig=E7asXe9GTiJqJ99dgR/eFAL/uXTE1ztUWJP%2BM1365WE%3D"
    } else {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
          });
          return response.data.data[0]?.url!
    }
}

export const generateRouter = createTRPCRouter({
    generateIcon: protectedProcedure.input(
        z.object({
        prompt: z.string()
    })
    ).mutation(async({ctx, input}) => {
     const {count} =  await ctx.prisma.user.updateMany({
            where: {
                id: ctx.session.user.id, // TODO: replace with a real id
                credits: {
                    gte: 1
                },
            },
            data: {
                credits: {
                    decrement: 1,
                }
            }
        });
        if (count <= 0) {
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'you do not have enough credits'
            })
        }
          const url = await generateIcon(input.prompt)

          return { 
            imageUrl: url,
          }
    })
});

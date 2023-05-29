import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import { FiDownload } from "react-icons/fi";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();

  function handleDownload(icon: Icon) {
    const link = document.createElement("a");
    link.href = `https://icon-generator-dalle-api.s3.ap-southeast-2.amazonaws.com/${icon.id}`;
    link.download = `${icon.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <Head>
        <title>Your Logos</title>
        <meta name="description" content="Your Icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8">
        <h1 className="text-4xl">Your Logos</h1>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {icons.data?.map((icon: Icon) => (
            <li key={icon.id}>
              <div className="image-container relative">
                <Image
                  className="w-full rounded-lg"
                  width="100"
                  height="100"
                  quality={100}
                  alt={icon.prompt ?? "an image of an icon"}
                  src={`https://icon-generator-dalle-api.s3.ap-southeast-2.amazonaws.com/${icon.id}`}
                />
                <FiDownload
                  className="absolute right-0 top-0 cursor-pointer text-3xl hover:text-black"
                  onClick={() => handleDownload(icon)}
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CollectionPage;

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";

function HeroBanner() {
  return (
    <section className="mb-24 mt-12 grid grid-cols-1 gap-12 px-8 sm:mt-4 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl ">Generate Icons with a click of a button</h1>
        <p className="text-2xl">
          Use AI to generate icons in seconds instead of paying a designer and
          waiting for them to create them for you.
        </p>
        <PrimaryLinkButton href="/generate" className="self-start">
          Generated your Icons
        </PrimaryLinkButton>
      </div>
      <Image
        src="/icong.png"
        alt="icon generator image"
        width="400"
        height="300"
        className="order-first sm:-order-none"
      />
    </section>
  );
}

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Icon Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center justify-center">
        <HeroBanner />
      </main>
    </>
  );
};

export default HomePage;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

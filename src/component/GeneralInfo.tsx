import { GiSandsOfTime } from "@react-icons/all-files/gi/GiSandsOfTime";
import { signIn, useSession } from "next-auth/react";
import { PrimaryLinkButton } from "./PrimaryLinkButton";

export function GeneralInfo() {
  const { data: sessionData } = useSession();
  return (
    <>
      <div className="mx-4 mb-12 max-w-screen-xl sm:mx-auto md:pb-24 md:pt-12">
        <GiSandsOfTime className="mx-auto h-20 w-20 rounded-xl" />
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg text-center">
          <p className="mt-8 text-4xl font-medium capitalize md:text-6xl">
            Let us save your time!
          </p>
          <p className="mx-8 mb-8 text-xl md:mx-40 md:text-2xl">
            Recruiting a designer to create digital logos and web elements for
            your website can be a daunting and lengthy process. By providing a
            unique description of your desired logos, we can swiftly produce
            your assets within a matter of seconds.
          </p>
          {sessionData ? (
            <PrimaryLinkButton
              href="/generate"
              className="mt-12 text-center font-medium md:w-1/4 md:self-center"
            >
              Generate Logos now!
            </PrimaryLinkButton>
          ) : (
            <button
              onClick={() => {
                signIn().catch(console.error);
              }}
              className="uppercase mt-12 rounded bg-blue-900 px-4 py-2 text-center font-medium ease-in-out hover:bg-blue-600 hover:transition-colors md:w-1/4 md:self-center text-white"
            >
              get started 
            </button>
          )}
        </div>
      </div>
    </>
  );
}

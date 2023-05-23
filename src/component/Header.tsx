import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { PrimaryLink } from "./PrimaryLink";
import { Spinner } from "./Spinner";
import { useState } from "react";

export function Header() {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;

  const credits = api.user.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex h-16 items-center justify-between gap-10 border-b-2 border-gray-500 px-4 capitalize">
        <PrimaryLink href="/">Icon Generator</PrimaryLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 block h-6 w-6 lg:hidden"
        >
          <div
            className={`absolute left-1/2 h-0.5 w-8 -translate-x-1/2 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isOpen ? "top-1/2 rotate-45" : "top-1"
            }`}
          ></div>
          <div
            className={`absolute left-1/2 h-0.5 w-6 -translate-x-1/2 transform rounded-full bg-white transition-opacity duration-200 ease-in-out ${
              isOpen ? "top-1/2 opacity-0" : "top-2.5"
            }`}
          ></div>
          <div
            className={`absolute left-1/2 h-0.5 w-8 -translate-x-1/2 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
              isOpen ? "top-1/2 -rotate-45" : "top-4"
            }`}
          ></div>
        </button>

        {isOpen && (
          <div
            className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <div
          className={`fixed left-0 top-0 z-20 h-full w-64 transform items-center bg-black text-white transition-transform duration-200 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:z-0 lg:flex lg:w-auto lg:transform-none lg:space-x-4 lg:bg-transparent lg:text-black`}
        >
          <ul className="flex flex-col gap-4 space-y-4 lg:flex-row lg:space-y-0">
            <li onClick={() => setIsOpen(false)}>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <PrimaryLink href="/community">Community</PrimaryLink>
            </li>
            {isLoggedIn && (
              <>
                <li onClick={() => setIsOpen(false)}>
                  <PrimaryLink href="/collection">Collection</PrimaryLink>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <PrimaryLink href="https://portfolio.maoriwebdev.com">
                    Portfolio
                  </PrimaryLink>
                </li>
              </>
            )}
          </ul>
          <ul className="flex flex-col gap-4 space-y-4 lg:flex-row lg:space-y-0">
            {isLoggedIn && (
              <>
                <div className="flex items-center">
                  Credits remaining {credits.data || <Spinner />}
                </div>

                <li onClick={() => setIsOpen(false)}>
                  <Button
                    onClick={() => {
                      buyCredits().catch(console.error);
                    }}
                  >
                    Buy Credits
                  </Button>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      signOut().catch(console.error);
                    }}
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li onClick={() => setIsOpen(false)}>
                <Button
                  onClick={() => {
                    signIn().catch(console.error);
                  }}
                >
                  Login
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

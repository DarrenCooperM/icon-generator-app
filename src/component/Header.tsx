import { PrimaryLink } from "./PrimaryLink";
import { useState } from "react";
import Image from "next/image";
import { HamburgerMenu } from "./HamburgerMenu";
import { Button } from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Spinner } from "./Spinner";
import { RiMenu3Line } from "@react-icons/all-files/ri/RiMenu3Line";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;

  const credits = api.user.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
  return (
    <header
      className={`${
        !isOpen
          ? "sticky top-0 z-50 w-full bg-gray-200 shadow-md dark:bg-gray-800"
          : ""
      }`}
    >
      <div className="mx-4 max-w-screen-xl sm:mx-auto">
        <div className="flex h-16 items-center justify-between lg:flex xl:flex xl:justify-between">
          <PrimaryLink href="/">
            <Image
              src="/maori.jpg"
              alt="icon"
              width="50"
              height="50"
              className="rounded-full xl:block"
            />
          </PrimaryLink>
          <ul className="hidden flex-col gap-4 space-y-4 lg:flex lg:flex-row lg:space-y-0 xl:flex xl:items-center xl:gap-10">
            {isOpen && (
              <>
                <div
                  className="absolute right-0 top-0 mr-4 mt-4 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </div>
              </>
            )}
            <li onClick={() => setIsOpen(false)}>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className={
                isOpen
                  ? `border-b-2 border-gray-800 py-2 dark:border-b-2 dark:border-white`
                  : ""
              }
            >
              <PrimaryLink href="/community">Community</PrimaryLink>
            </li>
            {isLoggedIn && (
              <>
                <li onClick={() => setIsOpen(false)}>
                  <PrimaryLink href="/collection">Collection</PrimaryLink>
                </li>
                <li
                  onClick={() => setIsOpen(false)}
                  className={
                    isOpen
                      ? `border-b-2 border-gray-800 py-2 dark:border-b-2 dark:border-white`
                      : ""
                  }
                >
                  <PrimaryLink href="https://maoriwebdev.com">
                    MaoriWebDev
                  </PrimaryLink>
                </li>
              </>
            )}
          </ul>
          <ul className="hidden flex-col gap-4 space-y-4 lg:flex lg:flex-row lg:space-y-0 xl:flex xl:items-center">
            {isLoggedIn && (
              <>
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
                <div className="flex items-center font-medium text-blue-800">
                  Credits remaining:&nbsp;
                  <span>{credits.data || <Spinner />}</span>
                </div>
              </>
            )}
            {!isLoggedIn && (
              <li
                onClick={() => setIsOpen(false)}
                className={isOpen ? `pt-4` : ""}
              >
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20 block  lg:absolute lg:hidden"
          >
            {/* <div
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
            >
            
          </div> */}
            <RiMenu3Line className="text-3xl" />
          </button>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

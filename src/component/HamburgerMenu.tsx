import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { PrimaryLink } from "./PrimaryLink";
import { Spinner } from "./Spinner";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function HamburgerMenu({ isOpen, setIsOpen }: HamburgerMenuProps) {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;

  const credits = api.user.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
  return (
    <>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 z-20 h-full w-full transform items-center bg-gray-300 text-black transition-transform duration-200 dark:bg-black dark:text-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:z-0 lg:flex lg:w-auto lg:transform-none lg:space-x-4 lg:bg-transparent lg:text-black`}
      >
        <ul
          className={
            isOpen
              ? `flex w-full flex-col items-center gap-4 space-y-4 px-4 pt-4 text-xl lg:flex-row lg:space-y-0`
              : `flex flex-col gap-4 space-y-4 lg:flex-row lg:space-y-0`
          }
        >
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
          <li
            onClick={() => setIsOpen(false)}
            className={
              isOpen
                ? `border-b-2 border-gray-800 py-2 dark:border-b-2 dark:border-white`
                : ""
            }
          >
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
              <li
                onClick={() => setIsOpen(false)}
                className={
                  isOpen
                    ? `border-b-2 border-gray-800 py-2 dark:border-b-2 dark:border-white`
                    : ""
                }
              >
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
                <PrimaryLink href="https://portfolio.maoriwebdev.com">
                  MaoriWebDev
                </PrimaryLink>
              </li>
            </>
          )}
        </ul>
        <ul
          className={
            isOpen
              ? `mt-4 flex flex-col items-center gap-4 space-y-4 px-4 pt-4 lg:flex-row lg:space-y-0`
              : `flex flex-col gap-4 space-y-4 lg:flex-row lg:space-y-0`
          }
        >
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
      </div>
    </>
  );
}

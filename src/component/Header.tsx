import { PrimaryLink } from "./PrimaryLink";
import { useEffect, useRef, useState } from "react";
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
  const [dropdown, setDropdown] = useState(false);
  const session = useSession();
  const { data: sessionData } = useSession();
  const { buyCredits } = useBuyCredits();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDrop = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdown(!dropdown);
  };

  const isLoggedIn = !!session.data;

  const blankProfileImg = "/blankProfileImg.jpg";

  const credits = api.user.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });

  return (
    <header
      className={`${
        !isOpen
          ? "sticky top-0 z-50 w-full bg-gray-200 shadow-md dark:bg-gray-900"
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
            <li>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </li>
            <li
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
                <li>
                  <PrimaryLink href="/collection">Collection</PrimaryLink>
                </li>
                <li
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
                <div className="flex items-center text-sm ">
                  <span>{credits.data || <Spinner />}</span>&nbsp;Credits left
                </div>
                <div>
                  <li>
                    {sessionData?.user?.image && (
                      <Image
                        src={sessionData.user.image || blankProfileImg}
                        width={45}
                        height={45}
                        alt="profileimg"
                        className="relative cursor-pointer rounded-full"
                        onClick={handleDrop}
                      />
                    )}
                  </li>
                  {dropdown ? (
                    <div
                      ref={dropdownRef}
                      className="absolute w-fit divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li className="block border-b-2 border-gray-500 px-4 py-2">
                          <li>
                            {sessionData && <p>{sessionData.user?.name}</p>}
                            {sessionData && <p>{sessionData.user?.email}</p>}
                          </li>
                        </li>
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <li>
                            <button
                              onClick={() => {
                                buyCredits().catch(console.error);
                              }}
                            >
                              Buy Credits
                            </button>
                          </li>
                        </li>
                        <li className="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-200">
                          <button
                            onClick={() => {
                              signOut().catch(console.error);
                            }}
                          >
                            Logout
                          </button>
                        </li>
                        {/* <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <button
                            className="text-red-500"
                            onClick={() => {
                              signOut().catch(console.error);
                            }}
                          >
                            Delete Account
                          </button>
                        </li> */}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </>
            )}
            {!isLoggedIn && (
              <li className={isOpen ? `pt-4` : ""}>
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
            <RiMenu3Line className="text-3xl" />
          </button>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

import { PrimaryLink } from "./PrimaryLink";
import { useState } from "react";
import Image from "next/image";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${!isOpen ? "sticky top-0 z-50 bg-gray-200 shadow-md" : ""}`}
    >
      <div className="mx-auto flex h-16 items-center justify-between gap-10 border-b-2 border-gray-500 px-4 capitalize max-lg:flex max-lg:justify-between sm:flex sm:justify-between lg:flex lg:justify-around">
        <PrimaryLink href="/">
          <Image
            src="/maori.jpg"
            alt="Description of image"
            width="50"
            height="50"
            className="rounded-full"
          />
        </PrimaryLink>

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

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

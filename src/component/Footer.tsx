import { PrimaryLink } from "./PrimaryLink";

export function Footer() {
  return (
    <footer className="flex h-48 w-full flex-col-reverse items-center justify-center gap-10 bg-gray-800 text-white md:flex-row-reverse ">
      <PrimaryLink href="/">logo-generator.maoriwebdev.com</PrimaryLink>
      <PrimaryLink href="/privacy-policy">Privacy Policy</PrimaryLink>
      <PrimaryLink href="/terms-and-conditions">
        Terms and Conditions
      </PrimaryLink>
    </footer>
  );
}

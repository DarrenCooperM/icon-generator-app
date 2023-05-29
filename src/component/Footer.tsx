import { PrimaryLink } from "./PrimaryLink";

export function Footer() {
  return (
    <footer className=" flex h-24 w-full items-center justify-center bg-black text-white">
      <PrimaryLink href="/">icons.maoriwebdev.com</PrimaryLink>
      <PrimaryLink href="/privacy-policy">Privacy Policy</PrimaryLink>
      <PrimaryLink href="/terms-of-service">Terms of Service</PrimaryLink>
    </footer>
  );
}

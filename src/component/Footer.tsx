import { PrimaryLink } from "./PrimaryLink";

export function Footer() {
  return (
    <footer>
      <footer className="container mx-auto grid h-24 grid-cols-3 items-center text-center">
        <PrimaryLink href="/">icons.maoriwebdev.com</PrimaryLink>
        <PrimaryLink href="/privacy-policy">Privacy Policy</PrimaryLink>
        <PrimaryLink href="/terms-of-service">Terms of Service</PrimaryLink>
      </footer>
    </footer>
  );
}

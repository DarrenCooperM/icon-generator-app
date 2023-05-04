import Link from "next/link";
import { PrimaryLink } from "./PrimaryLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./Button";

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="container mx-auto flex h-16 items-center justify-between px-4 dark:bg-gray-800">
      <PrimaryLink href="/">Icon Generator</PrimaryLink>
      <ul>
        <li>
          <PrimaryLink href="/generate">Generate</PrimaryLink>
        </li>
      </ul>
      <ul>
        {isLoggedIn && (
          <li>
            <Button
              variant="secondary"
              onClick={() => {
                signOut().catch(console.error);
              }}
            >
              Logout
            </Button>
          </li>
        )}
        {!isLoggedIn && (
          <li>
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
    </header>
  );
}

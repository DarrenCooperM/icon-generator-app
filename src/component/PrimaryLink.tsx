import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

export function PrimaryLink(props: LinkProps & { children: ReactNode }) {
  return (
    <Link className="transition ease-in-out hover:text-cyan-500" {...props}>
      {props.children}
    </Link>
  );
}

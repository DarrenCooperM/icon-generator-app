import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

export function PrimaryLinkButton(
  props: LinkProps & { children: ReactNode; className?: string }
) {
  const { className, ...propsWithoutClassname } = props;

  return (
    <Link
      className={clsx(
        "rounded bg-blue-900 px-4 py-2 ease-in-out hover:bg-blue-600 hover:transition-colors",
        className ?? ""
      )}
      {...propsWithoutClassname}
    >
      {props.children}
    </Link>
  );
}

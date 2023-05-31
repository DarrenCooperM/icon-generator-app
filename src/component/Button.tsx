import clsx from "clsx";
import { Spinner } from "./Spinner";

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
  }
) {
  const colour =
    (props.variant ?? "primary") === "primary"
      ? "bg-blue-900 hover:bg-blue-600 text-white"
      : "bg-gray-400 hover:bg-gray-500";
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center gap-2 rounded px-4 py-2 disabled:bg-gray-600",
        colour
      )}
    >
      {props.children}
      {props.isLoading && (
        <>
          ...please wait. This may take 10-15 seconds
          <Spinner />
        </>
      )}
    </button>
  );
}

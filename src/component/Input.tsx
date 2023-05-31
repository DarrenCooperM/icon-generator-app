export function Input(props: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      {...props}
      type="text"
      className="rounded border border-black bg-transparent px-4 py-2 text-black dark:border-gray-100  dark:text-white"
    />
  );
}

export function FormGroup(props: React.ComponentPropsWithRef<"div">) {
  return (
    <div className="flex flex-col gap-1" {...props}>
      {props.children}
    </div>
  );
}

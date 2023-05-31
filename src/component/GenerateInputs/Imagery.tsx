import { ReactElement, ChangeEvent } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Imagery({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        7. Provide any specific imagery you want in your logo.
      </h2>
      <FormGroup className="mb-12">
        <Input
          placeholder="e.g. Trees, mountains, ocean"
          value={form.imagery}
          onChange={updateForm("imagery")}
        ></Input>
      </FormGroup>
    </>
  );
}

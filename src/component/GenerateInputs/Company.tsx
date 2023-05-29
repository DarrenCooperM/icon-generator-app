import { ReactElement, ChangeEvent } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Company({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        1. What is the name of your company?
      </h2>
      <FormGroup className="mb-12">
        <Input
          placeholder="e.g. Tech Guru"
          required
          value={form.company}
          onChange={updateForm("company")}
        ></Input>
      </FormGroup>
    </>
  );
}

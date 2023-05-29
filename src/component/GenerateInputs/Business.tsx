import { ReactElement, ChangeEvent } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Business({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        2. Describe your business or industry.
      </h2>
      <FormGroup className="mb-12">
        <Input
          placeholder="e.g. Technology, Telecommunications"
          required
          value={form.prompt}
          onChange={updateForm("prompt")}
        ></Input>
      </FormGroup>
    </>
  );
}

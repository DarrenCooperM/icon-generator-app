import { ChangeEvent, ReactElement } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function AbstractLiteral({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        6. Do you want your logo to be more abstract or literal?
      </h2>
      <FormGroup className="mb-12">
        <Input
          placeholder="e.g. Abstract"
          required
          value={form.abstractLiteral}
          onChange={updateForm("abstractLiteral")}
        ></Input>
      </FormGroup>
    </>
  );
}

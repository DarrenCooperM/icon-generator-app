import { ReactElement, ChangeEvent } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function NumberOfLogos({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">9. How many logos do you want?</h2>
      <FormGroup className="mb-12">
        <label>Number of logos</label>
        <Input
          inputMode="numeric"
          pattern="[1-9]|10"
          value={form.numberOfIcons}
          required
          onChange={updateForm("numberOfIcons")}
        ></Input>
      </FormGroup>
    </>
  );
}

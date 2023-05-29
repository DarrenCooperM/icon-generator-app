import { ReactElement, ChangeEvent } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";

type FormProps = {
  form: { [key: string]: string };
  updateForm: (key: string) => (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Theme({ form, updateForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        8. What mood or theme do you want your logo to convey?
      </h2>
      <FormGroup className="mb-12">
        <Input
          placeholder="e.g. Modern, retro, luxurious, playful"
          required
          value={form.mood}
          onChange={updateForm("mood")}
        ></Input>
      </FormGroup>
    </>
  );
}

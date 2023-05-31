import { ReactElement } from "react";
import { FormGroup } from "../FormGroup";

const shapes = ["square", "circle", "rounded"];

type FormProps = {
  form: {
    prompt: string;
    company: string;
    colour: string;
    shape: string;
    style: string;
    numberOfIcons: string;
    abstractLiteral: string;
    imagery: string;
    mood: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      prompt: string;
      company: string;
      colour: string;
      shape: string;
      style: string;
      numberOfIcons: string;
      abstractLiteral: string;
      imagery: string;
      mood: string;
    }>
  >;
};

export function Shape({ form, setForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">4. Pick a shape for your logo.</h2>
      <FormGroup className="mb-12 flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4">
        {shapes.map((shape) => (
          <label
            key={shape}
            className="flex items-center gap-2  text-xl sm:text-xl md:mb-0 md:text-xl lg:text-2xl"
          >
            <input
              required
              type="radio"
              name="shape"
              checked={shape === form.shape}
              onChange={() => setForm((prev) => ({ ...prev, shape }))}
            ></input>
            {shape}
          </label>
        ))}
      </FormGroup>
    </>
  );
}

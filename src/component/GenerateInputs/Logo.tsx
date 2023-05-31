import { ReactElement } from "react";
import { FormGroup } from "../FormGroup";

const styles = [
  "minimalistic",
  "flat",
  "gradient",
  "metallic",
  "3D",
  "realistic",
  "polygon",
  "isometric",
  "illustrated",
  "watercolor",
];

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

export function Logo({ form, setForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">5. Pick a style for your logo.</h2>
      <FormGroup className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {styles.map((style) => (
          <label
            key={style}
            className="flex items-center gap-2  text-xl sm:text-xl md:mb-0 md:text-xl lg:text-2xl"
          >
            <input
              required
              type="radio"
              name="style"
              checked={style === form.style}
              onChange={() => setForm((prev) => ({ ...prev, style }))}
            />
            {style}
          </label>
        ))}
      </FormGroup>
    </>
  );
}

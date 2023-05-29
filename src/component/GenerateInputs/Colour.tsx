import { ReactElement } from "react";
import { FormGroup } from "../FormGroup";

const colours = [
  "blue",
  "red",
  "orange",
  "purple",
  "yellow",
  "pink",
  "green",
  "teal",
  "grey",
  "black",
  "light green",
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

export function Colour({ form, setForm }: FormProps): ReactElement {
  return (
    <>
      <h2 className=" text-xl lg:text-2xl">
        3. Pick a primary color for your logo.
      </h2>
      <FormGroup className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {colours.map((colour) => (
          <label
            key={colour}
            className="flex items-center gap-2  text-xl sm:text-xl md:mb-0 md:text-xl lg:text-2xl"
          >
            <input
              required
              type="radio"
              name="colour"
              checked={colour === form.colour}
              onChange={() => setForm((prev) => ({ ...prev, colour }))}
            ></input>
            {colour}
          </label>
        ))}
      </FormGroup>
    </>
  );
}

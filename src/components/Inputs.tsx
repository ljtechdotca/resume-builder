import { FC } from "react";
import { fieldsData } from "../lib/defaults";
import styles from "./Inputs.module.scss";
import { NestedInput } from "./NestedInput";
import { NestedTextArea } from "./NestedTextArea";

interface InputProps {
  name: FieldsType;
}

export const Inputs: FC<InputProps> = ({ name }) => {
  return (
    <div className={styles.root} id={name}>
      <h2>{name} form</h2>
      <hr />
      {fieldsData[name].inputs.map((input) => {
        if (input.type === "textarea") {
          return (
            <NestedTextArea
              key={`${name}-${input.name}-textarea`}
              label={input.label}
              name={`${name}.${input.name}`}
              placeholder={input.placeholder}
            />
          );
        } else {
          return (
            <NestedInput
              key={`${name}-${input.name}-input`}
              type={input.type}
              label={input.label}
              name={`${name}.${input.name}`}
              placeholder={input.placeholder}
            />
          );
        }
      })}
    </div>
  );
};

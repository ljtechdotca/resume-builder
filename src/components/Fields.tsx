import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { fieldsData } from "../lib/defaults";
import styles from "./Fields.module.scss";
import { DeleteIcon } from "./icons/index";
import { NestedInput } from "./NestedInput";
import { NestedTextArea } from "./NestedTextArea";

interface FieldsProps {
  name: FieldsType;
}

export const Fields: FC<FieldsProps> = ({ name }) => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name,
  });

  return (
    <div id={name} className={styles.root}>
      <h2>{name} form</h2>
      <hr />
      <button
        type="button"
        onClick={() => {
          append(fieldsData[name].defaultValues);
          updateData(getValues());
        }}
      >
        Add
      </button>
      <div className={styles.fields}>
        {fields.map((field, index) => {
          return (
            <div className={styles.base}>
              <div className={styles.inputs} key={field.id}>
                {fieldsData[name].inputs.map((input: InputProps) => {
                  if (input.type === "textarea") {
                    return (
                      <NestedTextArea
                        label={input.label}
                        name={`${name}.${index}.${input.name}`}
                        placeholder={input.placeholder}
                      />
                    );
                  } else {
                    return (
                      <NestedInput
                        type={input.type}
                        label={input.label}
                        name={`${name}.${index}.${input.name}`}
                        placeholder={input.placeholder}
                      />
                    );
                  }
                })}
              </div>
              <div className={styles.menu}>
                <button
                  type="button"
                  onClick={() => {
                    remove(index);
                    updateData(getValues());
                  }}
                >
                  <DeleteIcon width={16} height={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

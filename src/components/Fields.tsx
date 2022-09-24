import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { fieldsData } from "../lib/defaults";
import styles from "./Fields.module.scss";
import { ArrowDownIcon, ArrowUpIcon, DeleteIcon } from "./icons/index";
import { NestedInput } from "./NestedInput";
import { NestedTextArea } from "./NestedTextArea";

interface FieldsProps {
  name: FieldsType;
}

export const Fields: FC<FieldsProps> = ({ name }) => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, remove, append, swap } = useFieldArray({
    control,
    name,
  });

  return (
    <div id={name} className={styles.root}>
      <h2>{name} form</h2>
      <hr />
      <button
        type="button"
        className={styles.add}
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
            <div key={field.id}>
              <div className={styles.base}>
                <div className={styles.inputs}>
                  {fieldsData[name].inputs.map((input: InputProps) => {
                    if (input.type === "textarea") {
                      return (
                        <NestedTextArea
                          key={`${name}-${input.name}-${field.id}-textarea`}
                          label={input.label}
                          name={`${name}.${index}.${input.name}`}
                          placeholder={input.placeholder}
                        />
                      );
                    } else {
                      return (
                        <NestedInput
                          key={`${name}-${input.name}-${field.id}-input`}
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
                      swap(index, index - 1);
                      updateData(getValues());
                    }}
                  >
                    <ArrowUpIcon width={16} height={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      remove(index);
                      updateData(getValues());
                    }}
                  >
                    <DeleteIcon width={16} height={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      swap(index, index + 1);
                      updateData(getValues());
                    }}
                  >
                    <ArrowDownIcon width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

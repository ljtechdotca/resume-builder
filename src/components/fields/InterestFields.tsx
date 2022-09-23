import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../../hooks/use-store";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import styles from "./Field.module.scss";
import { NestedInput } from "./NestedInput";

export const InterestFields: FC = () => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "interests",
  });

  return (
    <div className={styles.root}>
      <button
        type="button"
        onClick={() => {
          append({ name: "" });
          updateData(getValues());
        }}
      >
        append
      </button>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={styles.base}>
            <div className={styles.fields}>
              <NestedInput
                type="text"
                placeholder="Name"
                name={`interests.${index}.name`}
              />
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
  );
};

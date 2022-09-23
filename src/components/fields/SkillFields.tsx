import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../../hooks/use-store";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import styles from "./Field.module.scss";
import { NestedInput } from "./NestedInput";

export const SkillFields: FC = () => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "skills",
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
          <div className={styles.base} key={field.id}>
            <div className={styles.fields}>
              <NestedInput
                type="text"
                placeholder="Name"
                name={`skills.${index}.name`}
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

import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../../hooks/use-store";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import styles from "./Field.module.scss";
import { NestedInput } from "./NestedInput";
import { NestedTextArea } from "./NestedTextArea";

export const WorkHistoryFields: FC = () => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: "workHistory",
  });

  return (
    <div className={styles.root}>
      <button
        type="button"
        onClick={() => {
          append({
            title: "",
            company: "",
            location: "",
            description: "",
            startDate: "",
            endDate: "",
          });
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
                placeholder="Title"
                name={`workHistory.${index}.title`}
              />
              <NestedInput
                type="text"
                placeholder="Company"
                name={`workHistory.${index}.company`}
              />
              <NestedInput
                type="date"
                placeholder="Start Date"
                name={`workHistory.${index}.startDate`}
              />
              <NestedInput
                type="date"
                placeholder="End Date"
                name={`workHistory.${index}.endDate`}
              />
              <NestedInput
                type="text"
                placeholder="Location"
                name={`workHistory.${index}.location`}
              />
              <NestedTextArea
                placeholder="Description"
                name={`workHistory.${index}.description`}
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

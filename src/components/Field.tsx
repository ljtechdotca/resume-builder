import { FC, Fragment, useState } from "react";
import { useStore } from "../hooks/use-store";
import { fieldsData } from "../lib/defaults";
import styles from "./Field.module.scss";
import { FieldInfo } from "./FieldInfo";
import { DeleteIcon, EditIcon } from "./icons";
import { NestedInput } from "./NestedInput";
import { NestedTextArea } from "./NestedTextArea";

interface FieldOptions {
  field: Record<"id", string>;
  index: number;
  onRemove: () => void;
}

interface FieldProps {
  name: FieldsType;
  options?: FieldOptions;
}

export const Field: FC<FieldProps> = ({ name, options }) => {
  const [active, setActive] = useState(false);

  if (options) {
    const { field, index, onRemove } = options as FieldOptions;
    return (
      <div className={styles.root__item}>
        {active ? (
          <div className={styles.flex}>
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
              } else if (input.type === "startDate") {
                return (
                  <div
                    className={styles.grid}
                    key={`${name}-date-${field.id}-input`}
                  >
                    <NestedInput
                      type="text"
                      label="Start Date"
                      name={`${name}.${index}.startDate`}
                      placeholder={new Date().toDateString()}
                    />
                    <NestedInput
                      type="text"
                      label="End Date"
                      name={`${name}.${index}.endDate`}
                      placeholder={new Date().toDateString()}
                    />
                  </div>
                );
              } else if (input.type === "text") {
                return (
                  <NestedInput
                    key={`${name}-${input.name}-${field.id}-input`}
                    type={input.type}
                    label={input.label}
                    name={`${name}.${index}.${input.name}`}
                    placeholder={input.placeholder}
                  />
                );
              } else {
                return <Fragment key={field.id} />;
              }
            })}
          </div>
        ) : (
          <FieldInfo name={name} index={index} />
        )}
        <div className={styles.flex}>
          <button
            className={active ? styles.active : undefined}
            onClick={() => setActive(!active)}
          >
            <EditIcon width={16} height={16} />
          </button>
          {active && (
            <button type="button" onClick={() => onRemove()}>
              <DeleteIcon width={14} height={14} />
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.root__full} id={name}>
        <h2>{fieldsData[name].title}</h2>
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
  }
};

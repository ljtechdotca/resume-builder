import { FC } from "react";
import { defaultForms } from "../lib/defaults";
import styles from "./Forms.module.scss";
import { DefaultForm } from "./forms/DefaultForm";
import { ItemForm } from "./forms/ItemForm";
import { OptionsForm } from "./OptionsForm";

export const Forms: FC = () => {
  return (
    <div id="forms" className={styles.root}>
      <div id="options" className={styles.base}>
        <OptionsForm />
      </div>
      {defaultForms.map(({ type, target, title, fields }) => (
        <div id={target} key={title} className={styles.base}>
          {type === "default" && (
            <DefaultForm path={target} title={title} fields={fields} />
          )}
          {type === "item" && (
            <ItemForm path={target} title={title} fields={fields} />
          )}
        </div>
      ))}
    </div>
  );
};

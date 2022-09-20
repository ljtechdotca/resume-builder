import { FC } from "react";
import { defaultForms } from "../lib/defaults";
import { Form } from "./Form";
import { OptionsForm } from "./OptionsForm";
import styles from "./Forms.module.scss"

export const Forms: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.base}>
        <OptionsForm />
      </div>
      {defaultForms.map(({ title, fields }) => (
        <div key={title} className={styles.base}>
          <Form title={title} fields={fields} />
        </div>
      ))}
    </div>
  );
};

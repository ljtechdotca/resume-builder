import { FC } from "react";
import { defaultForms } from "../lib/defaults";
import { Form } from "./Form";
import styles from "./Forms.module.scss";
import { OptionsForm } from "./OptionsForm";

export const Forms: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.base}>
        <OptionsForm />
      </div>
      {defaultForms.map(({ onSubmit, target, title, fields }) => (
        <div key={title} className={styles.base}>
          <Form
            onSubmit={onSubmit as FormProps["onSubmit"]}
            target={target}
            title={title}
            fields={fields}
          />
        </div>
      ))}
    </div>
  );
};

import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { Fields } from "./Fields";
import styles from "./Form.module.scss";
import { Inputs } from "./Inputs";

export const Form: FC = () => {
  const {
    store: { data },
    updateData,
  } = useStore();

  const methods = useForm({ defaultValues: data, mode: "onChange" });
  const onSubmit = (data: any) => updateData(data);

  return (
    <FormProvider {...methods}>
      <div className={styles.root}>
        <header>
          {Object.keys(data).map((item) => (
            <a
              className={styles.anchor}
              key={`anchor-${item}`}
              href={`#${item}`}
            >
              {item}
            </a>
          ))}
        </header>
        <div className={styles.base}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Inputs name="user" />
            <Inputs name="contact" />
            <Fields name="socials" />
            <Fields name="skills" />
            <Inputs name="about" />
            <Fields name="workHistory" />
            <Fields name="education" />
            <Fields name="interests" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

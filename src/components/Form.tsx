import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { EducationFields } from "./fields/EducationFields";
import { InterestFields } from "./fields/InterestFields";
import { NestedInput } from "./fields/NestedInput";
import { NestedTextArea } from "./fields/NestedTextArea";
import { SkillFields } from "./fields/SkillFields";
import { SocialFields } from "./fields/SocialsFields";
import { WorkHistoryFields } from "./fields/WorkHistoryFields";
import styles from "./Form.module.scss";

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
            <div id="user" className={styles.field}>
              <NestedInput name="user.firstName" />
              <NestedInput name="user.lastName" />
              <NestedInput name="user.title" />
              <NestedInput name="user.email" />
              <NestedInput name="user.phone" />
            </div>
            <div id="contact" className={styles.field}>
              <NestedInput name="contact.city" />
              <NestedInput name="contact.state" />
              <NestedInput name="contact.zipCode" />
            </div>
            <div id="socials" className={styles.field}>
              <SocialFields />
            </div>
            <div id="skills" className={styles.field}>
              <SkillFields />
            </div>
            <div id="about" className={styles.field}>
              <NestedTextArea name="about.summary" />
            </div>
            <div id="workHistory" className={styles.field}>
              <WorkHistoryFields />
            </div>
            <div id="education" className={styles.field}>
              <EducationFields />
            </div>
            <div id="interests" className={styles.field}>
              <InterestFields />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

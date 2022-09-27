import { FC, useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { fieldsData } from "../lib/defaults";
import { Field } from "./Field";
import { Fields } from "./Fields";
import styles from "./Form.module.scss";

export const Form: FC = () => {
  const {
    store: { data },
    updateData,
  } = useStore();
  const [active, setActive] = useState("user");
  const [scrollSnapType, setScrollSnapType] = useState("y mandatory");

  const methods = useForm({ defaultValues: data, mode: "onChange" });
  const onSubmit = (data: any) => updateData(data);

  const scrollRef = useRef<HTMLDivElement>(null);

  function navHighlighter() {
    const nodes = scrollRef.current?.firstChild?.childNodes;
    const scrollY = scrollRef.current?.scrollTop ?? 0;
    nodes?.forEach((node: any) => {
      const sectionHeight = node.offsetHeight;
      const sectionTop = node.offsetTop - 120;
      const id = node.id;
      if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
        setActive(id);
      }
    });
  }

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", navHighlighter);
  }, []);

  return (
    <FormProvider {...methods}>
      <div className={styles.root}>
        <header>
          {Object.keys(fieldsData).map((key) => (
            <a
              className={active === key ? styles.anchor__active : styles.anchor}
              key={`anchor-${key}`}
              href={`#${key}`}
            >
              {fieldsData[key as FieldsType].title}
            </a>
          ))}
        </header>
        <div
          className={styles.base}
          ref={scrollRef}
          style={{
            scrollSnapType,
            // overflow: scrollSnapType === ""
          }}
        >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Field name="user" />
            <Field name="contact" />
            <Fields name="socials" onScrollSnap={setScrollSnapType} />
            <Fields name="skills" onScrollSnap={setScrollSnapType} />
            <Field name="about" />
            <Fields name="workHistory" onScrollSnap={setScrollSnapType} />
            <Fields name="education" onScrollSnap={setScrollSnapType} />
            <Fields name="interests" onScrollSnap={setScrollSnapType} />
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

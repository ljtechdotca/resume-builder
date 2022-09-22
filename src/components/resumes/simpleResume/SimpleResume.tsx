import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../../../hooks/use-store";
import { checkValue } from "../../../lib/check-value";
import { AsideItem } from "./AsideItem";
import { MainItem } from "./MainItem";
import styles from "./SimpleResume.module.scss";

interface SimpleResumeProps {
  ref: ForwardedRef<HTMLDivElement>;
  onDelete: (...path: string[]) => void;
  onEdit: (isEditing: IsEditingProps) => void;
}

export const SimpleResume: FC<SimpleResumeProps> = forwardRef<
  HTMLDivElement,
  SimpleResumeProps
>(({ onDelete, onEdit }, ref) => {
  const {
    store: {
      primaryColor,
      contact: { city, state, zipCode, email, phone, urls },
      education,
      experiences,
      firstName,
      lastName,
      skills,
      summary,
      title,
    },
  } = useStore();

  return (
    <div className={styles.root} ref={ref}>
      <aside style={{ backgroundColor: primaryColor ?? "dodgerblue" }}>
        <div className={styles.header}>
          <h1>
            {checkValue("First Name", firstName)}
            <br />
            {checkValue("Last Name", lastName)}
          </h1>
          <h2>{checkValue("Professional Title", title)}</h2>
        </div>
        <AsideItem
          title="Contact"
          items={{
            Phone: {
              title: "Phone",
              content: phone,
              required: true,
            },
            Email: {
              title: "Email",
              content: email,
              required: true,
            },
            Address: {
              title: "Address",
              content: `${city}, ${state}, ${zipCode}`,
              required: true,
            },
            ...urls,
          }}
          onDelete={(path) => onDelete("contact.urls", path)}
          onEdit={(item) => onEdit({ path: "contact.urls", values: item })}
        />
        <AsideItem
          title="Skills"
          items={skills}
          onDelete={(path) => onDelete("skills", path)}
          onEdit={(item) => onEdit({ path: "skills", values: item })}
        />
      </aside>
      <div className={styles.base}>
        <p>
          {checkValue(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus repudiandae neque laudantium error fuga adipisci praesentium corporis a blanditiis eligendi voluptates fugit rerum molestiae magni veritatis non, dolorem saepe expedita quis illo excepturi aperiam architecto itaque? Assumenda molestiae repudiandae omnis animi. Nemo aut ut vel inventore officiis accusamus labore temporibus vero sit eius magni quas itaque eum at neque perferendis, reprehenderit perspiciatis! Hic quo architecto accusamus tenetur distinctio sequi aliquid nemo neque.",
            summary
          )}
        </p>
        <MainItem
          title="Work History"
          items={experiences}
          onDelete={(path) => onDelete("experiences", path)}
        />
        <MainItem
          title="Education"
          items={education}
          onDelete={(path) => onDelete("education", path)}
        />
      </div>
    </div>
  );
});

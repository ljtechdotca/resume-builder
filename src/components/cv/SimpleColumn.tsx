import { FC, ForwardedRef, forwardRef, useContext } from "react";
import { StoreContext } from "../../App";
import { checkValue } from "../../lib/check-value";
import styles from "./SimpleColumn.module.scss";

interface AsideItemProps {
  title: string;
  items: Record<string, Item>;
  onDelete: (...path: string[]) => void;
}

const AsideItem: FC<AsideItemProps> = ({ title, items, onDelete }) => {
  const keys = Object.keys(items);

  return (
    <div className={styles.asideItem}>
      <h2>{title}</h2>
      <div className={styles.asideItem__items}>
        {keys.map((key) => {
          const { title, content, required } = items[key];
          return (
            <div key={key} className={styles.asideItem__item}>
              <h5>{title}</h5>
              {content && content}
              {!required && (
                <button className="close" onClick={() => onDelete(title)}>
                  X
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface MainItemProps {
  title: string;
  items: Record<string, Item>;
  onDelete: (...path: string[]) => void;
}

const MainItem: FC<MainItemProps> = ({ title, items, onDelete }) => {
  const keys = Object.keys(items);

  const {
    store: { isEditing },
  } = useContext(StoreContext);

  return (
    <div className={styles.mainItem}>
      <h2>{title}</h2>
      {keys.length ? (
        keys.map((key) => {
          const { title, location, position, startDate, endDate, list } =
            items[key];
          return (
            <div key={title} className={styles.item}>
              <small>
                {startDate} - {endDate}
              </small>
              <div className={styles.grid}>
                <h4>
                  {title} - <i>{position}</i>
                </h4>
                <p>
                  <i>{location}</i>
                </p>
                <ul>
                  {list &&
                    list.map((item: Item) => <li key={title}>{item.title}</li>)}
                </ul>
              </div>
              {isEditing && (
                <button className="close" onClick={() => onDelete(title)}>
                  X
                </button>
              )}
            </div>
          );
        })
      ) : (
        <div key={title} className={styles.item__default}>
          <small>MM/DD/YYYY - MM/DD/YYYY</small>
          <div className={styles.grid}>
            <h4>Company - Job Position</h4>
            <p>
              <i>Location</i>
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

interface CVProps {
  ref?: ForwardedRef<HTMLDivElement>;
  onDelete: (...path: string[]) => void;
  // primaryColor: string,
  // city: string,
  // state: string,
  // zipCode: string,
  // email: string,
  // phone: string,
  // urls:
}

export const SimpleColumn: FC<CVProps> = forwardRef<HTMLDivElement, CVProps>(
  ({ onDelete }, ref) => {
    const {
      store: {
        primaryColor,
        contact: { city, state, zipCode, email, phone, urls },
        education,
        experiences,
        firstName,
        lastName,
        other,
        skills,
        summary,
        title,
      },
    } = useContext(StoreContext);

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
          />
          <AsideItem
            title="Skills"
            items={skills}
            onDelete={(path) => onDelete("skills", path)}
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
  }
);

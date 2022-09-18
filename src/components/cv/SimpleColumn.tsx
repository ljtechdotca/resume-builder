import { FC, ForwardedRef, forwardRef, useContext } from "react";
import { StoreContext } from "../../App";
import styles from "./SimpleColumn.module.scss";

interface AsideItemProps {
  title: string;
  list: Item[];
}

const AsideItem: FC<AsideItemProps> = ({ title, list }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.card__base}>
        {list.length
          ? list.map(({ title, content }) => (
              <div key={title + content} className={styles.card__item}>
                <h5>{title}</h5>
                {content && content}
              </div>
            ))
          : new Array(4).fill("_").map((item, index) => (
              <div
                key={item + index}
                className={styles.card__item}
                style={{ opacity: "0.25" }}
              >
                <h5>Name of skill here</h5>
              </div>
            ))}
      </div>
    </div>
  );
};

interface MainItemProps {
  title: string;
  list: Item[];
}

const MainItem: FC<MainItemProps> = ({ title, list }) => {
  return (
    <div className={styles.mainItem}>
      <h2>{title}</h2>
      {list.length ? (
        list.map(({ title, location, position, startDate, endDate, list }) => (
          <div key={title} className={styles.item}>
            <small>
              {startDate} - {endDate}
            </small>
            <div className={styles.item_base}>
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
          </div>
        ))
      ) : (
        <div key={title} className={styles.item} style={{ opacity: "0.25" }}>
          <small>MM/DD/YYYY - MM/DD/YYYY</small>
          <div className={styles.item_base}>
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
}

export const SimpleColumn: FC<CVProps> = forwardRef<HTMLDivElement, CVProps>(
  (_, ref) => {
    const {
      store: {
        primaryColor,
        contact: { city, state, zipCode, email, phone, socials },
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

    function checkValue(defaultValue: string, value: string | null) {
      return value ? (
        value
      ) : (
        <span style={{ opacity: "0.25" }}>{defaultValue}</span>
      );
    }

    return (
      <div className={styles.root} ref={ref}>
        <aside style={{ backgroundColor: primaryColor ?? "dodgerblue" }}>
          <div className={styles.header}>
            <h1>
              {checkValue(
                "FirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstNameFirstName",
                firstName
              )}
              <br />
              {checkValue(
                "LastNameLastNameLastNameLastNameLastNameLastNameLastName",
                lastName
              )}
            </h1>
            <h2>{checkValue("Professional Title", title)}</h2>
          </div>
          <AsideItem
            title="Contact"
            list={[
              {
                title: "City",
                content: checkValue("City", city),
              },
              {
                title: "State",
                content: checkValue("State", state),
              },
              {
                title: "Zip Code",
                content: checkValue("Zip Code", zipCode),
              },
              { title: "Phone", content: checkValue("Phone", phone) },
              { title: "Email", content: checkValue("Email", email) },
              ...Object.keys(socials).map((key, index) => ({
                title: key + index,
                content: socials[key],
              })),
            ]}
          />
          <AsideItem title="Skills" list={skills} />
        </aside>
        <div className={styles.base}>
          <p>
            {checkValue(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia natus repudiandae neque laudantium error fuga adipisci praesentium corporis a blanditiis eligendi voluptates fugit rerum molestiae magni veritatis non, dolorem saepe expedita quis illo excepturi aperiam architecto itaque? Assumenda molestiae repudiandae omnis animi. Nemo aut ut vel inventore officiis accusamus labore temporibus vero sit eius magni quas itaque eum at neque perferendis, reprehenderit perspiciatis! Hic quo architecto accusamus tenetur distinctio sequi aliquid nemo neque.",
              summary
            )}
          </p>
          <MainItem title="Work History" list={experiences} />
          <MainItem title="Education" list={education} />
        </div>
      </div>
    );
  }
);

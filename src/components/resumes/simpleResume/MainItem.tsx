import { FC } from "react";
import { Menu } from "../../Menu";
import styles from "./SimpleResume.module.scss";

interface MainItemProps {
  title: string;
  items: Record<string, Item>;
  onDelete: (...path: string[]) => void;
}

export const MainItem: FC<MainItemProps> = ({ title, items, onDelete }) => {
  const keys = Object.keys(items);
  return (
    <div className={styles.mainItem}>
      <h2>{title}</h2>
      {keys.length ? (
        keys.map((key) => {
          const item = items[key];
          return (
            <div key={title} className={styles.item}>
              <small>
                {item.startDate} - {item.endDate}
              </small>
              <div className={styles.grid}>
                <h4>
                  {item.title} - <i>{item.position}</i>
                </h4>
                <p>
                  <i>{item.location}</i>
                </p>
                <ul>
                  {item.list &&
                    item.list.map((item: Item) => (
                      <li key={item.title}>{item.title}</li>
                    ))}
                </ul>
              </div>
              <Menu>
                <button onClick={() => console.log("TODO EDIT")}>🛠</button>
                <button onClick={() => onDelete(item.title)}>❌</button>
              </Menu>
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

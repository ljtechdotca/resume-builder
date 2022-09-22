import { FC } from "react";
import { Menu } from "../../Menu";
import styles from "./SimpleResume.module.scss";

interface AsideItemProps {
  title: string;
  items: Record<string, Item>;
  onDelete: (path: string) => void;
  onEdit: (item: Item) => void;
}

export const AsideItem: FC<AsideItemProps> = ({
  title,
  items,
  onDelete,
  onEdit,
}) => {
  const keys = Object.keys(items);
  return (
    <div className={styles.asideItem}>
      <h2>{title}</h2>
      <div className={styles.asideItem__items}>
        {keys.map((key) => {
          const item = items[key];
          return (
            <div key={key} className={styles.asideItem__item}>
              <h5>{item.title}</h5>
              {item.content && item.content}
              {!item.required && (
                <Menu>
                  <button onClick={() => onEdit(item)}>🛠</button>
                  <button onClick={() => onDelete(item.title)}>❌</button>
                </Menu>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

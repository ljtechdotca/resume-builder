import { FC } from "react";
import { useStore } from "../hooks/use-store";
import styles from "./FieldInfo.module.scss";

interface FieldInfoProps {
  name: FieldsType;
  index: number;
}

export const FieldInfo: FC<FieldInfoProps> = ({ name, index }) => {
  const { store } = useStore();

  return (
    <div className={styles.root}>
      <div className={styles.base}>
        {Object.keys(store.data[name][index]).map((key) => {
          return (
            <div key={`${name}-${key}`}>
              {key} : {store.data[name][index][key]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

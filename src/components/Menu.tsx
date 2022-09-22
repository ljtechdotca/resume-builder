import { FC, PropsWithChildren } from "react";
import styles from "./Menu.module.scss";

export const Menu: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

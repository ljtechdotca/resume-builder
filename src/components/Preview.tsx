import { FC, ReactNode } from "react";
import styles from "./Preview.module.scss";

interface PreviewProps {
  children: ReactNode;
}

export const Preview: FC<PreviewProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

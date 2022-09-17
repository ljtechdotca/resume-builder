import { FC } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  onPrint: () => void;
}

export const Header: FC<HeaderProps> = ({ onPrint }) => {
  return (
    <header className={styles.root}>
      <div className={styles.base}>
        <b>Resume Builder</b>
        <button onClick={onPrint}>
          Print
          <div>
            <kbd>CTRL</kbd> + <kbd>P</kbd>
          </div>
        </button>
      </div>
    </header>
  );
};

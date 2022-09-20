import { FC } from "react";
import { useStore } from "../hooks/use-store";
import styles from "./Header.module.scss";

interface HeaderProps {
  onPrint: () => void;
}

export const Header: FC<HeaderProps> = ({ onPrint }) => {
  const {
    store: { theme },
    changeTheme,
  } = useStore();

  return (
    <header className={styles.root}>
      <b>ljdocument</b>
      <div className={styles.base}>
        <button
          id="theme"
          onClick={() =>
            changeTheme(theme, theme === "dark" ? "light" : "dark")
          }
        >
          ☀ Theme
          <div>
            <kbd>CTRL</kbd> + <kbd>K</kbd>
          </div>
        </button>
        <button onClick={onPrint}>
          🖨 Print
          <div>
            <kbd>CTRL</kbd> + <kbd>P</kbd>
          </div>
        </button>
      </div>
    </header>
  );
};

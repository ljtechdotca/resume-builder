import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../hooks/use-store";
import styles from "./Header.module.scss";
import { DashboardIcon, PrintIcon, SunIcon } from "./icons";

interface HeaderProps {
  onPrint: () => void;
  ref: ForwardedRef<HTMLButtonElement>;
}

export const Header: FC<HeaderProps> = forwardRef(({ onPrint }, ref) => {
  const { setStore, changeTheme } = useStore();

  return (
    <header className={styles.root}>
      <b>ljdocument</b>
      <div className={styles.base}>
        <button
          ref={ref}
          id="theme"
          onClick={() =>
            setStore((currStore) => ({
              ...currStore,
              layout: currStore.layout === "card" ? "resume" : "card",
            }))
          }
        >
          <DashboardIcon width={16} height={16} /> Layout
        </button>
        <button ref={ref} id="theme" onClick={changeTheme}>
          <SunIcon width={16} height={16} />
          Theme
          <div>
            <kbd>CTRL</kbd> + <kbd>K</kbd>
          </div>
        </button>
        <button onClick={onPrint}>
          <PrintIcon width={16} height={16} /> Print
          <div>
            <kbd>CTRL</kbd> + <kbd>P</kbd>
          </div>
        </button>
      </div>
    </header>
  );
});

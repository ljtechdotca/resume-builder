import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../hooks/use-store";
import styles from "./Header.module.scss";

interface HeaderProps {
  onPrint: () => void;
  ref: ForwardedRef<HTMLButtonElement>;
}

export const Header: FC<HeaderProps> = forwardRef(({ onPrint }, ref) => {
  const { setStore, changeTheme } = useStore();

  function togglePreview() {
    setStore((currentStore) => ({
      ...currentStore,
      isPreviewing: !currentStore.isPreviewing,
    }));
  }

  return (
    <header className={styles.root}>
      <b>ljdocument</b>
      <div className={styles.base}>
        <button onClick={togglePreview}>Preview</button>
        <button ref={ref} id="theme" onClick={changeTheme}>
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
});

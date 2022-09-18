import { FC, ReactNode, useContext } from "react";
import { StoreContext } from "../App";
import { layoutSizes } from "../lib/defaults";
import styles from "./Preview.module.scss";

interface PreviewProps {
  children: ReactNode;
  onZoomIn: () => void;
}

export const Preview: FC<PreviewProps> = ({ children, onZoomIn }) => {
  const {
    store: { layout },
  } = useContext(StoreContext);

  return (
    <div className={styles.root}>
      <header>
        <button onClick={onZoomIn}>Zoom in</button>
      </header>
      <div className={styles.base}>
        <div
          className={styles.layout}
          style={{
            height: `calc(${layoutSizes[layout]?.height ?? 0}rem * 5.75)`,
            width: `calc(${layoutSizes[layout]?.width ?? 0}rem * 5.75)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

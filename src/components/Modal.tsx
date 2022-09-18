import { FC, ReactNode, useContext } from "react";
import { StoreContext } from "../App";
import { layoutSizes } from "../lib/defaults";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  onZoomOut: () => void;
}

export const Modal: FC<ModalProps> = ({ children, onZoomOut }) => {
  const {
    store: { layout },
  } = useContext(StoreContext);

  return (
    <div className={styles.root}>
      <button onClick={onZoomOut}>X</button>
      <div
        style={{
          height: `calc(${layoutSizes[layout]?.height ?? 0}rem * 5.75)`,
          width: `calc(${layoutSizes[layout]?.width ?? 0}rem * 5.75)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

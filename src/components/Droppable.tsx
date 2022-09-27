import { useDroppable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";
import styles from "./Droppable.module.scss";

interface DroppableProps {
  id: string;
  children: ReactNode;
}

export const Droppable: FC<DroppableProps> = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className={styles.root} id={id} ref={setNodeRef}>
      {children}
    </div>
  );
};

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, ReactNode } from "react";
import styles from "./Draggable.module.scss";
import { DotsIcon } from "./icons";

interface DraggableProps {
  id: string;
  children: ReactNode;
}

export const Draggable: FC<DraggableProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setActivatorNodeRef,
    setNodeRef,
  } = useSortable({
    id,
    transition: {
      duration: 150,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <div {...attributes} className={styles.root} style={style} ref={setNodeRef}>
      <button
        {...listeners}
        className={styles.handle}
        ref={setActivatorNodeRef}
      >
        <DotsIcon width={16} height={16} />
      </button>
      <div>{children}</div>
    </div>
  );
};

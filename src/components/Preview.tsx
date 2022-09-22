import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../hooks/use-store";
import { SimpleCard } from "./cards/SimpleCard";
import styles from "./Preview.module.scss";
import { SimpleResume } from "./resumes/simpleResume/SimpleResume";

interface PreviewProps {
  ref: ForwardedRef<HTMLDivElement>;
}

export const Preview: FC<PreviewProps> = forwardRef((_, ref) => {
  const {
    store: { layout },
    deleteStoreItem,
    updateStore,
  } = useStore();

  function editStoreItem(isEditing: IsEditingProps) {
    document
      .getElementById(isEditing.path)
      ?.scrollIntoView({ behavior: "smooth" });
    updateStore("isEditing", isEditing);
    
    
  }

  return (
    <div className={styles.root}>
      <div className={styles[layout]}>
        {layout === "card" && <SimpleCard ref={ref} />}
        {layout === "resume" && (
          <SimpleResume
            ref={ref}
            onDelete={deleteStoreItem}
            onEdit={editStoreItem}
          />
        )}
      </div>
    </div>
  );
});

import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../hooks/use-store";
import { SimpleCard } from "./cards/SimpleCard";
import styles from "./Preview.module.scss";
import { SimpleResume } from "./resumes/SimpleResume";

interface PreviewProps {
  ref: ForwardedRef<HTMLDivElement>;
}

export const Preview: FC<PreviewProps> = forwardRef((_, ref) => {
  const {
    store: { layout },
    deleteStoreItem,
  } = useStore();

  return (
    <div className={styles.root}>
      <div className={styles[layout]}>
        {layout === "card" && <SimpleCard ref={ref} />}
        {layout === "resume" && (
          <SimpleResume ref={ref} onDelete={deleteStoreItem} />
        )}
      </div>
    </div>
  );
});

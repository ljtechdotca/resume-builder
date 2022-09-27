import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../hooks/use-store";
import { DefaultCard } from "./cards/DefaultCard";
import styles from "./Preview.module.scss";
import { DefaultResume } from "./resumes/DefaultResume";

interface PreviewProps {
  ref: ForwardedRef<HTMLDivElement>;
}

export const Preview: FC<PreviewProps> = forwardRef((_, ref) => {
  const { store } = useStore();

  return (
    <div className={styles.root}>
      <div className={styles[store.layout]}>
        {store.layout === "card" && <DefaultCard ref={ref} />}{" "}
        {store.layout === "resume" && <DefaultResume ref={ref} />}{" "}
      </div>
    </div>
  );
});

import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../../hooks/use-store";
import styles from "./SimpleCard.module.scss";

interface CardProps {
  ref?: ForwardedRef<HTMLDivElement>;
}

export const SimpleCard: FC<CardProps> = forwardRef((_, ref) => {
  const {
    store: {
      primaryColor,
      contact: { email, phone },
      firstName,
      lastName,
      title,
    },
  } = useStore();

  return (
    <div className={styles.root} ref={ref}>
      <div>
        <img
          src="/logo192.png"
          alt=""
          height={32}
          width={32}
          style={{ backgroundColor: primaryColor ?? "dodgerblue" }}
        />
        <h1>
          {firstName ?? "John"} {lastName ?? "Doe"}
        </h1>
        <h2>{title ?? "Professional Title"}</h2>
      </div>
      <div>
        <h3>T {phone ?? "(123) 123-1234"}</h3>
        <h3>E {email ?? "example@email.com"}</h3>
      </div>
    </div>
  );
});

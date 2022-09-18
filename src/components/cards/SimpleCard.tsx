import { FC, ForwardedRef, forwardRef, useContext } from "react";
import { StoreContext } from "../../App";
import styles from "./SimpleCard.module.scss";

interface CardProps {
  ref?: ForwardedRef<HTMLDivElement>;
}

export const SimpleCard: FC<CardProps> = forwardRef(({}, ref) => {
  const {
    store: {
      primaryColor,
      contact: { city, state, zipCode, email, phone, socials },
      education,
      experiences,
      firstName,
      lastName,
      other,
      skills,
      summary,
      title,
    },
  } = useContext(StoreContext);

  return (
    <div className={styles.root} ref={ref}>
      <div>
        <img
          src="/logo192.png"
          alt=""
          height={64}
          width={64}
          style={{ backgroundColor: primaryColor ?? "dodgerblue" }}
        />
        <h1>
          {firstName} {lastName}
        </h1>
        <h2>{title}</h2>
      </div>
      <div>
        <h3>T {phone}</h3>
        <h3>E {email}</h3>
      </div>
    </div>
  );
});

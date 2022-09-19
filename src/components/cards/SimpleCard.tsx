import { FC, ForwardedRef, forwardRef, useContext } from "react";
import { StoreContext } from "../../App";
import { checkValue } from "../../lib/check-value";
import styles from "./SimpleCard.module.scss";

interface CardProps {
  ref?: ForwardedRef<HTMLDivElement>;
}

export const SimpleCard: FC<CardProps> = forwardRef(({}, ref) => {
  const {
    store: {
      primaryColor,
      contact: { city, state, zipCode, email, phone, urls },
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
          height={32}
          width={32}
          style={{ backgroundColor: primaryColor ?? "dodgerblue" }}
        />
        <h1>
          {checkValue("John", firstName)} {checkValue("Doe", lastName)}
        </h1>
        <h2>{checkValue("Professional Title", title)}</h2>
      </div>
      <div>
        <h3>T {checkValue("(123) 123-1234", phone)}</h3>
        <h3>E {checkValue("example@email.com", email)}</h3>
      </div>
    </div>
  );
});
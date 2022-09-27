import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../../hooks/use-store";
import { checkValue } from "../../lib/checkValue";
import { EmailIcon, PhoneIcon } from "../icons";
import styles from "./DefaultCard.module.scss";

interface DefaultCardProps {
  ref: ForwardedRef<HTMLDivElement>;
}

export const DefaultCard: FC<DefaultCardProps> = forwardRef((_, ref) => {
  const {
    store: { data },
  } = useStore();

  return (
    <div className={styles.root} ref={ref}>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1455169155733377027/Eczv5-Jb_400x400.jpg"
          alt=""
        />
        <h2>
          {checkValue(data.user.firstName)} {checkValue(data.user.lastName)}
        </h2>
        <p>{checkValue(data.user.title)}</p>
      </div>
      <div>
        <div className={styles.base}>
          <PhoneIcon width={16} height={16} /> {checkValue(data.user.phone)}
        </div>
        <div className={styles.base}>
          <EmailIcon width={16} height={16} /> {checkValue(data.user.email)}
        </div>
      </div>
    </div>
  );
});

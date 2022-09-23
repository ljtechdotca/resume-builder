import { FC, ForwardedRef, forwardRef } from "react";
import { useStore } from "../../hooks/use-store";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as EmailIcon } from "../icons/email.svg";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import styles from "./DefaultResume.module.scss";

interface DefaultResumeProps {
  ref: ForwardedRef<HTMLDivElement>;
}

export const DefaultResume: FC<DefaultResumeProps> = forwardRef((_, ref) => {
  const {
    store: { data },
  } = useStore();

  function checkValue(value: any) {
    return value ? value : "None";
  }

  return (
    <div className={styles.root} ref={ref}>
      <aside>
        <div className={styles.base}>
          <h1>
            <div>{checkValue(data.user.firstName)}</div>
            <div>{checkValue(data.user.lastName)}</div>
          </h1>
          <h2>{checkValue(data.user.title)}</h2>
        </div>
        <div>
          <div className={styles.heading}>
            <h2>Contact</h2>
          </div>
          <div className={styles.base__bottom}>
            <div>
              <h4>
                <PhoneIcon width={16} height={16} />
                Phone
              </h4>
              {checkValue(data.user.phone)}
            </div>
            <div>
              <h4>
                <EmailIcon width={16} height={16} />
                Email
              </h4>
              {checkValue(data.user.email)}
            </div>
            <div>
              <h4>
                <LocationIcon width={16} height={16} />
                Address
              </h4>
              {checkValue(data.contact.city)}, {checkValue(data.contact.state)},{" "}
              {checkValue(data.contact.zipCode)}
            </div>
            {data.socials.map((social: any) => (
              <div key={social.name}>
                <h4>{social.name}</h4>
                <div>{social.handle}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.heading}>
            <h2>Skills</h2>
          </div>
          <div className={styles.base__bottom}>
            {data.skills.map((skill: any) => (
              <div key={skill.name}>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <div>
        <div className={styles.base}>
          <p>{checkValue(data.about.summary)}</p>
        </div>
        <div className={styles.base}>
          <hr />
          <h2>Work History</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, quidem!
          </p>
          <div>
            {data.workHistory.map((item: any) => (
              <div key={item.title} className={styles.base__item}>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>
                  <CalendarIcon width={16} height={16} /> {item.startDate} -{" "}
                  {item.endDate} | <LocationIcon width={16} height={16} />{" "}
                  {item.location}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.base}>
          <hr />
          <h2>Education</h2>
          <hr />
          {data.education.map((item: any) => (
            <div key={item.title} className={styles.base__item}>
              <h3>{item.title}</h3>
              <p>
                <CalendarIcon width={16} height={16} /> {item.startDate} -{" "}
                {item.endDate} | <LocationIcon width={16} height={16} />{" "}
                {item.location}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.base}>
          <hr />
          <h2>Interests</h2>
          <hr />
          {data.interests.map((item: any) => (
            <div key={item.title} className={styles.base__item}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

import set from "lodash.set";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldValues } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.scss";
import { SimpleColumn } from "./components/cv/SimpleColumn";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import {
  contactFields,
  dateRangeFields,
  optionsFields,
  skillsFields,
  socialsFields,
  userFields,
} from "./lib/fields";

const defaultResume: ResumeProps = {
  contact: {
    city: null,
    state: null,
    zipCode: null,
    email: null,
    phone: null,
    socials: {},
  },
  firstName: null,
  lastName: null,
  summary: null,
  title: null,
  education: [],
  experiences: [],
  skills: [],
  other: {},
};

export const StoreContext = createContext<{
  store: ResumeProps;
  setStore: Dispatch<SetStateAction<ResumeProps>>;
}>({ store: defaultResume, setStore: () => {} });

function App() {
  const [store, setStore] = useState<ResumeProps>(defaultResume);

  function handleChange(target: string, value: string) {
    const newStore = { ...store };
    console.log(newStore);
    set(newStore, target, value);
    setStore(newStore);
  }

  // @TODO : change this thing so its not so awful 😭
  function handleArrayTargetSuccess(data: FieldValues, target: string) {
    setStore((currentStore) => ({
      ...currentStore,
      [target]: [...(currentStore as any)[target], { ...data }],
    }));
  }

  function handleSocialsSuccess(data: FieldValues) {
    setStore((currentStore) => ({
      ...currentStore,
      contact: {
        ...currentStore.contact,
        socials: { ...currentStore.contact.socials, [data.key]: data.value },
      },
    }));
  }

  function checkKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === "p") {
      event.preventDefault();
      handlePrint();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", checkKeyDown);

    return () => {
      document.removeEventListener("keydown", checkKeyDown);
    };
  });

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ content: () => printRef.current });

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <div>
        <Header onPrint={handlePrint} />
        <main className={styles.root}>
          <div className={styles.base__scroll}>
            <div className={styles.item}>
              <Form title="Options" fields={optionsFields} />
            </div>
            <div className={styles.item}>
              <Form title="User" fields={userFields} onChange={handleChange} />
            </div>
            <div className={styles.item}>
              <Form
                title="Contact"
                fields={contactFields}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Socials"
                fields={socialsFields}
                onSuccess={handleSocialsSuccess}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Skills"
                fields={skillsFields}
                onSuccess={(data) => handleArrayTargetSuccess(data, "skills")}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Work Experience"
                fields={dateRangeFields}
                onSuccess={(data) =>
                  handleArrayTargetSuccess(data, "experiences")
                }
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Education"
                fields={dateRangeFields}
                onSuccess={(data) =>
                  handleArrayTargetSuccess(data, "education")
                }
              />
            </div>
          </div>
          <div className={styles.base__fixed}>
            <Preview>
              <SimpleColumn ref={printRef} />
            </Preview>
          </div>
        </main>
      </div>
    </StoreContext.Provider>
  );
}

export default App;

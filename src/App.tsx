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
import { SimpleCard } from "./components/cards/SimpleCard";
import { SimpleColumn } from "./components/cv/SimpleColumn";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { OptionsForm } from "./components/OptionsForm";
import { Preview } from "./components/Preview";
import {
  contactFields,
  dateRangeFields,
  skillsFields,
  socialsFields,
  userFields,
} from "./lib/defaults";

const defaultResume: StoreProps = {
  layout: "cv",
  zoomed: false,
  primaryColor: null,
  secondaryColor: null,
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
  store: StoreProps;
  setStore: Dispatch<SetStateAction<StoreProps>>;
}>({ store: defaultResume, setStore: () => {} });

function App() {
  const [store, setStore] = useState<StoreProps>(defaultResume);

  function handleChange(path: string, value: any) {
    const newStore = { ...store };
    set(newStore, path, value);
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
    if (event.key === "-") {
      zoomOut();
    }
    if (event.key === "=") {
      zoomIn();
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

  function zoomIn() {
    setStore((curr) => ({ ...curr, scale: 1 }));
  }
  function zoomOut() {
    setStore((curr) => ({ ...curr, scale: 0.5 }));
  }

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      <div className={styles.root}>
        <Header onPrint={handlePrint} />
        <main className={styles.base}>
          <div className={styles.scroll}>
            <div className={styles.item}>
              <OptionsForm />
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
          <Preview
            onZoomIn={() => handleChange("zoomed", true)}
          >
            {store.layout === "card" && <SimpleCard ref={printRef} />}
            {store.layout === "cv" && <SimpleColumn ref={printRef} />}
          </Preview>
        </main>
        {store.zoomed && (
          <Modal onZoomOut={() => handleChange("zoomed", false)}>
            {store.layout === "card" && <SimpleCard />}
            {store.layout === "cv" && <SimpleColumn />}
          </Modal>
        )}
      </div>
    </StoreContext.Provider>
  );
}

export default App;

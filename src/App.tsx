import get from "lodash.get";
import set from "lodash.set";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  urlFields,
  userFields,
} from "./lib/defaults";

const defaultResume: StoreProps = {
  layout: "cv",
  isEditing: true,
  isPreviewing: false,
  primaryColor: null,
  secondaryColor: null,
  contact: {
    city: null,
    state: null,
    zipCode: null,
    email: null,
    phone: null,
    urls: {},
  },
  firstName: userFields.defaultValues.firstName,
  lastName: userFields.defaultValues.lastName,
  summary: userFields.defaultValues.summary,
  title: userFields.defaultValues.title,
  education: {},
  experiences: {},
  skills: {},
  other: {},
};

export const StoreContext = createContext<{
  store: StoreProps;
  setStore: Dispatch<SetStateAction<StoreProps>>;
}>({ store: defaultResume, setStore: () => {} });

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const [store, setStore] = useState<StoreProps>(defaultResume);

  const handlePrint = useReactToPrint({ content: () => printRef.current });

  function updateStore(path: string, value: any) {
    const newStore = { ...store };
    set(newStore, path, value);
    setStore(newStore);
  }

  function injectStoreItem(path: string, item: Item) {
    let newStoreItems = get(store, path);
    newStoreItems = { ...newStoreItems, [item.title]: item };
    updateStore(path, newStoreItems);
  }

  function deleteStoreItem(...path: string[]) {
    const newStoreItems = get(store, path[0]);
    delete newStoreItems[path[1]];
    updateStore(path[0], newStoreItems);
  }

  const checkKeyDown = useCallback(
    (event: KeyboardEvent) => {
      console.log("checkKeyDown");
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        console.log("Printing component...");
        setStore((curr) => ({ ...curr, isEditing: false }));
        handlePrint();
      }
    },
    [handlePrint]
  );

  // @TODO : 🐛 there is a problem reading the keydown more than once after using CTRL + P?
  function initKeyboardEventListener() {
    document.addEventListener("keydown", checkKeyDown);

    return () => {
      document.removeEventListener("keydown", checkKeyDown);
    };
  }

  useEffect(initKeyboardEventListener, [checkKeyDown]);

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
              <Form title="User" fields={userFields} onChange={updateStore} />
            </div>
            <div className={styles.item}>
              <Form
                title="Contact"
                fields={contactFields}
                onChange={updateStore}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Other Contact Information"
                fields={urlFields}
                onSuccess={(data) => injectStoreItem("contact.urls", data)}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Skills"
                fields={skillsFields}
                onSuccess={(data) => injectStoreItem("skills", data)}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Work Experience"
                fields={dateRangeFields}
                onSuccess={(data) => injectStoreItem("experiences", data)}
              />
            </div>
            <div className={styles.item}>
              <Form
                title="Education"
                fields={dateRangeFields}
                onSuccess={(data) => injectStoreItem("education", data)}
              />
            </div>
          </div>
          <Preview onZoomIn={() => updateStore("isPreviewing", true)}>
            {store.layout === "card" && <SimpleCard ref={printRef} />}
            {store.layout === "cv" && (
              <SimpleColumn ref={printRef} onDelete={deleteStoreItem} />
            )}
          </Preview>
        </main>
        {store.isPreviewing && (
          <Modal onZoomOut={() => updateStore("isPreviewing", false)}>
            {store.layout === "card" && <SimpleCard />}
            {store.layout === "cv" && (
              <SimpleColumn onDelete={deleteStoreItem} />
            )}
          </Modal>
        )}
      </div>
    </StoreContext.Provider>
  );
}

export default App;

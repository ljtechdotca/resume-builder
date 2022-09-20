import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.scss";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { StoreProvider } from "./hooks/use-store";

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const usePrint = useReactToPrint({ content: () => printRef.current });

  return (
    <StoreProvider>
      <Header onPrint={usePrint} />
      <main className={styles.root}>
        {/* <div className={styles.scroll}>
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
        </div> */}
        <Forms />
        <Preview ref={printRef} />
      </main>
    </StoreProvider>
  );
}

export default App;

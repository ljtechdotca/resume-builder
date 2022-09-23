import { useCallback, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.scss";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { StoreProvider } from "./hooks/use-store";

function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLButtonElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    removeAfterPrint: true,
  });

  const checkKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "p") {
        event.preventDefault();
        handlePrint();
      }
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        themeRef.current?.click();
      }
    },
    [handlePrint]
  );

  useEffect(() => {
    document.addEventListener("keydown", checkKeyDown);

    return () => {
      document.removeEventListener("keydown", checkKeyDown);
    };
  }, [checkKeyDown]);

  return (
    <StoreProvider>
      <Header ref={themeRef} onPrint={handlePrint} />
      <main className={styles.root}>
        <Form />
        <Preview ref={printRef} />
      </main>
    </StoreProvider>
  );
}

export default App;

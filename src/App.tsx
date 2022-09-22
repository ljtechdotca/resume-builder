import { useCallback, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./App.module.scss";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { StoreProvider } from "./hooks/use-store";

function App() {
  const printRef = useRef<HTMLDivElement>(null);
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
        console.log("ctrl + k");
        document.getElementById("theme")?.click();
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
      <Header onPrint={handlePrint} />
      <main className={styles.root}>
        <Forms />
        <Preview ref={printRef} />
      </main>
    </StoreProvider>
  );
}

export default App;

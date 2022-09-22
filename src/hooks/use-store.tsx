import get from "lodash.get";
import set from "lodash.set";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { userFields } from "../lib/defaults";

const initialStore: StoreProps = {
  theme: "dark",
  layout: "resume",
  isEditing: null,
  isPreviewing: false,
  primaryColor: null,
  secondaryColor: null,
  contact: {
    city: null,
    state: null,
    zipCode: null,
    email: null,
    phone: null,
    urls: {
      Twitter: {
        title: "Twitter",
        content: "@ljtechdotca",
        url: "@ljtechdotca",
      },
    },
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
}>({ store: initialStore, setStore: () => {} });

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext);

  function updateStore(path: string, value: any) {
    const newStore = { ...store };
    set(newStore, path, value);
    setStore(newStore);
  }

  function injectStoreItem(path: string, item: Item) {
    let newStoreItems = get(store, path);
    newStoreItems = { ...newStoreItems, [item.title]: item };
    console.log({ newStoreItems });
    updateStore(path, newStoreItems);
  }

  function deleteStoreItem(...path: string[]) {
    const newStoreItems = get(store, path[0]);
    delete newStoreItems[path[1]];
    updateStore(path[0], newStoreItems);
  }

  function changeTheme(
    oldTheme: StoreProps["theme"],
    newTheme: StoreProps["theme"]
  ) {
    // const newTheme = store.theme === "dark" ? "light" : "dark";
    console.log("changing theme", oldTheme, newTheme);
    document.body.classList.remove(oldTheme);
    document.body.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    updateStore("theme", newTheme);
  }

  return {
    store,
    setStore,
    changeTheme,
    updateStore,
    injectStoreItem,
    deleteStoreItem,
  };
};

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store, setStore] = useState<StoreProps>(initialStore);

  useEffect(() => {
    document.body.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};

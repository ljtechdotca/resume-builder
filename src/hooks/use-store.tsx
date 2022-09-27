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

const initialStore: StoreProps = {
  data: {
    user: {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phone: "",
    },
    contact: {
      city: "",
      state: "",
      zipCode: "",
    },
    socials: [],
    skills: [],
    about: {
      summary: "",
    },
    workHistory: [],
    education: [],
    interests: [],
  },
  theme: "dark",
  layout: "card",
};

export const StoreContext = createContext<{
  store: StoreProps;
  setStore: Dispatch<SetStateAction<StoreProps>>;
}>({ store: initialStore, setStore: () => {} });

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext);

  function updateData(data: Record<string, any>) {
    setStore((currentStore) => ({
      ...currentStore,
      data: {
        ...currentStore.data,
        ...data,
      },
    }));
  }

  function changeTheme() {
    const newTheme = store.theme === "dark" ? "light" : "dark";
    document.body.classList.remove(store.theme);
    document.body.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    setStore((currentStore) => ({ ...currentStore, theme: newTheme }));
  }

  return {
    store,
    setStore,
    changeTheme,
    updateData,
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

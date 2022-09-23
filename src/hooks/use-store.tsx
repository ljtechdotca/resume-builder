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
      firstName: "Landon",
      lastName: "Johnson",
      title: "Sandwich Artisan",
      email: "sandwich@artisan.com",
      phone: "(123) 123-1234",
    },
    contact: {
      city: "Toronto",
      state: "Ontario",
      zipCode: "123 ABC",
    },
    socials: [
      {
        name: "Twitter",
        handle: "@ljtechdotca",
      },
      {
        name: "GitHub",
        handle: "@ljtechdotca",
      },
    ],
    skills: [
      {
        name: "Twerking",
      },
    ],
    about: {
      summary: "Lorem ipsuim dolor set amet!",
    },
    workHistory: [
      {
        title: "Sandwich Artisan",
        company: "Subway",
        location: "Tilted Towers Fortnite",
        description: "I built sandwich.",
        startDate: "09/27/2022",
        endDate: "09/27/2022",
      },
    ],
    education: [
      {
        title: "Sandwich Artisan",
        location: "Tilted Towers Fortnite",
        description: "I learned about sandwich.",
        startDate: "09/27/2022",
        endDate: "09/27/2022",
      },
    ],
    interests: [
      {
        name: "Twerking in Fortnite",
      },
    ],
  },
  theme: "dark",
  layout: "resume",
  lastTouched: "",
};

export const StoreContext = createContext<{
  store: StoreProps;
  setStore: Dispatch<SetStateAction<StoreProps>>;
}>({ store: initialStore, setStore: () => {} });

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext);

  function recordTouch(lastTouched: any) {
    setStore((currentStore) => ({
      ...currentStore,
      lastTouched,
    }));
  }

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
    recordTouch,
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

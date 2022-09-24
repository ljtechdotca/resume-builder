type ThemeType = "dark" | "light";

type LayoutType = "card" | "resume";

type FieldsType =
  | "user"
  | "contact"
  | "about"
  | "education"
  | "interests"
  | "skills"
  | "socials"
  | "workHistory";
interface InputProps {
  type?: string;
  label: string;
  name: string;
  placeholder: string;
}

interface StoreProps {
  data: Record<string, any>;
  layout: LayoutType;
  theme: ThemeType;
  lastTouched: any;
  isPreviewing: boolean;
}

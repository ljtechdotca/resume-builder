type ThemeType = "dark" | "light";

type LayoutType = "card" | "resume";

interface StoreProps {
  data: Record<string, any>;
  layout: LayoutType;
  theme: ThemeType;
  lastTouched: any;
}

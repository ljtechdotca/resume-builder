interface Item {
  title: string;
  [key: string]: any;
}

interface DateItem extends Item {
  startDate: string;
  endDate: string;
}

interface ContentItem extends Item {
  content: string;
}

// interface ExperienceItem extends Item {
//   startDate: string;
//   endDate: string;
//   position: string;
//   location: string;
//   accomplishments: string[];
// }

// interface EducationItem extends Item {
//   startDate: string;
//   endDate: string;
//   location: string;
// }

type LayoutType = "card" | "resume";

interface FormProps {
  title: string;
  fields: {
    defaultValues: Record<string, any>;
    inputs: InputProps[];
  };
  onSuccess?: (data: FieldValues) => void;
  onFail?: (data: FieldValues) => void;
  onChange?: (target: string, value: string) => void;
}

interface InputProps {
  label: string;
  name: string;
  target: string;
  type: string;
  minLength?: number;
  maxLength?: number;
}

interface ContactProps {
  city: string | null;
  state: string | null;
  zipCode: string | null;
  email: string | null;
  phone: string | null;
  urls: Record<string, ContentItem>;
}

interface FormFields {
  defaultValues: Record<string, any>;
  inputs: InputProps[];
}

interface LayoutProps {
  height: number;
  width: number;
}

interface StoreProps {
  layout: LayoutType;
  isEditing: boolean;
  isPreviewing: boolean;
  primaryColor: string | null;
  secondaryColor: string | null;
  firstName: string | null;
  lastName: string | null;
  title: string | null;
  summary: string | null;
  contact: ContactProps;
  education: Record<string, DateItem>;
  experiences: Record<string, DateItem>;
  skills: Record<string, Item>;
  other: {
    [key: string]: Item[];
  };
}

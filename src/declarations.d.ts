interface Item {
  title: string;
  [key: string]: any;
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
  socials: {
    [key: string]: string;
  };
}

interface ResumeProps {
  firstName: string | null;
  lastName: string | null;
  title: string | null;
  summary: string | null;
  contact: ContactProps;
  education: Item[];
  experiences: Item[];
  skills: Item[];
  other: {
    [key: string]: Item[];
  };
}

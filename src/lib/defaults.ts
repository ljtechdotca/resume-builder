interface FieldsDataProps {
  title: string;
  inputs: InputProps[];
  defaultValues?: Record<string, any>;
}

export const fieldsData: Record<FieldsType, FieldsDataProps> = {
  user: {
    title: "Basic Information",
    inputs: [
      {
        type: "text",
        label: "First Name",
        name: "firstName",
        placeholder: "John",
      },
      {
        type: "text",
        label: "Last Name",
        name: "lastName",
        placeholder: "Doe",
      },
      {
        type: "text",
        label: "Title",
        name: "title",
        placeholder: "IT Specialist",
      },
      {
        type: "text",
        label: "Phone",
        name: "phone",
        placeholder: "(123) 123-1234",
      },
      {
        type: "text",
        label: "Email",
        name: "email",
        placeholder: "example@email.com",
      },
    ],
  },
  contact: {
    title: "Contact Information",
    inputs: [
      {
        type: "text",
        label: "City",
        name: "city",
        placeholder: "Toronto",
      },
      {
        type: "text",
        label: "State / Province",
        name: "state",
        placeholder: "Ontario",
      },
      {
        type: "text",
        label: "Zip Code / Postal Code",
        name: "zipCode",
        placeholder: "123 ABC",
      },
    ],
  },
  socials: {
    title: "Social Profiles",
    defaultValues: { name: "", handle: "" },
    inputs: [
      {
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "Twitter",
      },
      {
        type: "text",
        label: "Handle",
        name: "handle",
        placeholder: "/ljtechdotca",
      },
    ],
  },
  skills: {
    title: "Your Skills",
    defaultValues: { name: "" },
    inputs: [
      {
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "Communication Skills",
      },
    ],
  },
  about: {
    title: "About",
    inputs: [
      {
        type: "textarea",
        label: "Summary",
        name: "summary",
        placeholder: "Lorem ipsum dolor set amet.",
      },
    ],
  },
  workHistory: {
    title: "Work History",
    defaultValues: {
      title: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    },
    inputs: [
      {
        type: "text",
        label: "Title",
        name: "title",
        placeholder: "IT Specialist",
      },
      {
        type: "text",
        label: "Company",
        name: "company",
        placeholder: "ABC Tech Co.",
      },
      {
        type: "text",
        label: "Location",
        name: "location",
        placeholder: "Ontario, CA",
      },
      {
        type: "startDate",
        label: "Start Date",
        name: "startDate",
        placeholder: "09/01/2020",
      },
      {
        type: "endDate",
        label: "End Date",
        name: "endDate",
        placeholder: "09/01/2022",
      },
      {
        type: "text",
        label: "Description",
        name: "description",
        placeholder:
          "Demonstrated leadership in implementing adequate training to team members.",
      },
    ],
  },
  education: {
    title: "Education",
    defaultValues: {
      title: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    },
    inputs: [
      {
        type: "text",
        label: "Title",
        name: "title",
        placeholder: "Toronto University",
      },
      {
        type: "text",
        label: "Location",
        name: "location",
        placeholder: "Ontario, CA",
      },
      {
        type: "startDate",
        label: "Start Date",
        name: "startDate",
        placeholder: "09/01/2020",
      },
      {
        type: "endDate",
        label: "End Date",
        name: "endDate",
        placeholder: "09/01/2022",
      },
      {
        type: "text",
        label: "Description",
        name: "description",
        placeholder:
          "Thesis title - Digital Eavesdropper: Acoustic Speech",
      },
    ],
  },
  interests: {
    title: "Your Interests",
    defaultValues: { name: "" },
    inputs: [
      {
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "Technical Writing",
      },
    ],
  },
};

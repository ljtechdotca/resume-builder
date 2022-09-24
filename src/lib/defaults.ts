interface FieldsDataProps {
  inputs: InputProps[];
  defaultValues?: Record<string, any>;
}

export const fieldsData: Record<FieldsType, FieldsDataProps> = {
  user: {
    inputs: [
      {
        type: "text",
        label: "First Name",
        name: "firstName",
        placeholder: "Landon",
      },
      {
        type: "text",
        label: "Last Name",
        name: "lastName",
        placeholder: "Johnson",
      },
      {
        type: "text",
        label: "Title",
        name: "title",
        placeholder: "Sandwich Artisan",
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
    inputs: [
      {
        type: "text",
        label: "City",
        name: "city",
        placeholder: "Toronto",
      },
      {
        type: "text",
        label: "State",
        name: "state",
        placeholder: "Ontario",
      },
      {
        type: "text",
        label: "Zip Code",
        name: "zipCode",
        placeholder: "123 ABC",
      },
    ],
  },
  socials: {
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
        placeholder: "@ljtechdotca",
      },
    ],
  },
  skills: {
    defaultValues: { name: "" },
    inputs: [
      {
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "Twerking",
      },
    ],
  },
  about: {
    inputs: [
      {
        type: "textarea",
        label: "Summary",
        name: "summary",
        placeholder: "Lorem ipsum dolor set amet.",
      },
    ],
  },
  education: {
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
        type: "date",
        label: "Start Date",
        name: "startDate",
        placeholder: "9/23/2022",
      },
      {
        type: "date",
        label: "End Date",
        name: "endDate",
        placeholder: "9/23/2022",
      },
      {
        type: "text",
        label: "Description",
        name: "description",
        placeholder:
          "Thesis title: Low-cost mana generation in under-resourced environments.",
      },
    ],
  },
  workHistory: {
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
        placeholder: "Community Witch",
      },
      {
        type: "text",
        label: "Company",
        name: "company",
        placeholder: "City of Toronto",
      },
      {
        type: "text",
        label: "Location",
        name: "location",
        placeholder: "Ontario, CA",
      },
      {
        type: "date",
        label: "Start Date",
        name: "startDate",
        placeholder: "9/23/2022",
      },
      {
        type: "date",
        label: "End Date",
        name: "endDate",
        placeholder: "9/23/2022",
      },
      {
        type: "text",
        label: "Description",
        name: "description",
        placeholder: "Applying magical potions and other witch duties.",
      },
    ],
  },
  interests: {
    defaultValues: { name: "" },
    inputs: [
      {
        type: "text",
        label: "Name",
        name: "name",
        placeholder: "Playing Fortnite",
      },
    ],
  },
};

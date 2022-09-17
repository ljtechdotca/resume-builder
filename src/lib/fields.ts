interface FormFields {
  defaultValues: Record<string, any>;
  inputs: InputProps[];
}

export const userFields: FormFields = {
  defaultValues: {
    firstName: "🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈",
    lastName: "",
    title: "",
    summary: "",
  },
  inputs: [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      target: "firstName",
      minLength: 1,
      maxLength: 32,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      target: "lastName",
      minLength: 1,
      maxLength: 32,
    },
    {
      label: "Professional Title",
      name: "title",
      type: "text",
      target: "title",
      minLength: 4,
      maxLength: 32,
    },
    {
      label: "Summary",
      name: "summary",
      type: "textarea",
      target: "summary",
      minLength: 100,
      maxLength: 500,
    },
  ],
};

export const optionsFields: FormFields = {
  defaultValues: {
    color: "#05a05a",
  },
  inputs: [
    {
      label: "Primary Color",
      name: "primaryColor",
      type: "color",
      target: "primaryColor",
    },
  ],
};

export const socialsFields: FormFields = {
  defaultValues: {
    key: "",
    value: "",
  },
  inputs: [
    {
      label: "Key Name",
      name: "key",
      type: "text",
      target: "contact.socials",
      minLength: 2,
      maxLength: 16,
    },
    {
      label: "Value",
      name: "value",
      type: "text",
      target: "contact.socials",
      minLength: 2,
      maxLength: 32,
    },
  ],
};

export const contactFields: FormFields = {
  defaultValues: {
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
  },
  inputs: [
    {
      label: "City Name",
      name: "city",
      type: "text",
      target: "contact.city",
      minLength: 1,
      maxLength: 32,
    },
    {
      label: "State / Province",
      name: "state",
      type: "text",
      target: "contact.state",
      minLength: 1,
      maxLength: 32,
    },
    {
      label: "Zip Code / Postal Code",
      name: "zipCode",
      type: "text",
      target: "contact.zipCode",
      minLength: 5,
      maxLength: 10,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      target: "contact.phone",
      minLength: 4,
      maxLength: 32,
    },
    {
      label: "Email Address",
      name: "email",
      type: "text",
      target: "contact.email",
      minLength: 4,
      maxLength: 32,
    },
  ],
};

export const dateRangeFields: FormFields = {
  defaultValues: {
    title: "",
    location: "",
    startDate: "",
    endDate: "",
  },
  inputs: [
    {
      label: "Title",
      name: "title",
      type: "text",
      target: "title",
      minLength: 4,
      maxLength: 32,
    },
    {
      label: "Position",
      name: "position",
      type: "text",
      target: "position",
      minLength: 4,
      maxLength: 32,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      target: "location",
      minLength: 4,
      maxLength: 32,
    },
    {
      label: "Start Date",
      name: "startDate",
      type: "date",
      target: "startDate",
    },
    {
      label: "End Date",
      name: "endDate",
      type: "date",
      target: "endDate",
    },
  ],
};

export const skillsFields: FormFields = {
  defaultValues: {
    title: "",
  },
  inputs: [
    {
      label: "Name of Skill",
      name: "title",
      type: "text",
      target: "title",
      minLength: 4,
      maxLength: 32,
    },
  ],
};

export const layoutSizes: Record<LayoutType, LayoutProps> = {
  card: {
    height: 2,
    width: 3.5,
  },
  cv: {
    height: 11,
    width: 8.5,
  },
};

export const userFields: FormFields = {
  defaultValues: {
    firstName: "",
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
      maxLength: 48,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      target: "lastName",
      minLength: 1,
      maxLength: 48,
    },
    {
      label: "Professional Title",
      name: "title",
      type: "text",
      target: "title",
      minLength: 4,
      maxLength: 48,
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

export const urlFields: FormFields = {
  defaultValues: {
    title: "",
    content: "",
  },
  inputs: [
    {
      label: "Title",
      name: "title",
      type: "text",
      target: "contact.urls.title",
      minLength: 2,
      maxLength: 16,
    },
    {
      label: "URL",
      name: "content",
      type: "text",
      target: "contact.urls.content",
      minLength: 2,
      maxLength: 48,
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
      maxLength: 48,
    },
    {
      label: "State / Province",
      name: "state",
      type: "text",
      target: "contact.state",
      minLength: 1,
      maxLength: 48,
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
      maxLength: 48,
    },
    {
      label: "Email Address",
      name: "email",
      type: "text",
      target: "contact.email",
      minLength: 4,
      maxLength: 48,
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
      maxLength: 48,
    },
    {
      label: "Position",
      name: "position",
      type: "text",
      target: "position",
      minLength: 4,
      maxLength: 48,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      target: "location",
      minLength: 4,
      maxLength: 48,
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
      maxLength: 48,
    },
  ],
};

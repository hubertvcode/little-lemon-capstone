
// All the inputs except React DatePicker and <select> type inputs

const inputsInfoData = [
    {
      id: "fname",
      testId: "firstName",
      labelText: "First Name *",
      labelId: "label-fname",
      htmlFor: "fname",
      name: "fname",
      type: "text",
      placeholder: "Enter your Name",
      required: true,
    },
    {
      id: "lname",
      testId: "lastName",
      labelText: "Last Name *",
      labelId: "label-lname",
      htmlFor: "lname",
      name: "lname",
      type: "text",
      placeholder: "Enter your Last Name",
      required: true,
    },
    {
      id: "email",
      testId: "emailAddress",
      labelText: "mail*",
      labelId: "label-email",
      htmlFor: "email",
      name: "email",
      type: "email",
      placeholder: 'example@example.com',
      required: true,
    },
    {
      id: "phone",
      testId: "phoneNumber",
      labelText: "Phone *",
      labelId: "label-phone",
      htmlFor: "phone",
      name: "phone",
      type: "tel",
      placeholder:'000 000 00 00',
      required: true,
    },

  ];

  const checkboxData = [
    {
      id: "email-option",
      labelText: "Email",
      labelId: "label-email-option",
      htmlFor: "email-option",
      name: "emailOption",
      type: "checkbox",
      value: 'Email',
      // required: true,
    },
    {
      id: "text-option",
      labelText: "Text",
      labelId: "label-text-option",
      htmlFor: "text-option",
      name: "textOption",
      type: "checkbox",
      value: 'Text',
      // required: true,
    }
  ];

  export { inputsInfoData, checkboxData }
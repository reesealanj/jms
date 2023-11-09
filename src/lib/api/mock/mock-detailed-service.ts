export const MOCK_FULL_SERVICE = {
  id: "123344",
  status: "open",
  customer: {
    id: "1232424",
    firstName: "Brian",
    lastName: "Jason",
    email: "reesealanj@gmail.com",
    phone: "940-453-5492",
  },
  customerComments: [
    {
      id: "087968",
      content: "Customer states boat not starting. Has not been run in years",
      createdAt: "February 11th, 2023 at 12:03pm",
      isInternal: false,
    },
  ],
  comments: [
    {
      id: "0879asd68",
      content: "Parts order placed for both motor cap and cables.",
      createdAt: "February 12th, 2023 at 1pm",
      isInternal: true,
    },
    {
      id: "0879asd68",
      content: "Contacted Customer: parts recieved and working on solutions.",
      createdAt: "February 14th, 2023 at 1pm",
      isInternal: true,
    },
  ],
  history: [
    {
      name: "Reese Jones",
      date: "02-08-1999",
      itemType: "start",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content: "1 boat & 2 motors",
      itemType: "add",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content: "5 items",
      itemType: "add",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content:
        "Called customer, no answer. Notified that we're going to have to buy a new part.",
      itemType: "contact",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content: "'In Progress' -> 'Waiting for Parts'",
      itemType: "status",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content: "2 items",
      itemType: "remove",
    },
    {
      name: "Reese Jones",
      date: "02-11-1999",
      content: "1 items",
      itemType: "add",
    },
    {
      name: "Reese Jones",
      date: "02-15-1999",
      content:
        "Called customer, walked through work completed. Notified that boat is ready.",
      itemType: "contact",
    },
    {
      name: "Reese Jones",
      date: "02-16-1999",
      itemType: "close",
    },
  ],
  boat: {
    id: "12324242",
    motor: [
      {
        id: "124242512",
      },
      {
        id: "098325",
      },
    ],
    trailer: {
      id: "19765",
    },
  },
  parts: [
    {
      id: "987465",
      name: "product a",
      price: 12.99,
      taxEligible: true,
      comments: "Needed this because your part A is busted.",
    },
    {
      id: "0868702",
    },
  ],
  labor: [],
};

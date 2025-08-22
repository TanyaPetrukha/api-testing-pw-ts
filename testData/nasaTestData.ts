import { getDateFromToday } from "../helpers/dateHelper";

export const nasaTestData = [
  {
    testId: "NASA-0001",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: getDateFromToday(0),
    },
  },
  {
    testId: "NASA-0002",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: getDateFromToday(-1),
    },
  },
  {
    testId: "NASA-0003",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: getDateFromToday(-5),
    },
  },
];

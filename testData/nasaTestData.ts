import * as dates from "../helpers/dateHelper";

export const nasaTestData = [
  {
    testId: "NASA-0001",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: dates.getTodayDate(),
    },
  },
  {
    testId: "NASA-0002",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: dates.getYesterdayDate(),
    },
  },
  {
    testId: "NASA-0003",
    params: {
      api_key: process.env.NASA_API_KEY!,
      date: dates.getFiveDayAgoDate(),
    },
  },
];

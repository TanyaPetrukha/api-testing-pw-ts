import { test, expect } from "@playwright/test";
import { DataGenerator } from "../../helpers/nasaDataGenerator"

const gen = new DataGenerator();
const noAuthMsg =
  "No api_key was supplied. Get one at https://api.nasa.gov:443";
const futureDateMsg = `Date must be between Jun 16, 1995 and ${gen.dateForMsg}.`;
const invalidDateRangeMsg = "start_date cannot be after end_date";

test(
  "NASA-0007 get apod without authorization",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ request }) => {
    const response = await request.get("planetary/apod", {
      params: {
        date: gen.yesterdayDate,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(403);
    expect(response.statusText()).toBe("Forbidden");
    expect(resBody.error.message).toEqual(noAuthMsg);
  }
);

test(
  "NASA-0008 get apod with future date",
  {
    tag: ["@regression"],
  },
  async ({ request }) => {
    const response = await request.get("planetary/apod", {
      params: {
        api_key: gen.apiKey,
        date: gen.tomorrowDate,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(400);
    expect(resBody.msg).toEqual(futureDateMsg);
  }
);

test(
  "NASA-0009 get apod by invalid date range",
  {
    tag: ["@regression"],
  },
  async ({ request }) => {
    const response = await request.get("planetary/apod", {
      params: {
        api_key: gen.apiKey,
        start_date: gen.currentDate,
        end_date: gen.yesterdayDate,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(400);
    expect(resBody.msg).toEqual(invalidDateRangeMsg);
  }
);

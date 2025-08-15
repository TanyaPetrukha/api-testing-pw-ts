import { test, expect } from "@playwright/test";
import { DataGenerator } from "../../helpers/nasaDataGenerator";

const gen = new DataGenerator();

for (const { testId, params } of gen.nasaTestData) {
  test(
    `${testId} get apod by date`,
    {
      tag: ["@smoke", "@regression"],
    },
    async ({ request }) => {
      const response = await request.get(`/planetary/apod`, {
        params: params,
      });

      expect(response.status()).toBe(200);
      expect(response.ok()).toBeTruthy();
      const resBody = await response.json();
      expect(resBody.date).toBe(params.date);
      const headers = response.headers();
      const rateApodLimit = Number(headers["x-ratelimit-limit"]);
      const rateApodremaining = Number(headers["x-ratelimit-remaining"]);
      expect(rateApodremaining).toBeLessThan(rateApodLimit);
    }
  );
}

test(
  "NASA-0004 get apod without date",
  {
    tag: ["@regression"],
  },
  async ({ request }) => {
    const response = await request.get("/planetary/apod", {
      params: {
        api_key: gen.apiKey,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(200);
    expect(resBody.date).toEqual(gen.currentDate);
  }
);

test(
  "NASA-0005 get apod by date range",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ request }) => {
    const response = await request.get("/planetary/apod", {
      params: {
        api_key: gen.apiKey,
        start_date: gen.yesterdayDate,
        end_date: gen.currentDate,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(200);
    expect(Array.isArray(resBody)).toBe(true);
    for (const obj of resBody) {
      expect(obj).toHaveProperty("date");
      expect(obj).toHaveProperty("explanation");
      expect(obj).toHaveProperty("hdurl");
      expect(obj).toHaveProperty("media_type");
      expect(obj).toHaveProperty("service_version");
      expect(obj).toHaveProperty("title");
      expect(obj).toHaveProperty("url");
    }
  }
);

test(
  "NASA-0006 get apod by count",
  {
    tag: ["@smoke", "@regression"],
  },
  async ({ request }) => {
    const countNumber = 2;
    const response = await request.get("/planetary/apod", {
      params: {
        api_key: gen.apiKey,
        count: gen.countNumber,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(200);
    const receivedImg = resBody.length;
    expect(receivedImg).toEqual(gen.countNumber);
  }
);

test(
  "NASA-0007 get apod by thumbs",
  {
    tag: ["@regression"],
  },
  async ({ request }) => {
    const countNumber = 2;
    const response = await request.get("/planetary/apod", {
      params: {
        api_key: gen.apiKey,
        thumbs: true,
      },
    });

    const resBody = await response.json();
    expect(response.status()).toBe(200);
    const headers = response.headers();
    expect(headers["content-type"]).toBe("application/json");
    expect(resBody.date).toEqual(gen.currentDate);
  }
);

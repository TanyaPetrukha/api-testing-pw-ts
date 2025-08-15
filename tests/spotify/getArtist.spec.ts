import { expect } from "@playwright/test";
import { test } from "../../fixtures/spotifyFixture";
import { getArtistSchema } from "../../testCriteria/schemas/spotifySchemas";
import { expectedHeaders } from "../../testCriteria/headers/spotifyHeaders";

test("SP-001 get artist", async ({ request, token }) => {
  const artistID = "0TnOYISbd1XYRBk9myaseg";
  
  const response = await request.get(`/v1/artists/${artistID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  expect(response.status()).toBe(200);
  const resBody = await response.json();
  const receivedHeaders = response.headers();
  expect(receivedHeaders).toMatchObject(expectedHeaders);
  const validationResult = getArtistSchema.validate(resBody);
  expect(validationResult.error).toBeUndefined();
});

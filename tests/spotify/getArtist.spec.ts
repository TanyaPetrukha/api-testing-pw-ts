import { expect } from "@playwright/test";
import { test } from "../../fixtures/spotify/fixtures";
import { getArtistSchema } from "../../testCriteria/schemas/spotifySchemas";
import { expectedHeaders } from "../../testCriteria/headers/spotifyHeaders";

test("SP-001 get artist", async ({ request}) => {
  const artistID = "0TnOYISbd1XYRBk9myaseg";
  
  const response = await request.get(`/v1/artists/${artistID}`);

  expect(response.status()).toBe(200);
  const resBody = await response.json();
  const receivedHeaders = response.headers();
  expect(receivedHeaders).toMatchObject(expectedHeaders);
  const validationResult = getArtistSchema.validate(resBody);
  expect(validationResult.error).toBeUndefined();
});

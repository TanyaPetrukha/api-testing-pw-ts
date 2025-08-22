import { expect } from "@playwright/test";
import { test } from "../../fixtures/spotify/fixtures";

test("Create Spotify playlist", async ({ client }) => {
  const userIdResponse = await client.users.getCurrentUsersProfile();
  const userId = (await userIdResponse.json()).id;
  const data = {
    name: "New Playlist",
    description: "New playlist description",
    public: false,
  };
  const response = await client.playlist.createPlaylist(userId, data);
  expect(response.status()).toBe(201);
});

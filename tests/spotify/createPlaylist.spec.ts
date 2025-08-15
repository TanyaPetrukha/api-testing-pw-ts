import { expect } from "@playwright/test";
import { test } from "../../fixtures/spotifyFixture";


//token не підходить для створення плейлистів, authorization code
test("Create Spotify playlist", async ({ request, token }) => {
    console.log(token);
    const playlistBody = {
      name: "New Playlist",
      description: "New playlist description",
      public: false,
    };

    const userId = process.env.SPOTIFY_USER_ID!;
    const response = await request.post(`/v1/users/${userId}/playlists`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: playlistBody,
    });
console.log(await response.json())
});

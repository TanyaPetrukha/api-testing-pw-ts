import { test as base, expect, request as newRequest } from "@playwright/test";

type Fixtures = {
  token: string;
};

export const test = base.extend<Fixtures>({
  token: async ({ request }, use) => {
    const response = await request.post(
      "https://accounts.spotify.com/api/token",
      {
        form: { grant_type: "client_credentials" },
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              process.env.SPOTIFY_CLIENT_ID +
                ":" +
                process.env.SPOTIFY_CLIENT_SECRET
            ).toString("base64"),
        },
      }
    );
    expect(response.status()).toBe(200);
    const token = (await response.json()).access_token;
    expect(token).toBeDefined();

    await use(token);
  },
});

// export const test = base.extend<Fixtures>({
//   token: async ({ request }, use) => {
//     const response = await request.post(
//       "https://accounts.spotify.com/api/token",
//       {
//         form: {
//           code: code,
//           redirect_uri: redirect_uri,
//           grant_type: "authorization_code",
//         },
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//           Authorization:
//             "Basic " +
//             Buffer.from(
//               process.env.SPOTIFY_CLIENT_ID +
//                 ":" +
//                 process.env.SPOTIFY_CLIENT_SECRET
//             ).toString("base64"),
//         },
//       }
//     );
//     expect(response.status()).toBe(200);
//     const token = (await response.json()).access_token;
//     expect(token).toBeDefined();

//     await use(token);
//   },
// });

// export const test = base.extend<Fixtures>({
//   token: async ({ request }, use) => {
//     const response = await request.post(
//       "https://accounts.spotify.com/api/token",
//       {
//         form: {
//           grant_type: "refresh_token",
//           refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
//         },
//         headers: {
//           "content-type": "application/x-www-form-urlencoded",
//           Authorization:
//             "Basic " +
//             Buffer.from(
//               process.env.SPOTIFY_CLIENT_ID +
//                 ":" +
//                 process.env.SPOTIFY_CLIENT_SECRET
//             ).toString("base64"),
//         },
//       }
//     );
//     expect(response.status()).toBe(200);
//     const token = (await response.json()).access_token;
//     expect(token).toBeDefined();

//     await use(token);
//   },
// });

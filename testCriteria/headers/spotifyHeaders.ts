import {expect} from "@playwright/test";

export const expectedHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": expect.any(String),
  etag: expect.any(String),
  "x-robots-tag": expect.any(String),
  "access-control-allow-origin": "*",
  "access-control-allow-headers":
    "Accept, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token",
  "access-control-allow-methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  "access-control-allow-credentials": "true",
  "access-control-max-age": expect.any(String),
  "content-encoding": "gzip",
  "strict-transport-security": expect.any(String),
  "x-content-type-options": "nosniff",
  "alt-svc": expect.any(String),
  date: expect.any(String),
  server: "envoy",
  via: "HTTP/2 edgeproxy, 1.1 google",
  "transfer-encoding": "chunked",
};

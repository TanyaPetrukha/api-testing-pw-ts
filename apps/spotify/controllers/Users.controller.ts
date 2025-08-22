import { APIRequestContext } from "playwright";

export class Users {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getCurrentUsersProfile() {
    const userIdResponse = await this.request.get(
      "/v1/me",
      {}
    );
    return userIdResponse;
  }
}
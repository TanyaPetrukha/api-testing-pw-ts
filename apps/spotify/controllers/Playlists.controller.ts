import { APIRequestContext } from "@playwright/test";

export class Playlists {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getPlaylistById(id: string) {
    const response = await this.request.get(`/v1/playlists/${id}`, {});

    return response;
  }

  async createPlaylist(
    userId: string,
    data: {
      name: string;
      description: string;
      public: boolean;
    }
  ) {
    const response = await this.request.post(`/v1/users/${userId}/playlists`, {
      data: data,
    });

    return response;
  }

  async updatePlaylist(
    playlist_id: string,
    data: {
      range_start: string;
      insert_before: string;
      range_length: boolean;
    }
  ) {
    const response = await this.request.put(
      `/v1/playlists/${playlist_id}/tracks`,
      {
        data: data,
      }
    );

    return response;
  }

  async addItemsToPlaylist(
    playlist_id: string,
    data: {
      uris: [string];
      position: number;
    }
  ) {
    const response = await this.request.post(
      `/v1/playlists/${playlist_id}/tracks`,
      {
        data: data,
      }
    );

    return response;
  }

  async removePlaylistItems(
    playlist_id: string,
    data: {
      tracks: [
        {
          uri: string;
        }
      ];
      snapshot_id: string;
    }
  ) {
    const response = await this.request.delete(
      `/v1/playlists/${playlist_id}/tracks`,
      {
        data: data,
      }
    );

    return response;
  }
}

import { API_ALBUM_URL } from "../contants";

//Promise
export async function getAllAlbums() {
  return fetch(API_ALBUM_URL).then((response) => response.json());
}

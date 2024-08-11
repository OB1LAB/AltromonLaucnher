import $api from "./api";

export default class OnlineService {
  static async get() {
    return $api.get(`/minecraft/getOnline`);
  }
}

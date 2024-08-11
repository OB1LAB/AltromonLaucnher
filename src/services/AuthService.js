import $api from "./api";

export default class AuthService {
  static async login(username, password) {
    return $api.post(`/auth/loginLauncher`, {
      username,
      password,
    });
  }
  static async register(username, password, token) {
    return $api.post(`/auth/register`, {
      username,
      password,
      token,
    });
  }
}

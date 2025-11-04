import API from "./API";

class User extends API {
  constructor() {
    super();
  }

  async registrationUser(data) {
    const response = await this.post("/profile/registration", data);
    return response;
  }

  async getProfile() {
    const response = await this.post("/profile");
    return response?.data;
  }

  async loginUser(data) {
    const response = await this.post("/profile/login", data);
    return response;
  }
}

export default new User();

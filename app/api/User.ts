import API from "./API";

class User extends API {
  constructor() {
    super();
  }

  async registrationUser(data) {
    const response = await this.post("/profile/registration", data);
    return response
  }

  async getProfile() {
    const response = await this.post("/profile");
    return response?.data?.data;
  }
}

export default new User();

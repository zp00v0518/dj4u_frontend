import API from "./API";

class User extends API {
  constructor() {
    super();
  }

  async registrationUser(data) {
    return {
      status: true,
      data,
    };
  }
}

export default new User();

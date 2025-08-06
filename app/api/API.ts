import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL || window?.location?.origin;

class API {
  constructor(baseUrl = apiUrl) {
    this.baseUrl = baseUrl;
  }

  async sendRequest(path = "", params? = {}) {
    let response = {};
    const url = this.baseUrl ? this.baseUrl + path : path;
    try {
      const config = Object.assign({ url }, params);
      response = await axios.request(config);
    } catch (error) {
      console.error("Error sending request:", error);
    }
    return response;
  }

  async get(path: string = "") {
    const response = await this.sendRequest(path);
    return response;
  }

  async post(path: string, data?, params = {}) {
    const response = await this.sendRequest(
      path,
      Object.assign({ method: "POST", data }, params),
    );
    return response;
  }
  async put(path: string, data?, params = {}) {
    const response = await this.sendRequest(
      path,
      Object.assign({ method: "PUT", data }, params),
    );
    return response;
  }
  async delete(path: string, data?, params = {}) {
    const response = await this.sendRequest(
      path,
      Object.assign({ method: "DELETE", data }, params),
    );
    return response;
  }
}

export default API;

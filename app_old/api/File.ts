import API from "./API";

class File extends API {
  constructor() {
    super();
  }

  async fileUploadToServer(formData) {
    const response = await this.post("/file/upload", formData, {
    // const response = await this.post("https://httpbin.org/post", formData, {
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response;
  }
}

export default new File();

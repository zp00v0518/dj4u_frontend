import API from "./API";

class File extends API {
  constructor() {
    super();
  }

  async fileUploadToServer(formData) {
    const response = await this.post("/file/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }
}

export default new File();

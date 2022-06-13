import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL || "http://localhost:50/anifanfi_server/v1";

export default class API {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { authorization: `${API.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {

      return (await axios({ url, method, data, params, headers }));
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}


import axios from "axios";

export default class TransportationClient {
  #httpClient;
  constructor() {
    this.#httpClient = axios.create({
      baseURL: "https://apis.openapi.sk.com/transit/routes",
      headers: {
        appKey: process.env.REACT_APP_PUBLIC_TRANSPORT_APP_KEY,
      },
    });
  }

  async transportation(params) {
    return this.#httpClient.post("/", params);
  }
}

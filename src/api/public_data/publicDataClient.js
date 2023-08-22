import axios from "axios";

export default class PublicDataClient {
  #httpClient;
  constructor() {
    this.#httpClient = axios.create({
      baseURL: "https://apis.data.go.kr/B551011/KorService1/searchKeyword1",
      params: {
        numOfRows: 50,
        MobileOS: "ETC",
        MobileApp: "KtourPlanner",
        _type: "json",
        contentTypeId: 12,
        serviceKey: process.env.REACT_APP_PUBLIC_DATA_SERVICE_KEY,
      },
    });
  }

  async attractions(params) {
    return this.#httpClient.get(params);
  }
}

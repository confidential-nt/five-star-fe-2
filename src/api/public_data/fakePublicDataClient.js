import axios from "axios";

export default class FakePublicDataClient {
  async attractions() {
    return axios.get("/data/attractions.json");
  }
}

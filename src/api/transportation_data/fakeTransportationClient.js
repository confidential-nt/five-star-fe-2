import axios from "axios";

export default class FakeTransportationClient {
  async transportation() {
    return axios.get("/data/transportation.json");
  }
}

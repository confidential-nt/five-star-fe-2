import axios from "axios";

export async function getCities() {
  return axios.get("/data/cities.json").then((res) => res.data.cities);
}

export default class Transportation {
  #apiClient;
  constructor(apiClient) {
    this.#apiClient = apiClient;
  }

  async getTransportation({ startX, startY, endX, endY }) {
    return this.#apiClient
      .transportation({
        startX,
        startY,
        endX,
        endY,
      })
      .then((res) => res.data.metaData.plan.itineraries);
  }
}

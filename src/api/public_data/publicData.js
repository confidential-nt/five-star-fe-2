export default class PublicData {
  #apiClient;
  constructor(apiClient) {
    this.#apiClient = apiClient;
  }

  async getAttractions() {
    return this.#apiClient
      .attractions()
      .then((res) => res.data)
      .then(
        ({
          response: {
            body: {
              items: { item },
            },
          },
        }) =>
          item.map((i) => ({
            ...i,
            lat: parseFloat(i.mapy),
            lng: parseFloat(i.mapx),
          }))
      );
  }
}

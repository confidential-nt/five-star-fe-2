export default class PublicData {
  #apiClient;
  constructor(apiClient) {
    this.#apiClient = apiClient;
  }

  async getAttractions(city) {
    return this.#apiClient
      .attractions({
        params: {
          keyword: city,
        },
      })
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
            title: i.title,
            img: i.firstimage,
            address: i.addr1,
          }))
      );
  }
}

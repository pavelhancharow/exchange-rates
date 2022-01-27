export class Controller {
  static async get({ currency = 'USD', from = '', to = '' }) {
    try {
      const query = `&base_currency=${currency}&date_from=${from}&date_to=${to}`;
      const response = await fetch(
        `https://freecurrencyapi.net/api/v2/historical?apikey=c5c67ce0-7f43-11ec-b6f5-49c2a7900054${query}`
      );
      const result = await response.json();
      const data = await result.data;
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

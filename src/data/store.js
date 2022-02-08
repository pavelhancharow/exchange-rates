class MyStore {
  constructor(currencyData = ['EUR', 'USD', 'RUB', 'BRL', 'GBP', 'JPY']) {
    this._rootElement = null;
    this._data = [];
    this._currencyData = currencyData;

    this.setData = this.setData.bind(this);
    this.getData = this.getData.bind(this);
    this.setRoot = this.setRoot.bind(this);
    this.getRoot = this.getRoot.bind(this);
    this.getCurrencyData = this.getCurrencyData.bind(this);
  }

  setData(value) {
    this._data = value;
  }

  getData() {
    return this._data;
  }

  getCurrencyData() {
    return this._currencyData;
  }

  setRoot(value) {
    this._rootElement = value;
  }

  getRoot() {
    return this._rootElement;
  }
}

export const store = new MyStore();

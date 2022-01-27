export class Observer {
  constructor(rootElement) {
    this.rootElement = rootElement;

    this.subscribers = [];
    this.formParams = null;

    this.subcribe = this.subcribe.bind(this);
    this.getSubcriber = this.getSubcriber.bind(this);
  }

  subcribe(fn) {
    this.subscribers.push(fn);
  }

  async getSubcriber(e) {
    e.preventDefault();

    this.formParams = await this.subscribers[0]();

    this.subscribers[1](this.rootElement, this.formParams);
  }
}

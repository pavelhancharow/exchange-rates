class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  async broadcast() {
    for (const subscriber of this.observers) {
      // eslint-disable-next-line no-await-in-loop
      await subscriber();
    }
  }
}

export const observer = new Observer();

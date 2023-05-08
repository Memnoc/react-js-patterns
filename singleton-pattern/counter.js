let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error(
        "Counter is a singleton class - only one instance is allowed"
      );
    }
    instance = this;
  }

  getCount() {
    return counter;
  }

  getInstance() {
    return instance;
  }

  setCounterIncrement() {
    counter++;
  }

  setCounterDecrement() {
    counter--;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

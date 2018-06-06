export default class SecondCounter {
  constructor(callback) {
    this.callback = callback;
    this.seconds = 0;
    this.intervalId = null;
  }

  start() {
    this.seconds = 0;
    this.callback(this.seconds);
    this.intervalId = setInterval(() => {
      this.seconds++;
      this.callback(this.seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

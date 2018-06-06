import SecondCounter from './SecondCounter';

describe('SecondCounter', () => {
  it('can produce a secondCounter instance', () => {
    const secondCounter = new SecondCounter();
    expect(secondCounter).toBeDefined();
  });

  it('can be stopped', () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const secondCounter = new SecondCounter(callback);
    secondCounter.start();
    jest.runTimersToTime(5000);
    secondCounter.stop();
    jest.runTimersToTime(5000);
    expect(callback.mock.calls.length).toEqual(6);
  });

  it("resets callback's seconds parameter to 0 when restarted", () => {
    jest.useFakeTimers();
    const callback = jest.fn();
    const secondCounter = new SecondCounter(callback);
    secondCounter.start();
    jest.runTimersToTime(5000);
    secondCounter.stop();
    secondCounter.start();
    expect(callback.mock.calls[6][0]).toEqual(0);
  });

  describe('when started', () => {
    let secondCounter;
    let callback;

    beforeEach(() => {
      jest.useFakeTimers();
      callback = jest.fn();
      secondCounter = new SecondCounter(callback);
      secondCounter.start();
    });

    it('calls callback function with zero seconds parameter', () => {
      expect(callback).toHaveBeenCalledWith(0);
    });

    describe('after five seconds have passed', () => {
      beforeEach(() => {
        jest.runTimersToTime(5000);
      });

      it('has called the callback function six times', () => {
        expect(callback.mock.calls.length).toEqual(6);
      });

      it('has called the callback function with correct seconds param', () => {
        expect(callback.mock.calls[0][0]).toEqual(0);
        expect(callback.mock.calls[1][0]).toEqual(1);
        expect(callback.mock.calls[2][0]).toEqual(2);
        expect(callback.mock.calls[3][0]).toEqual(3);
        expect(callback.mock.calls[4][0]).toEqual(4);
        expect(callback.mock.calls[5][0]).toEqual(5);
      });
    });
  });
});

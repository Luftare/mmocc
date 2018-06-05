import React, { Component } from 'react';
import Button from './Button';
import Time from './Time';
import Bottles from './Bottles';

class CenturyClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      remainingTime: 6000000,
      startTime: 0,
      remainingSeconds: 6000
    };
  }

  timerIsActive = () => {
    return !(this.state.intervalId == null);
  };

  handleStartStopButtonClick = () => {
    if (this.timerIsActive()) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  startTimer = () => {
    const currentTime = Date.now();
    const intervalId = setInterval(this.loop, 100);
    this.setState({ intervalId, startTime: currentTime });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  loop = () => {
    const currentTime = Date.now();
    const passedTime = currentTime - this.state.startTime;
    const remainingTime = 6000000 - passedTime;
    const remainingSeconds = Math.floor(remainingTime / 1000);
    if (remainingSeconds < this.state.remainingSeconds) {
      this.setState({ remainingTime, remainingSeconds });
    }
  };

  render() {
    const buttonText = this.timerIsActive() ? 'Give up' : 'Start';
    return (
      <div>
        <h1>shiii</h1>
        <Button text={buttonText} onClick={this.handleStartStopButtonClick} />
        <Time milliseconds={this.state.remainingTime} />
        <Bottles bottles={12} remainingSeconds={this.state.remainingSeconds} />
      </div>
    );
  }
}

export default CenturyClub;

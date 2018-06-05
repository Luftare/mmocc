import React, { Component } from 'react';
import Button from './Button';
import Time from './Time';

class CenturyClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      remainingTime: 6000000,
      startTime: 0
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
    this.setState({ remainingTime });
  };

  render() {
    const buttonText = this.timerIsActive() ? 'Give up' : 'Start';
    return (
      <div>
        <h1>shiii</h1>
        <Button text={buttonText} onClick={this.handleStartStopButtonClick} />
        <Time milliseconds={this.state.remainingTime} />
      </div>
    );
  }
}

export default CenturyClub;

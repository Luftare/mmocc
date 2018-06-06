import React, { Component } from 'react';
import Button from './Button';
import Time from './Time';
import Bottles from './Bottles';
import SecondCounter from './SecondCounter';

class CenturyClub extends Component {
  constructor(props) {
    super(props);
    this.secondCounter = new SecondCounter(this.handleTick.bind(this));
    this.state = {
      remainingSeconds: 6000,
      timerIsActive: false
    };
  }

  handleTick(passedSeconds) {
    this.setState({ remainingSeconds: 6000 - passedSeconds });
  }

  timerIsActive = () => {
    return this.state.timerIsActive;
  };

  handleStartStopButtonClick = () => {
    if (this.timerIsActive()) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  };

  startTimer = () => {
    this.secondCounter.start();
    this.setState({ timerIsActive: true });
  };

  stopTimer = () => {
    this.secondCounter.stop();
    this.setState({ timerIsActive: false });
  };

  render() {
    const buttonText = this.timerIsActive() ? 'Give up' : 'Start';
    return (
      <div>
        <h1>shiii</h1>
        <Button text={buttonText} onClick={this.handleStartStopButtonClick} />
        <Time seconds={this.state.remainingSeconds} />
        <Bottles bottles={12} remainingSeconds={this.state.remainingSeconds} />
      </div>
    );
  }
}

export default CenturyClub;

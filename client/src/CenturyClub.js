import React, { Component } from 'react';
import Button from './Button';
import Time from './Time';

class CenturyClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null
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
    const intervalId = setInterval(this.loop, 1000);
    this.setState({ intervalId });
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  };

  loop = () => {
    console.log('Hep!');
  };

  render() {
    const buttonText = this.timerIsActive() ? 'Give up' : 'Start';
    return (
      <div>
        <h1>shiii</h1>
        <Button text={buttonText} onClick={this.handleStartStopButtonClick} />
        <Time milliseconds={6000000} />
      </div>
    );
  }
}

export default CenturyClub;

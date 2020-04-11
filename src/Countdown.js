import React, { Component } from "react";
import "./App.css";

export default class Countdown extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (!this.state.timerOn) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };
  adjustTimer = input => {
    const max = 216000000;
    const { timerTime, timerOn } = this.state;
    if (timerOn === false) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({
          timerTime: timerTime + 3600000
        });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({
          timerTime: timerTime - 3600000
        });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if ((input === "decMinutes") & (timerTime - 60000 >= 0)) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + (Math.floor(timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Countdown</div>
        <div className="Countdown-label">Hours: Minutes : Seconds</div>
        <div className="Countdown-display">
          <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>
          <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>
        <div className="Countdown-time">
          {hours} : {minutes} : {seconds}
        </div>
        {timerOn === false &&
          (timerStart === 0 || timerTime === timerStart) && (
            <button onClick={this.startTimer}>Start</button>
          )}
        {timerOn && timerTime >= 1000 && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {!timerOn &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button onClick={this.startTimer}>Resume</button>
          )}
        {(timerOn === false || timerTime > 0) && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

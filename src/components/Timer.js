import React, { Component } from "react";
import "./Timer.css";

import EasyTimer from "easytimer.js";

class Timer extends Component {
  constructor(props) {
    super(props);

    var timer = new EasyTimer();

    this.state = {
      timer_text: timer.getTimeValues().toString(),
      timer_state: "stopped",
      timer: timer,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    timer.addEventListener("secondsUpdated", this.onTimerUpdated.bind(this));
    timer.addEventListener("started", this.onTimerUpdated.bind(this));
    timer.addEventListener("reset", this.onTimerUpdated.bind(this));
  }

  onTimerUpdated(e) {
    this.setState({
      ...this.state,
      timer_text: this.state.timer.getTimeValues().toString(),
    });
  }

  startTimer() {
    this.state.timer.start();
    this.setState({
      ...this.state,
      timer_state: "ticking",
    });
  }
  stopTimer() {
    this.state.timer.stop();
    this.setState({
      ...this.state,
      timer_state: "stopped",
    });
  }
  pauseTimer() {
    this.state.timer.pause();
    this.setState({
      ...this.state,
      timer_state: "paused",
    });
  }
  resetTimer() {
    this.state.timer.reset();
    this.setState({
      ...this.state,
      timer_state: "ticking",
    });
  }

  render() {
    return (
      <div className="Timer">
        <div className="timer-text">
          <h2>{this.state.timer_text}</h2>
        </div>
        <div className="timer-buttons text-cneter">
          {this.state.timer_state !== "ticking" && (
            <button onClick={this.startTimer} className="btn btn-success">
              Start
            </button>
          )}

          {this.state.timer_state === "ticking" && (
            <button onClick={this.pauseTimer} className="btn btn-warning">
              Pause
            </button>
          )}
          <button onClick={this.stopTimer} className="btn btn-danger">
            Stop
          </button>
          <button onClick={this.resetTimer} className="btn btn-primary">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;

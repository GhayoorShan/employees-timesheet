import React, { Component } from "react";
import "./TimeCard.css";

import EasyTimer from "easytimer.js";

class TimeCard extends Component {
  constructor(props) {
    super(props);

    this.renderTime = this.renderTime.bind(this);
  }

  renderTime(time) {
    var new_timer = new EasyTimer();
    new_timer.start({ startValues: time });
    var time_string = new_timer.getTimeValues().toString();
    new_timer.stop();

    return time_string;
  }

  render() {
    return (
      <div className="time-card">
        <h3 className="time-text small">
          {"Clock Out  " + this.renderTime(this.props.time)}
        </h3>
      </div>
    );
  }
}

export default TimeCard;

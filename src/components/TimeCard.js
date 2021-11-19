import React, { Component } from "react";
import "./TimeCard.css";

import EasyTimer from "easytimer.js";

class TimeCard extends Component {
  constructor(props) {
    super(props);

    this.renderTime = this.renderTime.bind(this);
  }
  state = {
    date: "",
  };
  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toLocaleString();
    this.setState({ date });
  };

  renderTime(time) {
    var new_timer = new EasyTimer();
    new_timer.start({ startValues: time });
    var time_string = new_timer.getTimeValues().toString();
    new_timer.stop();

    return time_string;
  }
  // currentDateTime() {
  //   var current = new Date().toLocaleString();
  //   return (
  //     <div>
  //       <input type="text" value={current} readOnly="true" />
  //     </div>
  //   );
  // }

  render() {
    const { date } = this.state;
    return (
      <div className="time-card">
        <h3 className="time-text small">
          {"Clock Out  " + this.renderTime(this.props.time)}
        </h3>
        <div>{date}</div>
      </div>
    );
  }
}

export default TimeCard;

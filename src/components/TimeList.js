import React, { Component } from "react";
import "./TimeList.css";

import _ from "lodash";

//extra components
import TimeCard from "./TimeCard";

class TimeList extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.renderTimeList = this.renderTimeList.bind(this);
  }

  renderTimeList() {
    var times = this.props.recorded_times;

    var time_cards = _.map(times, function (time, idx) {
      return <TimeCard key={idx} time={time} />;
    });

    return time_cards;
  }

  render() {
    return (
      <div className="time-list">
        <div className="title">
          <h2>Time Entries</h2>
        </div>
        <div className="list">{this.renderTimeList()}</div>
      </div>
    );
  }
}

export default TimeList;

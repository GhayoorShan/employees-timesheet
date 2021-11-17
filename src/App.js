import React, { Component } from "react";
import "./App.css";

import TimeList from "./containers/TimeListContainer";
import Timer from "./containers/TimerContainer";

import { TIMER } from "./constants";

import { store } from "./store";
import { Provider } from "react-redux";

import { runTest } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch(runTest());
    this.state = {
      mode: TIMER,
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App d-flex flex-column container">
          <div className="Header">
            <h1>EMPLOYEES TIMESHEET</h1>
          </div>
          <div className="d-flex flex-fill justify-content-center flex-column">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="time-container">
                  {this.state.mode === TIMER && <Timer />}
                </div>
                <div className="times-list">
                  {this.state.mode === TIMER && <TimeList />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

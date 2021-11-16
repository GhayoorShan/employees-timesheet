import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header bg-black text-white px-5 py-2">
          <h1>Employees Timesheet</h1>
        </div>
        <div className="d-flex flex-fill justify-content-center">
          <div className="row">
            <div>
              <Timer></Timer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

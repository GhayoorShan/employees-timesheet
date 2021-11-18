import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import TimeList from "./containers/TimeListContainer";
import Timer from "./containers/TimerContainer";

import { store } from "./store";
import { Provider } from "react-redux";

import { runTest } from "./actions";

import Login from "./components/Login";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch(runTest());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App ">
          <Header />

          <div className="d-flex justify-content-center flex-column">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="time-container">
                  <Timer />
                </div>
                <div className="times-list">
                  <TimeList />
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

/* <Router>
  <Switch>
    <Route path="">
    <div className="Header">
            <h1>EMPLOYEES TIMESHEET</h1>
          </div>
          <div className="d-flex flex-fill justify-content-center flex-column">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="time-container">
                  <Timer />
                </div>
                <div className="times-list">
                  <TimeList />
                </div>
              </div>
            </div>
          </div>
    </Route>
    <Route path="/">
      <Login />
    </Route>
  </Switch>
</Router>; */

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB7E4oCa3i9A1hqMBG7VP-NlJUwNHBRui0",
//   authDomain: "employees-timesheet.firebaseapp.com",
//   projectId: "employees-timesheet",
//   storageBucket: "employees-timesheet.appspot.com",
//   messagingSenderId: "457581140156",
//   appId: "1:457581140156:web:34c291533be8884cca98b9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

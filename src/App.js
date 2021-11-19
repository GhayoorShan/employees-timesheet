import React, { useState } from "react";
import "./App.css";

import { store } from "./store";
import { Provider } from "react-redux";

import Login from "./components/Login";
import Header from "./components/Header";
import TimeList from "./containers/TimeListContainer";
import Timer from "./containers/TimerContainer";

function App() {
  const [user, setUser] = useState();

  return (
    <Provider store={store}>
      <div className="App ">
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <Header user={user} />

            <div className="d-flex justify-content-center flex-column">
              <div className="row">
                <div className="col-md-6 col-sm-3 offset-md-3">
                  <div className="time-container">
                    <Timer />
                  </div>
                  <div className="times-list">
                    <TimeList />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;

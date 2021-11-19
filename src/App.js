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
          </>
        )}
      </div>
    </Provider>
  );
}

export default App;

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

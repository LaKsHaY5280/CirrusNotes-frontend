import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/notesState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
   

function App() {
  const [alert, setalert] = useState(null);
  const toggleAlert = (type, msg) => {
    setalert({
      type: type,
      msg: msg,
    });

    setTimeout(() => {
      setalert(null);
    }, 1250);
  };
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              key="general"
              element={<Home toggleAlert={toggleAlert} />}
            />
            <Route
              exact
              path="/login"
              key="general"
              element={<Login toggleAlert={toggleAlert} />}
            />
            <Route
              exact
              path="/signup"
              key="general"
              element={<Signup toggleAlert={toggleAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;

import React from "react";
import "./App.css";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Stopwatch CountDown</div>
        <div className="Timers">
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;

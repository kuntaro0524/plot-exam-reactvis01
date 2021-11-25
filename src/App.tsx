import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";

import { NormalPlot } from "./NormalPlot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NormalPlot />
      </div>
    );
  }
}

export default App;

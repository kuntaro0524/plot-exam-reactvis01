import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";

import { NormalPlot } from "./NormalPlot";
import { ShowHeatmap } from "./ShowHeatmap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NormalPlot />
        <ShowHeatmap />
      </div>
    );
  }
}

export default App;

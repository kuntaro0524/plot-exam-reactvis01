import React, { useState } from "react";

import { XYPlot, XAxis, YAxis, HeatmapSeries } from "react-vis";

export const ShowHeatmap = () => {
  const [state, setState] = useState({ value: false });

  return (
    <XYPlot width={400} height={400}>
      <XAxis />
      <YAxis />
      <HeatmapSeries
        colorRange={["white", "red"]}
        data={[
          { x: 1, y: 0, color: 5 },
          { x: 1, y: 1, color: 10 },
          { x: 1, y: 2, color: 6 },
          { x: 1, y: 3, color: 7 },
          { x: 2, y: 0, color: 12 },
          { x: 2, y: 1, color: 25 },
          { x: 2, y: 2, color: 15 },
          { x: 2, y: 3, color: 12 },
          { x: 3, y: 0, color: 9 },
          { x: 3, y: 1, color: 2 },
          { x: 3, y: 2, color: 6 },
          { x: 3, y: 3, color: 12 }
        ]}
      />
    </XYPlot>
  );
};

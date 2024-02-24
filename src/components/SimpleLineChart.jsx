import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

function SimpleLineChart({ data }) {
  const plotRef = useRef(null);
  useEffect(() => {
      const newPlot = Plot.plot({
        width: 600,
        height: 400,
        marks: [
          Plot.lineY(data, {
            x: "x",
            y: "y",
            stroke: "Symbol"
          })
        ]
      });
    plotRef.current.append(newPlot);
    return ()=>  newPlot.remove();
  }, []);

  return <div ref={plotRef}>test</div>;
};

export default SimpleLineChart;


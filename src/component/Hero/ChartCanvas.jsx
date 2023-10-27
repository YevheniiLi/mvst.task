import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartCanvas = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && data) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx.chart) {
        ctx.chart.destroy();
      }

      const chartData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [
          {
            label: "Contributions",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };

      const newChart = new Chart(ctx, {
        type: "bar",
        data: chartData,
      });

      ctx.chart = newChart;
    }
  }, [data]);

  return <canvas ref={canvasRef} width="500" height="200" />;
};

export default ChartCanvas;

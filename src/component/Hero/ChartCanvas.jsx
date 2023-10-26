import React, { useEffect } from 'react';
import Chart from "chart.js/auto";

const ChartCanvas = ({ repository }) => {
  const chartId = `chart-${repository.name}`;

  useEffect(() => {
    if (!repository) {
      return;
    }

    const canvas = document.getElementById(chartId);

    if (canvas) {
      if (canvas.chart) {
        canvas.chart.destroy();
      }

      const ctx = canvas.getContext("2d");

      const randomData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20));

      const chartData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [
          {
            label: "Contributions",
            data: randomData,
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

      canvas.chart = newChart;
    }
  }, [chartId, repository]);

  return (
    <canvas id={chartId} width="500" height="200"></canvas>
  );
};

export default ChartCanvas;

import React, { useEffect, useRef } from "react";
import {
  Chart,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PolarArea,
  registerables,
} from "chart.js";

Chart.register(...registerables);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const MultiChartComponent = () => {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);

  useEffect(() => {
    if (canvasRef1.current) {
      const ctx = canvasRef1.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Number of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "Red",
                "Blue",
                "Yellow",
                "Green",
                "Purple",
                "Orange",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (canvasRef2.current) {
      const ctx = canvasRef2.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef2}></canvas>
      {/* <PolarArea data={data} /> */}
    </div>
  );
};

export default MultiChartComponent;

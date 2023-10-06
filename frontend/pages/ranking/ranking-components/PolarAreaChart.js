import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const PolarAreaChartComponent = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'polarArea',
        data: {
          labels: ['', '', '', '', ''],
          datasets: [{
            label: 'My Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 206, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ],
            borderWidth: 1
          }]
        },
      });

      return () => {
        newChartInstance.destroy();
      };
    }
  }, []);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default PolarAreaChartComponent;
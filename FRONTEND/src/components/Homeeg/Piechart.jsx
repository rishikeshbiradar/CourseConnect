import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './piechart.css'

const Piechart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['Coursera', 'Udemy', 'Udacity'],
        datasets: [
          {
            data: [1200, 5500, 300],
            backgroundColor: ['#ff829d', '#6fcdcd', '#ffd778'],
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='pie-div' data-aos='fade-right' data-aos-duration='500' >
      <canvas ref={chartRef} style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} />
    </div>
  );
};

export default Piechart;

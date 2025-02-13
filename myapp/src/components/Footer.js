import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70px; /* Updated height */
  margin-top:-37px;
`;

const GraphContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
  height: 60px; /* Adjusted to fit within 100px footer */
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TimeEntry = styled.span`
  font-size: 10px;
`;

const Footer = () => {
  const [chartData, setChartData] = useState(getChartData()); // Initialize with data
  const chartRef = useRef(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(getChartData()); // Update data every 2 seconds
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  function getChartData() {
    const labels = Array.from(
      { length: 25 },
      (_, i) => `${String(i % 24).padStart(2, "0")}:00`
    ).slice(0, -1);

    return {
      labels,
      datasets: [
        {
          label: "Series 1",
          data: Array.from({ length: 24 }, () => Math.random() * 150),
          borderColor: "lightblue",
          fill: false,
          pointRadius: 2,
          pointBackgroundColor: "white",
          tension: 0,
        },
        {
          label: "Series 2",
          data: Array.from({ length: 24 }, () => Math.random() * 150),
          borderColor: "lightcoral",
          fill: false,
          pointRadius: 2,
          pointBackgroundColor: "white",
          tension: 0,
        },
      ],
    };
  }

  const chartOptions = {
    scales: {
      x: {
        grid: { display: false },
        ticks: { fontSize: 8 },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 75,
          fontSize: 8,
        },
      },
    },
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <FooterContainer>
      <GraphContainer>
        <Line data={chartData} options={chartOptions} ref={chartRef} />
      </GraphContainer>
    </FooterContainer>
  );
};

export default Footer;

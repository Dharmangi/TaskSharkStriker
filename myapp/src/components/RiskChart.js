import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components"; // For styling
import { FaFileAlt } from "react-icons/fa"; // Import file icon

const data = [
  { subject: "ACTIONS", A: 5.3, fullMark: 10 },
  { subject: "TRAFFIC", A: 5.2, fullMark: 10 },
  { subject: "RECON", A: 5.1, fullMark: 10 },
  { subject: "DELIVERY", A: 5.0, fullMark: 10 },
  { subject: "EXPLOIT", A: 4.9, fullMark: 10 }, 
  { subject: "INSTALL", A: 4.8, fullMark: 10 },
  { subject: "C&C", A: 4.7, fullMark: 10 }, 
];

const RiskChartContainer = styled.div`
  .chart-container {
    display: flex;
    flex-direction: column; /* Align elements vertically */
    align-items: center; /* Center horizontally */
    width: 350px; /* Adjust as needed */
    margin-bottom: 20px; /* Space below the chart */
    margin-top: -16px; /* Space below the chart */
    margin-right: 390px;
    height: 320px;
    position:absolute;
  }

  h3 {
    margin-bottom: 15px;
    margin-top: 0px;
    text-align: center; /* Center the title */
  }

  .risk-score {
    font-size: 1.2rem;
    margin-top: -10px;
  }

  .expand-button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff; /* Example button color */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .file-info {
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 5px; /* Space between icon and text */
  }

  .file-name {
    /* Style the file name as needed */
  }
`;

const RiskChart = () => {
  const [isExpanded, setIsExpanded] = useState(false); 

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const riskScore = 98.7; 

  const fileInfo = {
    name: "10.0.1.39",
    panoramic: "Panoramic",
  };

  return (
    <RiskChartContainer>
      <div className="chart-container">
        <h3>Current to Suspect Assets 25</h3>
        <ResponsiveContainer width="100%" height={220}>
          {" "}
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Risk"
              dataKey="A"
              stroke="#ff4d4d"
              fill="#ff4d4d"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="risk-score">Risk Score: {riskScore}</div>{" "}
        <button className="expand-button" onClick={handleExpand}>
          {isExpanded ? "Collapse" : "Expand All"}{" "}
        </button>
        <div className="file-info">
          <FaFileAlt /> 
          <span className="file-name">
            {fileInfo.name} - {fileInfo.panoramic}
          </span>{" "}
        </div>
      </div>
    </RiskChartContainer>
  );
};

export default RiskChart;

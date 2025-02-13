import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled from 'styled-components';

const data = [
  { x: 10, y: 0 },
  { x: 30, y: 15 },
  { x: 50, y: 30 },
  { x: 70, y: 45 },
  { x: 90, y: 60 },
];

const EventsContainer = styled.div`
.events-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin-bottom: 20px;
    margin-top:-16px;
    height:320px;
  }

  h3 {
    margin-bottom: 10px;
    margin-top:-10px;
    text-align: center;
  }

.dataset-label {
    // margin-bottom: 10px;
    text-align: center;
    font-size: 0.9rem; 
    // width:200px;
  }

.anomaly-info {
    display: flex;
    align-items: center;
    margin-top: 1px;
    justify-content: center; 
  }

.anomaly-text {
    margin-right: 5px;
  }

.score-dropdown {
   
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
`;


const SecurityEvents = () => {
    const [score, setScore] = useState(77); 

  return (
    <EventsContainer>
      <div className="events-container">
        <h3>Top Security Events 100</h3>
        <div className="dataset-label">Dataset 1</div> 
        <ResponsiveContainer width="100%" height={250}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Severity" 
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]} 
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Fidelity" 
              domain={[0,100]} 
              ticks={[0,15,30,45,60,75,90]} 
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Dataset 1" data={data} fill="#ffcc00" />
          </ScatterChart>
        </ResponsiveContainer>
        <div className="anomaly-info">
          <span className="anomaly-text">Private to Private Exploit Anomaly</span>
          <span className="score-dropdown">{score} score</span>
        </div>
      </div>
    </EventsContainer>
  );
};

export default SecurityEvents;
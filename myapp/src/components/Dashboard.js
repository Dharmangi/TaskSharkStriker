import React from "react";
import RiskChart from "./RiskChart";
import SecurityEvents from "./SecurityEvents";
import RadialPieChart from "./RadialPieChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
     
      <div className="dashboard-content">
        <RiskChart />
        <RadialPieChart/>
        <SecurityEvents />
      </div>
    </div>
  );
};

export default Dashboard;

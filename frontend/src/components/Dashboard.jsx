import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="button-container">
        <button className="button">Open Notes</button>
        <button className="button">Try Chatbot</button>
        <button className="button">View History</button>
        <button className="button logout">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;

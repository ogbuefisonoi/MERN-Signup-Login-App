import React, { useEffect, useState } from "react";
import DashNav from "../DashNav";

export default function Members() {
  
  return (
    <>
      <div className="dashboard_container">
        <h2 className="navbar-text">Welcome! </h2>
            <DashNav />
        <div className="dashboard_content">
            <h1>Members</h1>
            <p>Content goes here.</p>
        </div>
      </div>
      
    </>
  );
};
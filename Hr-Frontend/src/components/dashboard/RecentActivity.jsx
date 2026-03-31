import React from "react";
import { recentActivityData } from "../../data";

const RecentActivity = () => {
  return (
    <div className="card">
      <h2 className="card-header">Recent Activity</h2>
      <ul className="space-y-2">
        {recentActivityData.map((activity) => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
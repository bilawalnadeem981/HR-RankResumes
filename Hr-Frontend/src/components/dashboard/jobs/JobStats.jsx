import React from "react";

const JobStats = ({ jobs }) => {
  const total = jobs.length;
  const open = jobs.filter(j => j.status === "Open").length;
  const closed = jobs.filter(j => j.status === "Closed").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white shadow rounded-xl">
        <h3 className="text-gray-500">Total Jobs</h3>
        <p className="text-2xl font-bold">{total}</p>
      </div>

      <div className="p-4 bg-green-50 shadow rounded-xl">
        <h3 className="text-green-600">Open Jobs</h3>
        <p className="text-2xl font-bold">{open}</p>
      </div>

      <div className="p-4 bg-red-50 shadow rounded-xl">
        <h3 className="text-red-600">Closed Jobs</h3>
        <p className="text-2xl font-bold">{closed}</p>
      </div>
    </div>
  );
};

export default JobStats;
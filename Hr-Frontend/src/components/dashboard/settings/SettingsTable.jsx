import React from "react";

const SettingsTable = ({ reports }) => {
  return (
    <div className="table-wrapper">
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="table-head">
            <tr>
              <th className="table-th">Module</th>
              <th className="table-th">Access Level</th>
              <th className="table-th">Health Score</th>
              <th className="table-th">Status</th>
              <th className="table-th">Condition</th>
              <th className="table-th text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {(reports || []).map((report) => (
              <tr key={report.id} className="table-row">

                <td className="table-td font-medium text-gray-900">
                  {report.candidate}
                </td>

                <td className="table-td text-gray-600">
                  {report.role}
                </td>

                <td className="table-td">
                  <div className="flex items-center gap-2">
                    <div className="table-progress">
                      <div
                        className="table-progress-fill"
                        style={{ width: `${report.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold">
                      {report.score}%
                    </span>
                  </div>
                </td>

                <td className="table-td">
                  <span className={`status-badge ${report.skillsMatch}`}>
                    {report.skillsMatch}
                  </span>
                </td>

                <td className="table-td">
                  <span
                    className={`text-sm ${
                      report.sentiment === "Optimal" ||
                      report.sentiment === "Stable"
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {report.sentiment}
                  </span>
                </td>

                <td className="table-td text-right">
                  <button className="action-btn">
                    Manage Config
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SettingsTable;
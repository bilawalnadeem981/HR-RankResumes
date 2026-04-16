import React from "react";

const AIAnalysisTable = ({ reports }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Candidate</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Role</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">AI Score</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Skills Match</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Sentiment</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{report.candidate}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{report.role}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 h-1.5 rounded-full min-w-[60px]">
                      <div 
                        className="bg-indigo-600 h-full rounded-full" 
                        style={{ width: `${report.score}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{report.score}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    report.skillsMatch === 'High' ? 'bg-green-50 text-green-600' :
                    report.skillsMatch === 'Medium' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {report.skillsMatch}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1.5 text-sm ${
                    report.sentiment === 'Positive' ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {report.sentiment === 'Positive' ? '😊' : '😐'} {report.sentiment}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 font-semibold text-sm hover:text-indigo-800">
                    View Full Report
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

export default AIAnalysisTable;

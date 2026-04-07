import React from "react";

const CandidateRow = ({ candidate }) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{candidate.name}</td>
      <td>{candidate.email}</td>
      <td>{candidate.role}</td>
      <td>{candidate.experience}</td>

      <td>
        {candidate.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-600 px-2 py-1 mr-2 rounded text-sm"
          >
            {skill}
          </span>
        ))}
      </td>

      <td className="font-semibold">{candidate.score}%</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            candidate.status === "Shortlisted"
              ? "bg-green-100 text-green-600"
              : candidate.status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {candidate.status}
        </span>
      </td>
    </tr>
  );
};

export default CandidateRow;
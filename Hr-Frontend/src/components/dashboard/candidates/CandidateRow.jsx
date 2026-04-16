import { getStatusColor } from "../../../utils/common/helper";

const CandidateRow = ({ candidate }) => {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{candidate.name}</td>
      <td>{candidate.email}</td>
      <td>{candidate.role}</td>
      <td>{candidate.experience}</td>

      <td className="max-w-[200px]">
        <div className="flex flex-wrap gap-1">
          {candidate.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded text-xs font-medium border border-indigo-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </td>

      <td className="font-bold text-gray-900">{candidate.score}%</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${getStatusColor(
            candidate.status
          )}`}
        >
          {candidate.status}
        </span>
      </td>

    </tr>
  );
};

export default CandidateRow;
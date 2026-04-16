import { getStatusColor } from "../../../../utils/common/helper";

const JobRow = ({ job }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-3 font-medium">{job.title}</td>
      <td>{job.department}</td>
      <td>{job.openings}</td>

      <td>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm ${getStatusColor(job.status)}`}>
          {job.status}
        </span>
      </td>


      <td>
        <button className="text-blue-600 mr-2">View</button>
        <button className="text-green-600 mr-2">Edit</button>
        <button className="text-red-600">Delete</button>
      </td>
    </tr>
  );
};

export default JobRow;
import { MoreVertical, Edit2, Trash2, Eye } from "lucide-react";

const JobRow = ({ job }) => {
  return (
    <tr className="table-row group">
      <td className="table-td">
        <div className="flex flex-col">
          <span className="font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Ref: #JOB-{job.id}992</span>
        </div>
      </td>
      <td className="table-td text-center">
        <span className="px-3 py-1 rounded-lg bg-gray-50 text-gray-600 text-xs font-bold ring-1 ring-gray-100">
          {job.department}
        </span>
      </td>
      <td className="table-td text-center">
        <div className="flex flex-col items-center">
          <span className="text-sm font-black text-gray-900">{job.openings}</span>
          <span className="text-[10px] font-bold text-gray-400 uppercase">seats</span>
        </div>
      </td>

      <td className="table-td text-center">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm
          ${job.status === "Open" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : 
            job.status === "Paused" ? "bg-amber-50 text-amber-600 border-amber-100" : 
            "bg-rose-50 text-rose-600 border-rose-100"}`}>
          {job.status}
        </span>
      </td>

      <td className="table-td text-right">
        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <button className="p-2 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-all" title="View Details">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-all" title="Edit Position">
            <Edit2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-all" title="Remove Listing">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default JobRow;
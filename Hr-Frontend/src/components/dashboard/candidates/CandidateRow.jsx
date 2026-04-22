import { Eye, Mail, Award, MoreHorizontal } from "lucide-react";

const CandidateRow = ({ candidate }) => {
  return (
    <tr className="table-row group">
      <td className="table-td">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-indigo-100 uppercase tracking-tighter">
            {candidate.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-black text-gray-900 truncate group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{candidate.name}</span>
            <div className="flex items-center gap-1.5 text-gray-400">
               <Mail className="w-3 h-3" />
               <span className="text-[10px] font-bold truncate">{candidate.email}</span>
            </div>
          </div>
        </div>
      </td>
      
      <td className="table-td">
        <div className="flex flex-col">
          <span className="text-sm font-black text-gray-900">{candidate.role}</span>
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mt-0.5">Applied Position</span>
        </div>
      </td>

      <td className="table-td text-center">
        <div className="inline-flex items-center justify-center p-1 px-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-black text-gray-700">
          {candidate.experience}
        </div>
      </td>

      <td className="table-td max-w-[200px]">
        <div className="flex flex-wrap gap-1">
          {candidate.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="bg-white text-gray-600 px-2 py-0.5 rounded-md text-[9px] font-black uppercase border border-gray-100 shadow-sm"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 3 && (
            <span className="text-[9px] font-black text-indigo-400 ml-1">+{candidate.skills.length - 3} MORE</span>
          )}
        </div>
      </td>

      <td className="table-td text-center">
        <div className="flex flex-col items-center">
           <div className={`text-sm font-black ${candidate.score >= 80 ? "text-emerald-600" : candidate.score >= 60 ? "text-amber-600" : "text-rose-600"}`}>
             {candidate.score}%
           </div>
           <Award className={`w-3 h-3 ${candidate.score >= 80 ? "text-emerald-400" : "text-gray-200"}`} />
        </div>
      </td>

      <td className="table-td text-center">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm
          ${candidate.status === "Shortlisted" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : 
            candidate.status === "Pending" ? "bg-amber-50 text-amber-600 border-amber-100" : 
            "bg-rose-50 text-rose-600 border-rose-100"}`}
        >
          {candidate.status}
        </span>
      </td>

      <td className="table-td text-right">
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>

    </tr>
  );
};

export default CandidateRow;
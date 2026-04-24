import React from "react";
import { Eye, Edit2, Trash2, Mail, Calendar, ShieldCheck } from "lucide-react";

const UserRow = ({ user }) => {
  return (
    <tr className="table-row group">
      <td className="table-td">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-100 uppercase">
            {user.avatar || user.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{user.name}</span>
            <div className="flex items-center gap-1.5 text-gray-400">
               <Mail className="w-3 h-3" />
               <span className="text-[10px] font-bold">{user.email}</span>
            </div>
          </div>
        </div>
      </td>

      <td className="table-td">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-black text-gray-700">{user.role}</span>
        </div>
      </td>

      <td className="table-td text-center">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm
          ${user.status === "Active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"}`}>
          {user.status}
        </span>
      </td>

      <td className="table-td text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-sm font-bold">{user.createdDate}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mt-0.5">Joined Date</span>
        </div>
      </td>

      <td className="table-td text-right">
        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <button className="p-2 rounded-lg hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 transition-all" title="View Profile">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-amber-50 text-gray-400 hover:text-amber-600 transition-all" title="Edit Permissions">
            <Edit2 className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-all" title="Delete User">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;

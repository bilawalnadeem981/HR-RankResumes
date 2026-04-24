import React from "react";
import UserRow from "./UserRow";

const UsersTable = ({ users }) => {
  return (
    <div className="table-wrapper">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="table-head">
            <tr>
              <th className="table-th">User Profile</th>
              <th className="table-th">Role / Level</th>
              <th className="table-th text-center">Status</th>
              <th className="table-th text-center">Onboarding Date</th>
              <th className="table-th text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {(users || []).length > 0 ? (
              users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-gray-400 font-medium italic font-black uppercase tracking-widest text-xs">
                  No users found matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;

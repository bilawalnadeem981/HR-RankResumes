import { shortlistedPageData } from "../data";

// Optional: yahan ek component bana sakte ho jo table dikhaye
const ShortlistedTable = () => {

  return (
    <div className="card-lg">
      <h2 className="card-header mt-1 mb-4">Shortlisted Candidates</h2>
      <table className="table-custom">
        <thead>
          <tr className="table-head-row">
            <th className="table-cell">Name</th>
            <th className="table-cell">Role</th>
            <th className="table-cell">Score</th>
          </tr>
        </thead>
        <tbody>
          {shortlistedPageData.map((cand) => (
            <tr key={cand.id} className="table-row-hover">
              <td className="table-cell">{cand.name}</td>
              <td className="table-cell">{cand.role}</td>
              <td className="table-cell">{cand.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ShortlistedPage = () => {
  return (
    <div className="w-full">
      <h1 className="page-title mb-6">Shortlisted Candidates</h1>
      <ShortlistedTable />
    </div>
  );
};

export default ShortlistedPage;

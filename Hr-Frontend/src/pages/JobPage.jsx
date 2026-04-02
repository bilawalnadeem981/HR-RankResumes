import JobOpenings from "../components/dashboard/JobOpenings";

const JobPage = () => {
  return (
    <div className="w-full">
      <h1 className="page-title mb-4">Jobs</h1>
      <JobOpenings />
    </div>
  );
};

export default JobPage;

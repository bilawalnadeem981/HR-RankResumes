export const heroStats = [
  { id: 1, value: "5,000+", label: "HR Professionals", color: "text-indigo-600" },
  { id: 2, value: "250+", label: "Resumes Screened", color: "text-violet-600" },
  { id: 3, value: "15s", label: "Avg Match Time", color: "text-emerald-600" },
];

export const heroFeatures = [
  "Scores each bullet point for maximum impact",
  "Checks for inconsistencies and optimal length",
  "Analyzes word choice and removes filler words",
  "Identifies key keywords and industry buzzwords",
  "Style and brevity optimization",
  "AI-driven recruitment alignment",
];


export const jobStatusColors = {
  Open: "bg-green-100 text-green-600",
  Closed: "bg-red-100 text-red-600",
  Paused: "bg-yellow-100 text-yellow-600",
};

export const candidateStatusColors = {
  Shortlisted: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Rejected: "bg-red-100 text-red-600",
};


export const jobStatusList = ["All", "Open", "Closed", "Paused"];

export const departments = [
  "All",
  "Engineering",
  "Design",
  "HR",
  "Data",
];

export const roles = [
  "All",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "UI/UX Designer",
];

export const experienceLevels = [
  "All",
  "1 year",
  "2 years",
  "3 years",
  "5+ years",
];


export const candidatesData = [
  {
    id: 1,
    name: "Bilal Ahmed",
    email: "bilal@example.com",
    role: "Frontend Developer",
    experience: "3 years",
    skills: ["React", "Node.js", "Tailwind CSS"],
    score: 85,
    status: "Shortlisted",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    role: "Backend Developer",
    experience: "5 years",
    skills: ["Python", "Django"],
    score: 78,
    status: "Pending",
  },
  {
    id: 3,
    name: "Ali Raza",
    email: "ali@example.com",
    role: "Data Analyst",
    experience: "2 years",
    skills: ["Excel", "SQL"],
    score: 65,
    status: "Rejected",
  },
];


export const jobOpeningsData = [
  { id: 1, title: "Frontend Developer", department: "Engineering", openings: 3, status: "Open" },
  { id: 2, title: "Backend Developer", department: "Engineering", openings: 2, status: "Paused" },
  { id: 3, title: "UI/UX Designer", department: "Design", openings: 1, status: "Closed" },
  { id: 4, title: "HR Manager", department: "HR", openings: 1, status: "Open" },
  { id: 5, title: "Data Analyst", department: "Data", openings: 2, status: "Closed" },
];


export const aiAnalysisData = [
  { id: 1, label: "Average Resume Score", value: "78%" },
  { id: 2, label: "Top Skill Detected", value: "React.js" },
];


export const resumeData = [
  { id: 1, name: "Ali Khan", role: "Frontend Developer", status: "Pending" },
  { id: 2, name: "Sara Ahmed", role: "UI Designer", status: "Shortlisted" },
  { id: 3, name: "Usman Tariq", role: "Backend Developer", status: "Rejected" },
];


export const statsData = [
  { title: "Total Resumes", value: 120, icon: "FileIcon", color: "text-blue-500" },
  { title: "Shortlisted", value: 70, icon: "CheckIcon", color: "text-green-500" },
  { title: "Rejected", value: 30, icon: "TimesIcon", color: "text-red-500" },
  { title: "Pending", value: 20, icon: "ClockIcon", color: "text-yellow-500" },
];

export const recentActivityData = [
  { id: 1, text: "Ali Khan uploaded a resume" },
  { id: 2, text: "Sara Ahmed was shortlisted" },
  { id: 3, text: "Usman Tariq was rejected" },
];


export const featuresData = [
  { icon: "TargetIcon", title: "Smart AI Matching", description: "AI automatically matches candidates with job requirements." },
  { icon: "LightningIcon", title: "Instant Resume Scoring", description: "Get resume scores instantly with AI analysis." },
  { icon: "ChartIcon", title: "Candidate Ranking Dashboard", description: "View ranked candidates in a powerful dashboard." },
  { icon: "BrainIcon", title: "Skill Gap Detection", description: "Identify missing skills in candidates instantly." },
  { icon: "ShieldIcon", title: "Bias-Free Hiring", description: "Eliminate bias with data-driven decisions." },
  { icon: "UploadIcon", title: "Bulk Resume Upload", description: "Upload multiple resumes at once easily." },
];


export const ctaFeatures = [
  "Free 14-day trial",
  "Cancel anytime",
  "24/7 support",
];

export const ctaStats = [
  { id: 1, value: "90%", label: "Time Saved" },
  { id: 2, value: "10x", label: "Faster Hiring" },
  { id: 3, value: "5K+", label: "Happy Clients" },
  { id: 4, value: "99%", label: "Accuracy Rate" },
];


export const workflowSteps = [
  { id: 1, number: "01", title: "Upload Resumes", description: "Upload candidate resumes easily.", color: "indigo" },
  { id: 2, number: "02", title: "AI Analysis", description: "AI analyzes skills instantly.", color: "violet" },
  { id: 3, number: "03", title: "Get Rankings", description: "Receive ranked candidates.", color: "emerald" },
];

export const workflowBottomItems = [
  { id: 1, title: "Automated Screening", desc: "AI handles resume review" },
  { id: 2, title: "Detailed Insights", desc: "Get candidate analysis" },
  { id: 3, title: "Collaborative Hiring", desc: "Share with team" },
];

export const sidebarMenu = [
  { name: "Dashboard", icon: "DashboardIcon", path: "/dashboard" },
  { name: "Candidates", icon: "CandidatesIcon", path: "/candidates" },
  { name: "Jobs", icon: "JobsIcon", path: "/jobs" },
  { name: "AI Analysis", icon: "AnalysisIcon", path: "/analysis" },
  { name: "Settings", icon: "SettingsIcon", path: "/settings" },
];


export const shortlistedPageData = [
  { id: 1, name: "Ali Khan", role: "Frontend Developer", score: "85%" },
  { id: 2, name: "Sara Ahmed", role: "UI Designer", score: "80%" },
  { id: 3, name: "Usman Tariq", role: "Backend Developer", score: "78%" },
];

export const gradientMap = {
  indigo: "from-indigo-500 to-violet-500",
  violet: "from-violet-500 to-purple-500",
  emerald: "from-emerald-500 to-teal-500",
};

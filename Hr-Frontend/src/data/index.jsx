import {
  Upload,
  Brain,
  BarChart2,
  Target,
  Zap,
  Shield,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Timer,
  Trophy,
  Scale
} from "lucide-react";
import { FaHome, FaUsers, FaBriefcase, FaChartBar, FaCog } from "react-icons/fa";

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


export const aiAnalysisData = {
  header: {
    title: "AI Analysis",
    description: "Deep analytical insights into candidate performance and skill distributions",
    actionButton: "+ Run New Analysis"
  },
  stats: [
    { label: "Avg Match Score", value: "78%", icon: Target, color: "text-indigo-600" },
    { label: "Skill Accuracy", value: "95%", icon: Brain, color: "text-violet-600" },
    { label: "Reports Generated", value: "1.2k", icon: FileText, color: "text-emerald-600" },
    { label: "Time Saved", value: "450h", icon: Timer, color: "text-blue-600" }
  ],
  reports: [
    {
      id: 1,
      candidate: "Bilal Ahmed",
      role: "Frontend Developer",
      score: 85,
      skillsMatch: "High",
      sentiment: "Positive",
      lastUpdated: "2024-03-20"
    },
    {
      id: 2,
      candidate: "Sara Khan",
      role: "Backend Developer",
      score: 78,
      skillsMatch: "Medium",
      sentiment: "Neutral",
      lastUpdated: "2024-03-19"
    },
    {
      id: 3,
      candidate: "Ali Raza",
      role: "Data Analyst",
      score: 65,
      skillsMatch: "Low",
      sentiment: "Positive",
      lastUpdated: "2024-03-18"
    }
  ],
  filters: {
    roles: ["All", "Frontend Developer", "Backend Developer", "Data Analyst", "UI/UX Designer"],
    matchLevels: ["All", "High", "Medium", "Low"]
  }
};



export const resumeData = [
  { id: 1, name: "Ali Khan", role: "Frontend Developer", status: "Pending" },
  { id: 2, name: "Sara Ahmed", role: "UI Designer", status: "Shortlisted" },
  { id: 3, name: "Usman Tariq", role: "Backend Developer", status: "Rejected" },
];


export const statsData = [
  { title: "Total Resumes", value: 120, icon: FileText, color: "text-blue-500" },
  { title: "Shortlisted", value: 70, icon: CheckCircle, color: "text-green-500" },
  { title: "Rejected", value: 30, icon: XCircle, color: "text-red-500" },
  { title: "Pending", value: 20, icon: Clock, color: "text-yellow-500" },
];

export const recentActivityData = [
  { id: 1, text: "Ali Khan uploaded a resume" },
  { id: 2, text: "Sara Ahmed was shortlisted" },
  { id: 3, text: "Usman Tariq was rejected" },
];


export const featuresData = [
  { 
    id: 1,
    icon: Target, 
    title: "Smart AI Matching", 
    description: "AI automatically matches candidates with job requirements.",
    fullDescription: "Our Smart AI Matching system uses advanced Natural Language Processing (NLP) to go beyond simple keyword matching. It understands the context, intent, and seniority level required for each position, ensuring that the resumes you see are truly aligned with your needs.",
    points: [
      "Context-aware skill evaluation",
      "Semantic search capabilities",
      "Dynamic weight adjustment for job requirements",
      "Automated compatibility scoring"
    ],
    color: "indigo"
  },
  { 
    id: 2,
    icon: Zap, 
    title: "Instant Resume Scoring", 
    description: "Get resume scores instantly with AI analysis.",
    fullDescription: "Speed up your recruitment process with real-time analysis. As soon as a resume is uploaded, our engine calculates a score based on industry standards, job specifications, and historical hiring data, providing immediate insights into candidate potential.",
    points: [
      "Real-time processing engine",
      "Multi-dimensional scoring metrics",
      "Benchmark comparison against top talent",
      "Detailed score breakdown per skill"
    ],
    color: "violet"
  },
  { 
    id: 3,
    icon: BarChart2, 
    title: "Candidate Ranking Dashboard", 
    description: "View ranked candidates in a powerful dashboard.",
    fullDescription: "Make data-driven decisions with our comprehensive dashboard. Sort, filter, and compare candidates based on their AI-generated scores. The intuitive interface provides a clear hierarchy of the best talent available for your open roles.",
    points: [
      "Visual candidate comparison charts",
      "Customizable ranking criteria",
      "Filter by experience, skills, and scores",
      "Collaborative notes and feedback tracking"
    ],
    color: "emerald"
  },
  { 
    id: 4,
    icon: Brain, 
    title: "Skill Gap Detection", 
    description: "Identify missing skills in candidates instantly.",
    fullDescription: "Perfect your hiring strategy by understanding exactly what's missing. Our AI identifies the 'gaps' between a candidate's profile and your job description, helping you decide if training is an option or if you need to keep looking.",
    points: [
      "Automated gap analysis",
      "Training and development suggestions",
      "Requirement vs. Profile heatmap",
      "Market availability assessment"
    ],
    color: "indigo"
  },
  { 
    id: 5,
    icon: Shield, 
    title: "Bias-Free Hiring", 
    description: "Eliminate bias with data-driven decisions.",
    fullDescription: "Promote diversity and inclusion by focusing purely on qualifications. Our AI can be configured to anonymize candidate data, ensuring that early screening decisions are based entirely on merit and skill match.",
    points: [
      "Anonymized screening options",
      "Objective performance metrics",
      "Data-backed diversity insights",
      "Traceable and audit-friendly decisions"
    ],
    color: "violet"
  },
  { 
    id: 6,
    icon: Upload, 
    title: "Bulk Resume Upload", 
    description: "Upload multiple resumes at once easily.",
    fullDescription: "Handle large volumes of data without breaking a sweat. Whether you have ten resumes or ten thousand, our bulk upload feature processes them all seamlessly, populating your database with parsed information in seconds.",
    points: [
      "Support for PDF, DOCX, and TXT",
      "Drag-and-drop batch processing",
      "Automated data extraction and normalization",
      "Duplicate detection and merging"
    ],
    color: "emerald"
  },
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


export const howItWorksData = [
  { 
    id: 1, 
    icon: Upload, 
    title: "Upload Resumes", 
    description: "Upload candidate resumes easily and quickly using our secure bulk upload tool.",
    color: "indigo",
    step: "01"
  },
  { 
    id: 2, 
    icon: Brain, 
    title: "AI Analysis", 
    description: "AI analyzes skills instantly using advanced natural language processing.",
    color: "violet",
    step: "02"
  },
  { 
    id: 3, 
    icon: BarChart2, 
    title: "Get Rankings", 
    description: "Receive ranked candidates based on job compatibility and skill match.",
    color: "emerald",
    step: "03"
  },
];

export const workflowSteps = [
  { id: 1, number: "01", icon: Upload, title: "Upload Resumes", description: "Upload candidate resumes easily.", color: "indigo" },
  { id: 2, number: "02", icon: Brain, title: "AI Analysis", description: "AI analyzes skills instantly.", color: "violet" },
  { id: 3, number: "03", icon: BarChart2, title: "Get Rankings", description: "Receive ranked candidates.", color: "emerald" },
];

export const workflowBottomItems = [
  { id: 1, title: "Automated Screening", desc: "AI handles resume review" },
  { id: 2, title: "Detailed Insights", desc: "Get candidate analysis" },
  { id: 3, title: "Collaborative Hiring", desc: "Share with team" },
];

export const sidebarMenu = [
  { name: "Dashboard", icon: FaHome, path: "/dashboard" },
  { name: "Candidates", icon: FaUsers, path: "/candidates" },
  { name: "Jobs", icon: FaBriefcase, path: "/jobs" },
  { name: "AI Analysis", icon: FaChartBar, path: "/analysis" },
  { name: "Settings", icon: FaCog, path: "/settings" },
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

export const resultsData = [
  {
    id: 1,
    icon: Timer,
    title: "90% Reduction in Screening Time",
    description: "Our AI helps HR teams screen thousands of resumes in minutes instead of weeks.",
    fullDescription: "By automating the initial screening process, RankResumes AI allows recruitment teams to bypass the manual labor of reading every single application. Our sophisticated NLP engine parses and scores resumes against job descriptions instantly, ensuring that human recruiters only spend time on high-potential candidates.",
    impact: "Recruiters save an average of 32 hours per week on initial candidate screening.",
    color: "indigo"
  },
  {
    id: 2,
    icon: Trophy,
    title: "15x Better Candidate Quality",
    description: "Focus on the top 1% of talent identified by our advanced ranking algorithms.",
    fullDescription: "Our ranking algorithm doesn't just look for keywords; it evaluates skill depth, professional trajectory, and compatibility with your specific company culture. This results in a much higher conversion rate from interview to hire, as the candidates being seen are fundamentally better matches for the role.",
    impact: "Companies report a 45% increase in offer acceptance rates from top-ranked candidates.",
    color: "violet"
  },
  {
    id: 3,
    icon: Scale,
    title: "Eliminated Hiring Bias",
    description: "Data-driven decisions that focus purely on merit and skill match.",
    fullDescription: "RankResumes AI is designed to focus strictly on objective data points. By removing identifiable traits in the early screening phases and focusing on proven skills and experience, we help organizations build more diverse and talented teams based on pure merit.",
    impact: "70% increase in workforce diversity in the first 6 months of implementation.",
    color: "emerald"
  }
];

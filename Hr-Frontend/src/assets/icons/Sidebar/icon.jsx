import React from "react";
import { FaHome, FaUsers, FaCog, FaBriefcase, FaChartBar } from "react-icons/fa";

export const DashboardIcon = () => <FaHome />;
export const CandidatesIcon = () => <FaUsers />;
export const JobsIcon = () => <FaBriefcase />;
export const AnalysisIcon = () => <FaChartBar />;
export const SettingsIcon = () => <FaCog />;

export const sidebarIcons = {
  DashboardIcon,
  CandidatesIcon,
  JobsIcon,
  AnalysisIcon,
  SettingsIcon,
};

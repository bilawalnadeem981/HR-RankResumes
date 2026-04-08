import React from "react";
import { FaFileAlt, FaTimesCircle, FaClock } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export const FileIcon = () => <FaFileAlt className="w-6 h-6" />;
export const TimesIcon = () => <FaTimesCircle className="w-6 h-6" />;
export const ClockIcon = () => <FaClock className="w-6 h-6" />;

export const icons = {
  FileIcon,
  TimesIcon,
  ClockIcon,
  FaUserGroup
};

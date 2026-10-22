import {
  SiPython,
  SiReact,
  SiTypescript,
  SiStreamlit,
  SiVercel,
  SiMongodb
} from "react-icons/si";
import { FaGitAlt, FaBrain, FaHtml5 } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";
import InsightsIcon from "@mui/icons-material/Insights";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python & SQL" },
    { id: "skills-main-ts-js", className: "skill-icon", icon: <SiTypescript size={ICON_SIZE} />, text: "TypeScript & JavaScript" },
    { id: "skills-main-react-next", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React & Next.js" },
    { id: "skills-main-data", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "Data Analysis & Pandas" },
    { id: "skills-main-ml", className: "skill-icon", icon: <FaBrain size={ICON_SIZE} />, text: "Machine Learning (Scikit-Learn)" },
    { id: "skills-main-streamlit", className: "skill-icon", icon: <SiStreamlit size={ICON_SIZE} />, text: "Streamlit App Development" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git & Version Control" },
    { id: "skills-main-vercel", className: "skill-icon", icon: <SiVercel size={ICON_SIZE} />, text: "Vercel & Web Deployment" }
  ],
  complementarySkills: [
    { id: "skills-comp-quality", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Data Cleaning & Quality Checks" },
    { id: "skills-comp-bi", className: "skill-icon", icon: <InsightsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI & Dashboards" },
    { id: "skills-comp-mongodb", className: "skill-icon", icon: <SiMongodb size={ICON_SIZE} />, text: "MongoDB & Relational Databases" },
    { id: "skills-comp-cloud", className: "skill-icon", icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />, text: "Cloudinary & Media Assets" },
    { id: "skills-comp-vision", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "MobileNetV2 & Image Classification" },
    { id: "skills-comp-sap", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SAP Datasphere" },
    { id: "skills-comp-auto", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "Business Workflow Automation" },
    { id: "skills-comp-html", className: "skill-icon", icon: <FaHtml5 size={ICON_SIZE} />, text: "HTML5 & Modern CSS" }
  ]
};

export default skillsConfig;

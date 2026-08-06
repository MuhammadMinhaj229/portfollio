import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiReact,
  SiJavascript
} from "react-icons/si";
import { FaGitAlt, FaBrain, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";
import InsightsIcon from "@mui/icons-material/Insights";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python & R" },
    { id: "skills-main-postgres", className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />, text: "PostgreSQL" },
    { id: "skills-main-ml", className: "skill-icon", icon: <FaBrain size={ICON_SIZE} />, text: "Scikit-Learn & XGBoost" },
    { id: "skills-main-react", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React & Next.js" },
    { id: "skills-main-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker & FastAPI" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git & GitHub MLOps" }
  ],
  complementarySkills: [
    { id: "skills-comp-sql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SQL / Relational DBs" },
    { id: "skills-comp-shap", className: "skill-icon", icon: <InsightsIcon sx={{ fontSize: ICON_SIZE }} />, text: "SHAP Explainable AI" },
    { id: "skills-comp-stats", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "CausalML & A/B Testing" },
    { id: "skills-comp-cloud", className: "skill-icon", icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />, text: "AWS & Cloud Systems" },
    { id: "skills-comp-js", className: "skill-icon", icon: <SiJavascript size={ICON_SIZE} />, text: "JavaScript & ES6" },
    { id: "skills-comp-css", className: "skill-icon", icon: <FaCss3Alt size={ICON_SIZE} />, text: "Tailwind & Vanilla CSS" },
    { id: "skills-comp-html", className: "skill-icon", icon: <FaHtml5 size={ICON_SIZE} />, text: "HTML5 Semantic" },
    { id: "skills-comp-bi", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI & Tableau" },
    { id: "skills-comp-sap", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SAP Datasphere" },
    { id: "skills-comp-auto", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "SME Automation Engine" }
  ]
};

export default skillsConfig;






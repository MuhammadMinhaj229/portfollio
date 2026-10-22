import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { BiRocket } from "react-icons/bi";
import { FaLaptopCode, FaRobot } from "react-icons/fa";
import { Typography, Box } from "@mui/material";

const homeConfig = {
  greeting_i18n: {
    en: (
      <Typography variant="h1" component="h1" sx={{ fontWeight: 900, letterSpacing: '-0.03em', mb: 1.5, wordBreak: 'break-word' }}>
        Hi! I'm <Box component="span" sx={{ color: 'secondary.main', display: 'inline' }}>Mohammed Minhaj Mahmood</Box>
      </Typography>
    ),
    es: (
      <Typography variant="h1" component="h1" sx={{ fontWeight: 900, letterSpacing: '-0.03em', mb: 1.5, wordBreak: 'break-word' }}>
        ¡Hola! Soy <Box component="span" sx={{ color: 'secondary.main', display: 'inline' }}>Mohammed Minhaj Mahmood</Box>
      </Typography>
    ),
  },

  titles_i18n: {
    en: [
      "Data & Business Automation Analyst",
      "Founder at Alif Growth Media",
      "Web Development & Automation (PHFI)",
      "AI Feature Tester (Sanad AI)",
      "Computer Science & Data Science Graduate",
    ],
    es: [
      "Analista de Datos y Automatización Empresarial",
      "Fundador de Alif Growth Media",
      "Desarrollo Web y Automatización (PHFI)",
      "Probador de Funciones de IA (Sanad AI)",
      "Graduado en Informática y Ciencia de Datos",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I am a Computer Science (Data Science) graduate with hands-on experience in website management, data automation, and AI feature testing.",
      exit:
        "At PHFI, I maintain the DOHaD India website and develop research data automation tools. At Ejadah AI Labs, I test features for Sanad AI to improve how people interact with AI. I also run Alif Growth Media, where I build clean websites and set up automated workflows to help local businesses grow.",
    },
    es: {
      start:
        "Soy graduado en Ciencias de la Computación (Ciencia de Datos) con experiencia práctica en administración de sitios web, automatización de datos y pruebas de funciones de IA.",
      exit:
        "En PHFI, mantengo el sitio web de DOHaD India y desarrollo herramientas de automatización de datos de investigación. En Ejadah AI Labs, pruebo funciones para Sanad AI. También dirijo Alif Growth Media, ayudando a las empresas locales con el desarrollo web y flujos de trabajo digitales.",
    },
  },

  workTimeline: [
    {
      id: "work-4",
      title: "AI Feature Tester",
      title_i18n: { en: "AI Feature Tester", es: "Probador de Funciones de IA" },
      company: "Ejadah AI Labs — Sanad AI",
      category: "industry",
      description_i18n: {
        en: "Testing AI features across platforms, identifying edge cases and user interface issues, and sharing clear feedback with the engineering team to improve app usability and performance.",
        es: "Probando funciones de IA en diferentes plataformas, identificando problemas de interfaz y compartiendo comentarios claros con el equipo de ingeniería para mejorar la usabilidad.",
      },
      date: "10/2026-Present",
      isCurrent: true,
      icon: <FaRobot />,
      tags: ["ai-testing", "qa", "user-experience", "feedback"],
    },
    {
      id: "work-3",
      title: "Web Development & Data Automation Intern",
      title_i18n: { en: "Web Development & Data Automation Intern", es: "Pasante de Desarrollo Web y Automatización de Datos" },
      company: "Public Health Foundation of India (PHFI)",
      category: "industry",
      description_i18n: {
        en: "Maintaining the official DOHaD India website, setting up smooth deployment workflows with GitHub and Vercel, and building a Python-based tool to automate research data review, cleaning, and checks.",
        es: "Mantenimiento del sitio web de DOHaD India, configuración de flujos de despliegue con GitHub y Vercel, y desarrollo de una herramienta en Python para automatizar la revisión de datos de investigación.",
      },
      date: "09/2026-Present",
      isCurrent: true,
      icon: <FaLaptopCode />,
      tags: ["nextjs", "python", "data-automation", "vercel", "mongodb"],
    },
    {
      id: "work-2",
      title: "Business Analyst & AI Automation",
      title_i18n: { en: "Business Analyst & AI Automation", es: "Analista de Negocios y Automatización de IA" },
      company: "Alif Growth Media",
      category: "leadership",
      description_i18n: {
        en: "Built structured service workflows covering custom website design, digital presence, and customer communication automation for local businesses. Helping clients like SAFA Fresh and DT Interiors turn business needs into working digital solutions.",
        es: "Creé flujos de trabajo de servicios para diseño de sitios web, presencia digital y automatización de comunicación con clientes para empresas locales como SAFA Fresh y DT Interiors.",
      },
      date: "03/2026-Present",
      isCurrent: true,
      icon: <BiRocket />,
      tags: ["web-development", "automation", "digital-growth", "client-systems"],
      link: "https://alif-growth.netlify.app/",
      linkText: "Visit Alif Growth Media ↗",
    },
    {
      id: "work-1",
      title: "Data Analytics Simulation Analyst",
      title_i18n: { en: "Data Analytics Simulation Analyst", es: "Analista de Simulación de Análisis de Datos" },
      company: "Deloitte Australia (Forage)",
      category: "industry",
      description_i18n: {
        en: "Completed practical business analytics tasks, analyzing customer datasets and designing clear visual dashboards to help teams understand data and make informed decisions.",
        es: "Completé tareas prácticas de análisis empresarial, analizando conjuntos de datos de clientes y diseñando tableros visuales claros.",
      },
      date: "2025",
      isCurrent: false,
      icon: <BsClipboardData />,
      tags: ["data-analysis", "dashboards", "business-insights"],
    },
    {
      id: "work-0",
      title: "B.Tech in Computer Science Engineering (Data Science)",
      title_i18n: { en: "B.Tech in Computer Science Engineering (Data Science)", es: "B.Tech en Ingeniería Informática (Ciencia de Datos)" },
      company: "Vaagdevi College of Engineering, JNTUH",
      category: "education",
      description_i18n: {
        en: "Studying Computer Science with a specialization in Data Science. Learned software development, data analysis, database management, and machine learning fundamentals.",
        es: "Estudiando Informática con especialización en Ciencia de Datos. Aprendizaje de desarrollo de software, análisis de datos y fundamentos de aprendizaje automático.",
      },
      date: "2022-2026",
      isCurrent: false,
      icon: <DiCodeigniter />,
      tags: ["computer-science", "data-science", "python", "sql"],
    },
  ],
};

export default homeConfig;

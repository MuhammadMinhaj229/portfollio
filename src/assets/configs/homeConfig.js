import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Mohammed Minhaj Mahmood</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Mohammed Minhaj Mahmood</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Data & ML Specialist",
      "Founder @ Alif Growth Media",
      "Business Automation Engineer",
      "Full-Stack Systems Developer",
      "Applied AI Researcher",
      "B.Tech Data Science (2026)",
    ],
    es: [
      "Especialista en Datos y ML",
      "Fundador de Alif Growth Media",
      "Ingeniero de Automatización Empresarial",
      "Desarrollador de Sistemas Full-Stack",
      "Investigador Aplicado de IA",
      "B.Tech Ciencia de Datos (2026)",
    ],
  },

  about_i18n: {
    en: {
      start:
        "I am a Computer Science (Data Science) graduate with a genuine passion for technology: understanding problems deeply through analytical data modeling, applied ML research, and high-performance engineering.",
      exit:
        "I combine rigorous technical proficiency in Python, PostgreSQL, and modern generative AI with real entrepreneurial leadership as Founder of Alif Growth Media, building automated growth engines and scalable digital solutions.",
    },
    es: {
      start:
        "Soy graduado en Ciencias de la Computación (Ciencia de Datos) con una verdadera pasión por la tecnología: entendiendo problemas a fondo a través de modelado analítico de datos y desarrollo de ingeniería de alto rendimiento.",
      exit:
        "Combino destreza técnica en Python, PostgreSQL e IA generativa con liderazgo empresarial real como Fundador de Alif Growth Media, creando motores de crecimiento automatizados.",
    },
  },

  workTimeline: [
    {
      id: "work-3",
      title: "Founder & Business Automation Lead",
      title_i18n: { en: "Founder & Business Automation Lead", es: "Fundador y Líder de Automatización" },
      company: "Alif Growth Media",
      description_i18n: {
        en: "Architected a structured 4-step growth engine (Understand → Design → Automate → Grow) for SMEs. Designed digital marketing funnels and web systems for clients including SAFA Fresh, DT Interiors, and Sumera Collections.",
        es: "Diseñé un motor de crecimiento en 4 pasos para pymes. Desarrollé embudos digitales y sistemas web para clientes como SAFA Fresh, DT Interiors y Sumera Collections.",
      },
      date: "03/2026-Present",
      icon: <BiRocket />,
      tags: ["automation", "ai-pipelines", "web-dev", "digital-strategy", "entrepreneurship"],
      link: "https://www.linkedin.com/in/muhammadminhaj229/",
      linkText: "Checkout ↗",
    },
    {
      id: "work-2",
      title: "Applied ML Researcher (Team Lead)",
      title_i18n: { en: "Applied ML Researcher (Team Lead)", es: "Investigador de ML Aplicada (Team Lead)" },
      company: "Vaagdevi College of Engineering",
      description_i18n: {
        en: "Led capstone team in developing a vision-based terrain classification system (Desert, Forest, Mountain, Plains) using lightweight MobileNetV2 feature extraction tailored for constrained edge hardware (drones/rovers).",
        es: "Lideré equipo de investigación en sistema de clasificación de terreno con MobileNetV2 para hardware de recursos limitados (drones/rovers).",
      },
      date: "10/2025-02/2026",
      icon: <GiCommercialAirplane />,
      tags: ["computer-vision", "mobilenetv2", "edge-ai", "python", "streamlit", "deep-learning"],
    },
    {
      id: "work-1",
      title: "Data Analytics Simulation Analyst",
      title_i18n: { en: "Data Analytics Simulation Analyst", es: "Analista de Simulación de Datos" },
      company: "Deloitte Australia (Forage)",
      description_i18n: {
        en: "Executed practical data analysis initiatives, developing interactive executive KPI dashboards and statistical customer cohort models to drive actionable consulting solutions.",
        es: "Ejectuté iniciativas prácticas de análisis de datos, desarrollando tableros KPI ejecutivos y modelos estadísticos de clientes.",
      },
      date: "2025",
      icon: <BsClipboardData />,
      tags: ["data-analytics", "sql", "tableau", "segmentation", "executive-reporting"],
    },
    {
      id: "work-0",
      title: "B.Tech in Data Science",
      title_i18n: { en: "B.Tech in Data Science", es: "B.Tech en Ciencia de Datos" },
      company: "Vaagdevi College of Engineering, JNTUH",
      description_i18n: {
        en: "Specializing in Data Science, Machine Learning, Explainable AI (SHAP), and Cloud Software Infrastructure. Maintained strong rigorous analytical coursework.",
        es: "Especialización en Ciencia de Datos, Aprendizaje Automático, IA explicable (SHAP) e infraestructura en la nube.",
      },
      date: "2022-2026",
      icon: <DiCodeigniter />,
      tags: ["data-science", "python", "machine-learning", "causal-ml", "statistics", "sql"],
    },
  ],
};

export default homeConfig;

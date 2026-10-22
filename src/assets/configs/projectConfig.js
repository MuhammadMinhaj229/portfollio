import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from 'react';

const projectConfig = [
  {
    id: "project-spotify",
    title: "Spotify Music Streaming Platform",
    illustrationType: "spotify",
    category: { en: "Full-Stack Web", es: "Web Full-Stack" },
    description_i18n: {
      en: "Full-stack Spotify-inspired music streaming web application built with MERN stack, real-time messaging, and an interactive audio player.",
      es: "Aplicación de transmisión de música inspirada en Spotify creada con el stack MERN, mensajería en tiempo real y reproductor interactivo."
    },
    links: [
      { name: "Live Demo", url: "https://spotify-project-bc53.onrender.com", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/SPOTIFY-PROJECT", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-safar-crm",
    title: "Safar CRM — WhatsApp Multi-Agent Inbox",
    illustrationType: "safar-crm",
    category: { en: "Web Apps & CRM", es: "Aplicaciones Web y CRM" },
    description_i18n: {
      en: "Safar CRM: WhatsApp multi-agent inbox, visual flow automations, sales pipelines, and instant customer reply engine for growing businesses.",
      es: "Safar CRM: Bandeja de entrada multiagente de WhatsApp, automatizaciones de flujos y pipelines de ventas."
    },
    links: [
      { name: "Live Demo", url: "https://safar-crm-theta.vercel.app", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/safar-crm", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-invofy",
    title: "Invofy — 1-Tap Digital PDF Invoicing",
    illustrationType: "invofy",
    category: { en: "Web Apps & FinTech", es: "Aplicaciones Web y FinTech" },
    description_i18n: {
      en: "Invofy: 1-Tap digital PDF invoicing, cash vs. UPI collection tracking, and instant WhatsApp receipt delivery for retailers and service providers.",
      es: "Facturación digital en PDF con un toque, seguimiento de cobros en efectivo vs UPI y envío de recibos por WhatsApp."
    },
    links: [
      { name: "Live Demo", url: "https://invofy-kappa.vercel.app", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/invofy", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-safar",
    title: "SAFAR N MANZIL — Travel & Housing Hub",
    illustrationType: "safar",
    category: { en: "Web Platforms", es: "Plataformas Web" },
    description_i18n: {
      en: "SAFAR N MANZIL: Dedicated travel assistance, verified housing listings, and relocation platform for India and Gulf travelers.",
      es: "Plataforma de asistencia de viajes, alojamiento verificado y reubicación para viajeros en India y el Golfo."
    },
    links: [
      { name: "Live Demo", url: "https://safar-rouge.vercel.app", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/safar", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-dohad",
    title: "DOHaD India Web Management & Deployment | PHFI",
    illustrationType: "dohad",
    category: { en: "Web Platforms", es: "Plataformas Web" },
    description_i18n: {
      en: "Managed website content, handled deployment, and connected the official web platform to organization accounts using Next.js, Vercel, MongoDB, and Cloudinary.",
      es: "Gestión de contenido, despliegue y conexión de la plataforma oficial con Next.js, Vercel, MongoDB y Cloudinary."
    },
    links: [
      { name: "Live Portal", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-research-studio",
    title: "Research Data Automation Studio | PHFI",
    illustrationType: "research-data-studio",
    category: { en: "Data Automation", es: "Automatización de Datos" },
    description_i18n: {
      en: "Developed a Python application to help research teams with automated data cleaning, filtering, quality checks, and interactive summary reporting.",
      es: "Aplicación en Python para automatizar la limpieza, filtrado, control de calidad y reportes de datos de investigación."
    },
    links: [
      { name: "Overview", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-aqi",
    title: "Indian Air Quality Prediction Platform",
    illustrationType: "aqi",
    category: { en: "Machine Learning", es: "Aprendizaje Automático" },
    description_i18n: {
      en: "Machine learning Air Quality Index (AQI) prediction platform for Indian cities with Colab models, FastAPI backend, and a responsive web UI.",
      es: "Plataforma de predicción de AQI para ciudades de la India con modelos de Colab, backend en FastAPI y UI web reactiva."
    },
    links: [
      { name: "Live Demo", url: "https://indian-air-quality-prediction.vercel.app", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/Indian-Air-Quality-Prediction", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-terrain",
    title: "Vision-Based Terrain Classification",
    illustrationType: "terrain-vision",
    category: { en: "Machine Learning", es: "Aprendizaje Automático" },
    description_i18n: {
      en: "Computer vision and deep learning terrain classification pipeline (Desert, Forest, Mountain, Plains) using MobileNetV2 with an interactive Streamlit inference app.",
      es: "Pipeline de clasificación de terreno por visión artificial con aplicación interactiva en tiempo real en Streamlit."
    },
    links: [
      { name: "Live Demo", url: "https://vision-based-terrain-classification-bfzfgwhcu8npbf6lyipfyh.streamlit.app/", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/Vision-Based-Terrain-Classification", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-segmentation",
    title: "Customer Segmentation Analytics",
    illustrationType: "customer-segmentation",
    category: { en: "Machine Learning", es: "Aprendizaje Automático" },
    description_i18n: {
      en: "Unsupervised machine learning customer segmentation: K-Means clustering, PCA dimensionality reduction, and an interactive Streamlit analytics app.",
      es: "Segmentación de clientes con K-Means, reducción de dimensionalidad PCA y aplicación analítica interactiva en Streamlit."
    },
    links: [
      { name: "Live Demo", url: "https://customer-segmentation-efb7gqwwg2sqdzpymxxbz5.streamlit.app/", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/customer-segmentation", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-nlp",
    title: "NLP Review Intelligence System",
    illustrationType: "nlp-review",
    category: { en: "Machine Learning", es: "Aprendizaje Automático" },
    description_i18n: {
      en: "End-to-end NLP review analytics: DistilBERT sentiment classification and BERTopic clustering on 500K customer reviews with Streamlit.",
      es: "Analítica de reseñas con DistilBERT y agrupamiento BERTopic en 500K reseñas de clientes con Streamlit."
    },
    links: [
      { name: "Live Demo", url: "https://nlp-review-intelligence-l4vsrtkyi828h8s2dyjxhr.streamlit.app/", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/nlp-review-intelligence", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  },
  {
    id: "project-repcount",
    title: "RepCount — Gym Membership & Dues CRM",
    illustrationType: "repcount",
    category: { en: "Web Apps & CRM", es: "Aplicaciones Web y CRM" },
    description_i18n: {
      en: "RepCount: Mobile-first gym membership CRM, fee recovery, member attendance, and WhatsApp dues reminders for fitness centers.",
      es: "RepCount: CRM para membresías de gimnasio, recuperación de cuotas, asistencia y recordatorios de pago por WhatsApp."
    },
    links: [
      { name: "Live Demo", url: "https://e-repcount-gym-payment-manager.vercel.app", icon: <AiFillEye/> },
      { name: "GitHub", url: "https://github.com/MuhammadMinhaj229/e-repcount-gym-payment-manager", icon: <AiFillGithub/> }
    ],
    target: "_blank"
  }
];

export default projectConfig;

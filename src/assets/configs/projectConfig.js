import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from 'react';

const projectConfig = [
  {
    id: "project-1",
    title: "DOHaD India Website Management & Deployment | PHFI",
    category: { en: "Web Development & Management", es: "Desarrollo Web y Gestión" },
    description_i18n: {
      en: "Managed website content, handled deployment, and connected the official website to the organization's accounts. Set up GitHub, Vercel, MongoDB, and Cloudinary for smooth updates and management.",
      es: "Gestión de contenido web, despliegue y conexión del sitio oficial a las cuentas de la organización. Configuración de GitHub, Vercel, MongoDB y Cloudinary."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-2",
    title: "Research Data Automation Studio | PHFI",
    category: { en: "Data Automation & Tools", es: "Automatización de Datos y Herramientas" },
    description_i18n: {
      en: "Developed a Python-based application to help researchers with data cleaning, filtering, quality checks, and visualization. Packaged for team use and deployed live.",
      es: "Desarrollo de una aplicación en Python para limpieza, filtrado, control de calidad y visualización de datos de investigación."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Indian Air Quality Prediction & Advisory",
    category: { en: "Data Analytics & Dashboards", es: "Análisis de Datos y Tableros" },
    description_i18n: {
      en: "Built an interactive dashboard tracking real-time air pollution across 15 Indian cities, predicting Air Quality Index (AQI) values to share helpful health advisories.",
      es: "Tablero interactivo para rastrear la contaminación del aire en tiempo real en 15 ciudades de la India y predecir el índice de calidad del aire (AQI)."
    },
    links: [
      { name: "demo", url: "https://indian-air-quality-prediction.vercel.app", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229/indian-air-quality-prediction", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-4",
    title: "Vision-Based Terrain Classification",
    category: { en: "Computer Vision & AI", es: "Visión por Computador e IA" },
    description_i18n: {
      en: "Led an academic team project to classify terrain types (Desert, Forest, Mountain, Plains) from images using MobileNetV2, designed to run smoothly on small devices like drones or rovers.",
      es: "Proyecto de equipo académico para clasificar tipos de terreno a partir de imágenes usando MobileNetV2, diseñado para funcionar en dispositivos pequeños."
    },
    links: [
      { name: "demo", url: "https://vision-based-terrain-classification-bfzfgwhcu8npbf6lyipfyh.streamlit.app/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229/vision-based-terrain-classification", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-5",
    title: "Customer Segmentation & Churn Prediction",
    category: { en: "Machine Learning & Data", es: "Aprendizaje Automático y Datos" },
    description_i18n: {
      en: "Analyzed customer purchasing habits to group similar customers together and built an AI model to predict when a customer might stop buying, helping businesses retain customers.",
      es: "Análisis de hábitos de compra para agrupar clientes y modelo de IA para predecir cuándo un cliente podría dejar de comprar."
    },
    links: [
      { name: "demo", url: "https://customer-segmentation-efb7gqwwg2sqdzpymxxbz5.streamlit.app/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229/customer-segmentation", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-6",
    title: "NLP Review Intelligence & Aspect Mining",
    category: { en: "Natural Language Processing", es: "Procesamiento de Lenguaje Natural" },
    description_i18n: {
      en: "Built a sentiment and keyword analysis app to review customer feedback, identify recurring issues, and extract actionable insights for product improvement.",
      es: "Herramienta de análisis de sentimientos y palabras clave para analizar comentarios de clientes y extraer información práctica."
    },
    links: [
      { name: "demo", url: "https://nlp-review-intelligence-l4vsrtkyi828h8s2dyjxhr.streamlit.app/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229/nlp-review-intelligence", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  }
];

export default projectConfig;

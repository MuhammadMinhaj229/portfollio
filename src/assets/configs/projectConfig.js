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
    title: "Vision-Based Terrain Classification",
    category: { en: "Computer Vision & AI", es: "Visión por Computador e IA" },
    description_i18n: {
      en: "Led an academic team project to classify terrain types (Desert, Forest, Mountain, Plains) from images using MobileNetV2, designed to run smoothly on small devices like drones or rovers.",
      es: "Proyecto de equipo académico para clasificar tipos de terreno a partir de imágenes usando MobileNetV2, diseñado para funcionar en dispositivos pequeños."
    },
    links: [
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-4",
    title: "DT Interiors Web & Showcase Platform",
    category: { en: "Web Development", es: "Desarrollo Web" },
    description_i18n: {
      en: "Designed and built a modern showcase website for DT Interiors to highlight interior design work and make it simple for potential clients to get in touch.",
      es: "Sitio web moderno para DT Interiors para mostrar proyectos de diseño de interiores y facilitar el contacto con nuevos clientes."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-5",
    title: "SAFA Foods E-Commerce & Growth Funnel",
    category: { en: "Web Development & E-Commerce", es: "Desarrollo Web y E-Commerce" },
    description_i18n: {
      en: "Created a mobile-friendly online store and ordering flow for SAFA Foods (SAFA Fresh), connecting customer orders directly to WhatsApp.",
      es: "Tienda en línea optimizada para móviles para SAFA Foods, conectando pedidos de clientes directamente a WhatsApp."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-6",
    title: "Sumera Collections Growth Platform",
    category: { en: "Web Development", es: "Desarrollo Web" },
    description_i18n: {
      en: "Built a clean online product showcase for Sumera Collections to display fashion items and collect customer inquiries automatically.",
      es: "Plataforma web para Sumera Collections para exhibir productos de moda y recibir consultas de clientes automáticamente."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-7",
    title: "Customer Segmentation & Churn Prediction",
    category: { en: "Machine Learning & Data", es: "Aprendizaje Automático y Datos" },
    description_i18n: {
      en: "Analyzed customer purchasing habits to group similar customers together and built an AI model to predict when a customer might stop buying, helping businesses retain customers.",
      es: "Análisis de hábitos de compra para agrupar clientes y modelo de IA para predecir cuándo un cliente podría dejar de comprar."
    },
    links: [
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-8",
    title: "Indian Air Quality Prediction & Advisory",
    category: { en: "Data Analytics & Dashboards", es: "Análisis de Datos y Tableros" },
    description_i18n: {
      en: "Built an interactive dashboard tracking real-time air pollution across 15 Indian cities, predicting Air Quality Index (AQI) values to share helpful health advisories.",
      es: "Tablero interactivo para rastrear la contaminación del aire en tiempo real en 15 ciudades de la India y predecir el índice de calidad del aire (AQI)."
    },
    links: [
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  }
];

export default projectConfig;

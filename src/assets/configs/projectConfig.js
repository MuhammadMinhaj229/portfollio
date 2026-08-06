import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from 'react';

const projectConfig = [
  {
    id: "project-1",
    title: "DT Interiors Web & Showcase Platform",
    category: { en: "Web Development & UI/UX", es: "Desarrollo Web y UI/UX" },
    description_i18n: {
      en: "Architected a responsive, high-performance landing page and customer showcase for DT Interiors. Powered by modern interactive UI components, dynamic visual styling, and seamless client conversion workflows.",
      es: "Plataforma web de alto rendimiento para DT Interiors. Con componentes interactivos modernos, estilo visual dinámico y flujos de conversión fluidos."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-2",
    title: "SAFA Foods E-Commerce & Growth Funnel",
    category: { en: "Web Development & Funnels", es: "Desarrollo Web y Embudos" },
    description_i18n: {
      en: "Engineered a responsive web engine and digital marketing sales funnel for SAFA Foods (SAFA Fresh). Implemented fast checkout pathways, mobile-optimized browsing, and automated customer communication pipelines.",
      es: "Motor web y embudo digital para SAFA Foods. Navegación optimizada para móviles y tuberías de comunicación automatizada con clientes."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Sumera Collections Automated Growth Platform",
    category: { en: "Web Development & E-Commerce", es: "Desarrollo Web y E-Commerce" },
    description_i18n: {
      en: "Developed a tailored web presence and automated client acquisition pipeline for Sumera Collections. Features modern design aesthetics, intuitive product showcases, and automated inquiry routing.",
      es: "Plataforma web y canalización de adquisición de clientes para Sumera Collections con estética moderna y enrutamiento automático de consultas."
    },
    links: [
      { name: "demo", url: "https://www.linkedin.com/in/muhammadminhaj229/", icon: <AiFillEye/> },
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-4",
    title: "Customer Segmentation & Churn Prediction",
    category: { en: "Explainable AI & ML", es: "IA Explicable y ML" },
    description_i18n: {
      en: "Behavioral segmentation via 5 RFM clusters and XGBoost churn modeling. Corrected class imbalance with SMOTE (minority recall up to 81%) and integrated SHAP values to explain predictive scores into actionable business intervention reasons.",
      es: "Segmentación conductual RFM (5 clústeres) y modelo XGBoost para deserción. Corrección de desequilibrio con SMOTE e integración de valores SHAP para transformar puntuaciones en decisiones comerciales medibles."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-5",
    title: "Vision-Based Terrain Classification",
    category: { en: "Computer Vision & Edge AI", es: "Visión por Computador e IA de Borde" },
    description_i18n: {
      en: "Deep learning terrain classification (Desert, Forest, Mountain, Plains) using lightweight MobileNetV2 architecture tailored for constrained edge AI hardware on exploratory rovers and drones. Integrated with an interactive Streamlit diagnostic frontend.",
      es: "Clasificación de terreno mediante aprendizaje profundo (Desierto, Bosque, Montaña, Llanura) utilizando arquitectura ligera MobileNetV2 optimizada para hardware con recursos limitados como drones y rovers."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-6",
    title: "Time Series Demand Forecasting Pipeline",
    category: { en: "Predictive Analytics", es: "Analítica Predictiva" },
    description_i18n: {
      en: "Multi-model inventory forecasting benchmarking ARIMA, Prophet, and LightGBM over 3 years of transactional retail data. Served via Dockerized FastAPI with a verified 52% boost in seasonal demand prediction accuracy.",
      es: "Pronóstico de inventario multimodelos (ARIMA, Prophet, LightGBM) en 3 años de datos transaccionales de venta minorista. Servido mediante FastAPI dockerizado con un aumento del 52% en precisión."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-7",
    title: "A/B Testing & Uplift Modeling System",
    category: { en: "Causal Inference & ROI", es: "Inferencia Causal y ROI" },
    description_i18n: {
      en: "Statistical campaign optimization platform implementing CausalML (T-Learner and X-Learner) to isolate persuadable target cohorts, driving a verified 41% increase in direct marketing campaign ROI.",
      es: "Plataforma de optimización de campañas con CausalML (T-Learner y X-Learner) para aislar cohortes persuadibles, logrando un aumento comprobado del 41% en ROI de marketing directo."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-8",
    title: "NLP Review Intelligence System",
    category: { en: "Natural Language Processing", es: "Procesamiento de Lenguaje Natural" },
    description_i18n: {
      en: "Fine-tuned DistilBERT classification pipeline achieving 91.4% test accuracy on 50,000 eCommerce reviews, paired with unsupervised BERTopic extraction to reveal actionable product defects to product teams.",
      es: "Canalización de clasificación con DistilBERT ajustado (91.4% precisión en 50,000 reseñas), emparejado con extracción no supervisada BERTopic para revelar defectos procesables a equipos de producto."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-9",
    title: "End-to-End MLOps Pipeline",
    category: { en: "MLOps & Cloud Infrastructure", es: "MLOps & Infraestructura Cloud" },
    description_i18n: {
      en: "Automated Continuous Training (CT) and Model Serving pipeline using Docker and FastAPI with sub-38ms inference latency. Integrates GitHub Actions CI/CD and weekly statistical data drift alerts via Evidently AI.",
      es: "Canalización automatizada de entrenamiento continuo y servicio de modelos con Docker y FastAPI (latencia sub-38ms). Integra GitHub Actions CI/CD y alertas semanales de deriva con Evidently AI."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  },
  {
    id: "project-10",
    title: "Indian Air Quality Prediction & Advisory",
    category: { en: "Environmental Data Systems", es: "Sistemas Ambientales" },
    description_i18n: {
      en: "Real-time environmental dashboard integrating live OpenAQ REST endpoints across 15 metropolitan Indian cities, utilizing Random Forest regressors to predict multi-pollutant AQI indices and public health advisories.",
      es: "Tablero ambiental en tiempo real integrando APIs OpenAQ en 15 metrópolis indias. Utiliza regresores Random Forest para predecir índices AQI multipolucionantes y generar recommendations para el sector público."
    },
    links: [
      { name: "repo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillGithub/> },
      { name: "demo", url: "https://github.com/MuhammadMinhaj229", icon: <AiFillEye/> }
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    target: "_blank"
  }
];

export default projectConfig;


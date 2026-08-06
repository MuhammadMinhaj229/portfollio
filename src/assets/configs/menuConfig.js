import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      title_i18n: { en: "Home", es: "Inicio" },
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      title_i18n: { en: "Projects", es: "Proyectos" },
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Certifications",
      title_i18n: { en: "Certifications", es: "Certificaciones" },
      path: "/blogs",
      icon: <BsAwardFill size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      title_i18n: { en: "Skills", es: "Habilidades" },
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "Contact",
      title_i18n: { en: "Contact", es: "Contacto" },
      path: "/contact",
      icon: <FaEnvelope size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;

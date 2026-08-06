import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/MuhammadMinhaj229",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/muhammadminhaj229/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "mailto:minhajmuhammad229@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <FaEnvelope size={50}/>
        },
        {
            id: "footer-3",
            url: "https://wa.me/919908597337",
            className: "social-icon",
            target: "_blank",
            icon: <FaWhatsapp size={50}/>
        }
    ]
}

export default footerConfig;

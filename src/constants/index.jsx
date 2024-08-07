import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";


import image1 from "../assets/project1.png";
import image2 from "../assets/project2.jpg";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.jpg";



export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Siddhant Rathi",
  info: "I'm a Full Stack developer with experience in Website development. Check out my projects and skills..",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Siddhant Rathi, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Apple website",
    subtitle:
      "Redeigned the apple website page for iphone 15",
    image: image1,
  },
  {
    title: "Blogging website",
    subtitle:
      "This project is a comprehensive and feature-rich platform for creating, managing, and reading blogs. ",
    image: image2,
  },
  {
    title: "Travel website",
    subtitle: "It is a comprehensive tool designed to help users effortlessly plan their trips. Whether you're organizing a weekend getaway or a long vacation",
    image: image3,
  },
  {
    title: "E-Wallet",
    subtitle:
      " the ultimate e-wallet solution. Seamlessly designed for the modern user, TeraWallet offers a secure, convenient, and efficient way to handle all your financial transactions.",
    image: image4,
  },
  
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
   
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
   
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    
  },
  {
    icon: <FaJava className="text-4xl lg:text-6xl text-orange-700" />,
    name: "Java",
    
  },
  {
    icon: <IoLogoJavascript className="text-4xl lg:text-6xl text-yellow-700" />,
    name: "Javascript",
    
  },
  {
    icon: <SiTypescript className="text-4xl lg:text-6xl text-blue-700" />,
    name: "Typescript",
    
  },
  {
    icon: < FaDocker className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Docker",
    
  }, {
    icon: <FaAws className="text-4xl lg:text-6xl text-orange-700" />,
    name: "Aws",
    
  }, {
    icon: <FaGithub className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Github",
    
  },
];





export const SOCIAL_MEDIA_LINKS = [

 

  {
    href: "https://x.com/Sid20rathi",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Sid20rathi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/siddhantrathi20/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

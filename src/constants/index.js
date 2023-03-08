import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  accenture,
  binmark,
  freelance,
  weather_app,
  geeta,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Binmark IT Consultancy",
    icon: binmark,
    iconBg: "#383E56",
    date: "August 2021 - October 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate software developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "August 2022 - Current",
    points: [
      "Get training on Web Technologies : React js, Node js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancing",
    icon: freelance,
    iconBg: "#383E56",
    date: "Continues",
    points: [
      "Developed many Websites for Businesses.",
      "Websites such as : Real estate websites, Portfolios, Full Stack Ecommerce, Business landing websites and many more  ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Geeta Sharma",
    designation: "CFO",
    company: "Acme Co",
    image: geeta,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Naman",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Pradyumn",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Managment System",
    description:
      "A Hotel Management System built with MERN Stack is a web-based application that allows hotels to manage their day-to-day operations, such as booking management, room allocation, guest information management, and payment processing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mayanksinghms777/Hotel-MKS-Dashboard",
  },
  {
    name: "weather_app",
    description:
      "A weather app built with MERN stack is a web-based application that provides real-time weather data and forecasts for a given location. It allows users to access accurate and up-to-date weather information in a user-friendly format.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/mayanksinghms777/weather_app",
  },
  {
    name: "Company Dashboard",
    description:
      "A company dashboard built with MERN stack is a web-based application that provides a centralized location for a company's data and analytics. It allows companies to monitor and manage their business processes, track performance metrics, and make data-driven decisions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "white-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mayanksinghms777/mks-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };

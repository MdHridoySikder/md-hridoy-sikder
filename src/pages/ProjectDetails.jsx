import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import project1 from "../Photo/project1.png";
import project2 from "../Photo/project2.png";
import project3 from "../Photo/project3.png";
import project4 from "../Photo/project4.png";
import project5 from "../Photo/project5.png";
import project6 from "../Photo/project6.png";

const projectsData = [
  {
    id: 1,
    name: "AssetVerse",
    image: project1,

    description:
      "A full-stack MERN application for managing company assets, employee requests, and approval workflows with role-based dashboards.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "React Query",
      "Axios",
    ],

    live: "https://asset-verse-clint.netlify.app",

    githubRepoFrontend: "https://github.com/MdHridoySikder/asset-verse-client",

    githubRepoBackend: "https://github.com/MdHridoySikder/asset-verse-server",

    features: [
      "Role-based Admin & Employee dashboards",
      "Asset request and approval workflow",
      "Real-time status tracking",
      "Protected routes with Firebase Authentication",
      "Responsive UI for all devices",
    ],

    challenges:
      "Managing secure role-based access and handling dynamic asset request workflows.",

    improvements:
      "Plan to add email notifications, advanced filtering, and analytics dashboard.",
  },

  {
    id: 2,
    name: "EcoTrack",
    image: project2,

    description:
      "A community-driven eco activity tracking platform where users can log eco-friendly activities and monitor sustainability progress.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Tailwind CSS",
      "DaisyUI",
    ],

    live: "https://eco-track-com.netlify.app",

    githubRepoFrontend: "https://github.com/MdHridoySikder/eco-track-client",

    githubRepoBackend: "https://github.com/MdHridoySikder/eco-track-server",

    features: [
      "Daily eco activity logging",
      "Carbon footprint tracking",
      "Challenge participation system",
      "User profile management",
      "Authentication & protected routes",
    ],

    challenges:
      "Handling user activity tracking efficiently and maintaining clean database structure.",

    improvements:
      "Future improvements include leaderboard system and activity insights dashboard.",
  },

  {
    id: 3,
    name: "SkillSSwap",
    image: project3,

    description:
      "A MERN-based skill-sharing platform where users can offer, discover, and book learning sessions locally.",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
    ],

    live: "https://my-assignment-no-09.netlify.app",

    githubRepoFrontend: "https://github.com/MdHridoySikder/my-assignment-no-09",

    features: [
      "Browse different skill listings",
      "Book skill-sharing sessions",
      "Authentication system",
      "Protected private routes",
      "Modern responsive design",
    ],

    challenges:
      "Managing authentication flow and handling dynamic user interactions.",

    improvements:
      "Planning to add real-time messaging and booking management system.",
  },
  {
    id: 4,
    name: "Hero.io",
    image: project4,

    description:
      "A responsive web application built with React focusing on dynamic UI and smooth user experience for modern web interaction.",

    tech: ["React", "JavaScript", "HTML5", "Tailwind CSS"],

    live: "https://hero-gaming-apps.netlify.app",

    githubRepo: "https://github.com/MdHridoySikder/hero-apps.git",

    features: [
      "Modern responsive UI design",
      "Component-based architecture",
      "Interactive user interface",
      "Optimized page layout with Tailwind CSS",
    ],

    challenges:
      "Managing component structure and maintaining clean UI consistency across pages.",

    improvements:
      "Plan to add backend integration and advanced state management.",
  },
  {
    id: 5,
    name: "CS – Ticket System",
    image: project5,

    description:
      "A simple ticket management web application for handling support requests and tracking user submissions efficiently.",

    tech: ["JavaScript", "HTML5", "Tailwind CSS"],

    live: "https://assignment0777.netlify.app",

    githubRepo: "https://github.com/MdHridoySikder/my-assignment-no-7.git",

    features: [
      "Ticket creation interface",
      "User-friendly dashboard layout",
      "Status tracking UI",
      "Responsive design",
    ],

    challenges: "Handling UI state updates and maintaining structured layout.",

    improvements: "Future plan: add backend API and authentication system.",
  },
  {
    id: 6,
    name: "Green Earth",

    image: project6,

    description:
      "A static eco-awareness website designed to promote environmental sustainability and awareness content.",

    tech: ["JavaScript", "HTML5", "Tailwind CSS"],

    live: "https://green-earth-demo.netlify.app",

    githubRepo: "https://github.com/MdHridoySikder/my-assignment-no-06.git",

    features: [
      "Eco awareness content sections",
      "Responsive landing page",
      "Clean UI design",
      "Fast loading static site",
    ],

    challenges: "Creating structured layout using only HTML and Tailwind CSS.",

    improvements: "Convert into React-based dynamic application in future.",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-20 max-w-4xl"
    >
      <Link
        to="/"
        className="btn btn-ghost mb-8 gap-2 text-[var(--primary-teal)] hover:bg-teal-50 dark:hover:bg-slate-800"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="card bg-white dark:bg-slate-800 shadow-2xl overflow-hidden border border-gray-100 dark:border-white/5 rounded-[2rem]">
        <figure className="h-96">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-10">
          <h2 className="card-title text-4xl font-bold mb-6 text-[var(--primary-teal)]">
            {project.name}
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="badge border-[var(--accent-teal)] text-[var(--accent-teal)] bg-transparent font-semibold px-4 py-3"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="p-6 bg-teal-50/50 dark:bg-slate-700/30 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary-teal)]">
                Challenges
              </h3>
              <p className="opacity-80 leading-relaxed dark:text-slate-300">
                {project.challenges}
              </p>
            </div>
            <div className="p-6 bg-teal-50/50 dark:bg-slate-700/30 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary-teal)]">
                Improvements
              </h3>
              <p className="opacity-80 leading-relaxed dark:text-slate-300">
                {project.improvements}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn bg-[var(--primary-teal)] text-white hover:opacity-90 border-none px-8 rounded-full shadow-lg shadow-gray-200/50"
            >
              <FaExternalLinkAlt className="mr-2" /> Live
            </a>
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline border-[var(--accent-teal)] text-[var(--accent-teal)] hover:bg-[var(--accent-teal)] hover:text-white px-8 rounded-full"
            >
              <FaGithub className="mr-2" /> GitHub Client
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
export { projectsData };

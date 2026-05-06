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
    name: "1. AssetVerse",
    image: project1,
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://asset-verse-clint.netlify.app",
    githubRepo: "https://github.com/MdHridoySikder/asset-verse.git",
    challenges: "Implementing complex animations and ensuring modularity.",
    improvements:
      "Optimization of asset loading and enhanced accessibility features.",
  },
  {
    id: 2,
    name: "2. EcoTrack",
    image: project2,
    tech: ["Node.js", "Express", "MongoDB"],
    live: "https://eco-track-com.netlify.app",
    githubRepo: "https://github.com/MdHridoySikder/eco-track.git",
    challenges: "Managing real-time data sync across multiple clients.",
    improvements: "Upgraded socket implementation for better performance.",
  },
  {
    id: 3,
    name: "3. SkillSSwap",
    image: project3,
    tech: ["Next.js", "TypeScript", "Prisma"],
    live: "https://my-assignment-no-09.netlify.app",
    githubRepo: "https://github.com/MdHridoySikder/my-assignment-no-09.git",
    challenges: "Complex state management and server-side rendering logic.",
    improvements: "Better caching mechanisms and database indexing.",
  },
  {
    id: 4,
    name: "4. Hero.io",
    image: project4,
    tech: ["Next.js", "TypeScript", "Prisma"],
    live: "https://hero-gaming-apps.netlify.app",
    githubRepo: "https://github.com/MdHridoySikder/hero-apps.git",
    challenges: "Complex state management and server-side rendering logic.",
    improvements: "Better caching mechanisms and database indexing.",
  },
  {
    id: 5,
    name: "5. CS – Ticket System",
    image: project5,
    tech: ["Next.js", "TypeScript", "Prisma"],
    live: "https://assignment0777.netlify.app",
    githubRepo: "https://github.com/MdHridoySikder/my-assignment-no-7.git",
    challenges: "Complex state management and server-side rendering logic.",
    improvements: "Better caching mechanisms and database indexing.",
  },
  {
    id: 6,
    name: "6. Green Earth",
    image: project6,
    tech: ["Next.js", "TypeScript", "Prisma"],
    live: "file:///C:/All-Assignment/my-assignment-no-06/index.html",
    githubRepo: "https://github.com/MdHridoySikder/my-assignment-no-06.git",
    challenges: "Complex state management and server-side rendering logic.",
    improvements: "Better caching mechanisms and database indexing.",
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

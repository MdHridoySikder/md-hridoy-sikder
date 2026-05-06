import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../pages/ProjectDetails";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-py bg-base-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            04. Creation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-base-200/50 rounded-[2.5rem] overflow-hidden border border-white/5 transition-all hover:bg-base-200 hover:shadow-2xl h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden m-4 rounded-[2rem]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Link
                    to={`/project/${project.id}`}
                    className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider border border-primary/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-base-content/60 leading-relaxed italic line-clamp-2 mb-8">
                  {project.challenges}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <Link
                    to={`/project/${project.id}`}
                    className="text-xs font-black text-primary hover:tracking-widest transition-all uppercase flex items-center gap-2"
                  >
                    View Details <ArrowUpRight size={14} />
                  </Link>
                  <div className="flex gap-4">
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content/40 hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content/40 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Database,
  Github,
  Terminal,
  Figma,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    skills: [
      { name: "React 19", level: 95 },
      { name: "Next.js 15", level: 85 },
      { name: "Tailwind CSS", level: 98 },
      { name: " JavaScript (ES6+)", level: 90 },
      { name: "Framer Motion", level: 92 },
      { name: "Daisy UI", level: 80 },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Express.js", level: 80 },

      { name: "REST API", level: 82 },
      { name: "Firebase", level: 88 },

      { name: "JWT Authentication", level: 80 },
    ],
  },
  {
    title: "Tools & Ecosystem",
    icon: Cpu,
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 90 },

      { name: "Responsive Design", level: 85 },
      { name: "Figma (UI/UX)", level: 75 },
    ],
  },
];

const SkillBar = ({ skill, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center px-1">
        <span className="text-sm font-bold opacity-80 uppercase tracking-tighter">
          {skill.name}
        </span>
        <span className="text-xs font-black text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-base-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-primary rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-py relative bg-base-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            02. Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-base-200/50 p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-sm group hover:bg-base-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <cat.icon size={28} />
              </div>
              <h3 className="text-xl font-black mb-10 tracking-tight">
                {cat.title}
              </h3>
              <div className="space-y-8">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.2 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

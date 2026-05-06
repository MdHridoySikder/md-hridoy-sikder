import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const education = [
  {
    title: "B.B.S. (Bachelor of Business Studies)",
    place: "Uttar Kattali Al-Haj Mostata Hakim College, Chittagong",
    period: "2022 – 2028",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    place: "Dr. Fazlul Hazera Degree College, Chittagong",
    period: "2021 – 2023",
  },
];

const experience = [
  {
    title: "Fullstack Web Development Student",
    place: "Programming Hero (6-Month Course)",
    period: "2025",
    desc: "Completed a 6-month intensive course on modern web development, including HTML, CSS, JavaScript, and project-based learning.",
  },
];

const TimelineCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="relative pl-10 pb-12 last:pb-0 group"
  >
    {/* Dot */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-base-100 border-4 border-primary z-10 group-hover:scale-125 transition-transform" />

    {/* Line */}
    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-base-300 dark:bg-slate-800 group-last:hidden" />

    <div className="bg-base-100 p-8 rounded-[2rem] border border-white/5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <span className="text-primary text-xs font-black uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">
          {item.period}
        </span>
        <div className="flex items-center gap-2 text-base-content/40 text-xs font-bold">
          <MapPin size={12} /> {item.place.split(",")[1] || "Bangladesh"}
        </div>
      </div>
      <h4 className="text-xl font-black mb-2 text-foreground">{item.title}</h4>
      <p className="text-primary text-sm font-bold mb-4">{item.place}</p>
      <p className="text-sm text-base-content/60 leading-relaxed italic">
        {item.desc}
      </p>
    </div>
  </motion.div>
);

const EducationExperience = () => {
  return (
    <section id="education" className="section-py bg-base-200/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            03. Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Education & Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Education Side */}
          <div className="space-y-12">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Education
              </h3>
            </div>
            <div className="relative">
              {education.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Experience Side */}
          <div className="space-y-12">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Experience
              </h3>
            </div>
            <div className="relative">
              {experience.map((item, i) => (
                <TimelineCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;

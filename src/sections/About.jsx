import React from "react";
import { motion } from "framer-motion";
import about from "../Photo/about.png";
import {
  Code2,
  Coffee,
  Gamepad2,
  BookOpen,
  Briefcase,
  FolderKanban,
  Users,
  Award,
} from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code Advocate" },
  { icon: Coffee, label: "Fueled by Coffee" },
  { icon: Gamepad2, label: "Gamer at Heart" },
  { icon: BookOpen, label: "Lifelong Learner" },
];

const stats = [{ icon: FolderKanban, value: "15+", label: "Projects" }];

const About = () => {
  return (
    <section id="about" className="section-py bg-base-200/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">
            01. Discovery
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-primary/20">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-base-100 shadow-xl">
                  <img
                    src={about}
                    alt="Md Hridoy Sikder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-1">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  index={i}
                  whileHover={{ y: -5 }}
                  className="bg-base-100 p-6 rounded-3xl border border-white/5 shadow-sm text-center group transition-all hover:shadow-xl"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-black text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-base-content/50 font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-3xl font-black">Design Meets Performance.</h3>
              <p className="text-base-content/70 leading-relaxed text-lg italic">
                I'm{" "}
                <span className="text-foreground font-bold">
                  I'm Md Hridoy Sikder
                </span>
                , a skilled Fullstack Web Developer based in Bangladesh. I
                specialize in turning complex logic into elegant, user-friendly
                web experiences.
              </p>
              <p className="text-base-content/60 leading-relaxed">
                My mission is to build digital products that are not only
                visually stunning, but also fast, scalable, and accessible. I
                bridge the gap between creative design and robust technology to
                deliver modern web solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-base-100 rounded-2xl border border-white/5 shadow-sm group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm font-bold text-base-content/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

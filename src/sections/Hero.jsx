import React from "react";
import { motion } from "framer-motion";
import hero from "../Photo/hero.png";
import resumePDF from "../Photo/resume_of_md_hridoy_sikder_fsd.pdf";
import {
  Download,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/MdHridoySikder", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-hridoy-sikder-1216753b4",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1FojDpo6wZ/",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://x.com/@MSikder31328",
    label: "Twitter",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-py relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full inline-block">
                Welcome to my portfolio
              </h2>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-primary">Md Hridoy Sikder</span>
            </h1>

            <p className="text-lg md:text-xl text-base-content/60 max-w-lg mb-10 leading-relaxed italic">
              Turning Ideas Into Stunning Websites. I craft fast, responsive,
              and visually striking web experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              <a
                href="#contact"
                className="btn btn-primary btn-lg rounded-full px-10 gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Let's Talk <ArrowRight size={20} />
              </a>
              <button className="btn btn-outline btn-lg rounded-full px-10 gap-2 hover:bg-primary/10 transition-all border-2">
                <a
                  href={resumePDF}
                  download
                  className="flex items-center gap-2"
                >
                  <Download size={20} /> Resume
                </a>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-base-content/60 hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer glow rings */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[12px] border-base-100 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={hero}
                  alt="Md Hridoy Sikder"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Float Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-base-100 p-4 rounded-2xl shadow-xl z-20 border border-white/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <Code size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tighter opacity-50"></p>
                    <p className="text-sm font-black">React.js</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Code = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Hero;

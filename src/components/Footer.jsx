import React from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { VscGithubProject } from "react-icons/vsc";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#education", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: VscGithubProject },
];

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

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-20">
      <div className="section-container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left: Brand */}
        <div className="space-y-4">
          <div className="text-4xl font-black bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent inline-block">
            H
          </div>
          <p className="text-base-content/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Turning Ideas Into Stunning Websites. I craft fast, responsive, and
            visually striking web experiences.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center justify-center md:justify-start gap-3 text-sm text-base-content/60 hover:text-primary transition-colors group"
                >
                  <item.icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Socials */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold">Connect With Me</h4>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base-content/60 hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group"
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
          <p className="text-xs text-base-content/40 pt-4">
            © {new Date().getFullYear()} Md Hridoy Sikder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

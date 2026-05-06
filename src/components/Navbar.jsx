import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { VscGithubProject } from "react-icons/vsc";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#education", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: VscGithubProject },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isDark = theme === "dark";


  // Handle mobile menu scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Handle window resize to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = navItems.map((item) => item.href.slice(1));
        for (const section of [...sections].reverse()) {
          const el = document.getElementById(section);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActive(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetHash = href.startsWith("#") ? href : `#${href}`;
    
    // Professional hash navigation using React Router navigate
    if (!isHomePage) {
      navigate(`/${targetHash}`);
    } else {
      navigate(targetHash);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b",
        scrolled || isOpen
          ? "bg-base-100/80 backdrop-blur-xl border-white/10 shadow-lg" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Left: Logo */}
        <RouterLink 
          to="/" 
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-3xl font-black bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform relative z-[110]"
        >
          H
        </RouterLink>

        {/* Center: Desktop NavLinks */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-black/5 rounded-full px-4 py-2 border border-white/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative group",
                active === item.href.slice(1) && isHomePage 
                  ? "text-primary font-bold" 
                  : "text-base-content/60 hover:text-primary"
              )}
            >
              <item.icon size={16} />
              {item.label}
              {active === item.href.slice(1) && isHomePage && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: Theme & Toggle actions */}
        <div className="flex items-center gap-4 relative z-[110]">
          <button 
            onClick={toggleTheme}
            className="w-12 h-6 rounded-full bg-base-300 dark:bg-slate-700 relative transition-colors duration-500 flex items-center px-1 group"
            aria-label="Toggle Theme"
          >
            <motion.div 
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"
            >
              {isDark ? <Moon size={10} className="text-slate-800" /> : <Sun size={10} className="text-amber-500" />}
            </motion.div>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex items-center justify-center text-primary p-2 hover:bg-primary/10 rounded-xl transition-all active:scale-95"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-base-100/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center gap-4 py-4 px-6 text-lg font-bold transition-all rounded-2xl",
                    active === item.href.slice(1) && isHomePage 
                      ? "bg-primary/10 text-primary" 
                      : "text-base-content/60 hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <item.icon size={22} />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;

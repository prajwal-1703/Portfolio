import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import SocialIcon from "./SocialIcon";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 border border-accent rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="relative z-10 section-container text-center">
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-full mb-8"
        >
          <Terminal size={16} className="text-accent" />
          <span className="font-mono text-sm text-muted-foreground">
            Available for opportunities
          </span>
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="min-h-[2rem] mb-8"
        >
          <p className="font-mono text-lg md:text-xl text-muted-foreground">
            {displayText}
            <span className="terminal-cursor" />
          </p>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground mb-8"
        >
          📍 {personalInfo.location}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="p-3 bg-secondary hover:bg-secondary/80 border border-border hover:border-accent/50 rounded-lg transition-all duration-300 hover:-translate-y-1"
              aria-label={link.platform}
            >
              <SocialIcon name={link.icon} size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-foreground text-background font-mono font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-border font-mono font-medium rounded-lg hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-mono text-xs">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

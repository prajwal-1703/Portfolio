import { personalInfo, socialLinks } from "@/data/portfolioData";
import SocialIcon from "./SocialIcon";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono font-bold text-lg tracking-tight">
            <span className="text-accent">&lt;</span>
            {personalInfo.name.split(" ")[0]}
            <span className="text-accent">/&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.platform}
              >
                <SocialIcon name={link.icon} size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-accent" /> by{" "}
            {personalInfo.name.split(" ")[0]} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Twitter, Mail, Globe, ExternalLink } from "lucide-react";

interface SocialIconProps {
  name: string;
  size?: number;
  className?: string;
}

const SocialIcon = ({ name, size = 20, className = "" }: SocialIconProps) => {
  const iconMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
    globe: Globe,
    external: ExternalLink,
  };

  const Icon = iconMap[name.toLowerCase()] || Globe;
  return <Icon size={size} className={className} />;
};

export default SocialIcon;

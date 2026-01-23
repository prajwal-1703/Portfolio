// ============================================================================
// PORTFOLIO DATA CONFIGURATION
// ============================================================================
// Update this file to change your portfolio content.
// All sections will automatically sync with your changes.
// ============================================================================

export interface PersonalInfo {
  name: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  profileImage?: string;
  resume?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  videoUrl?: string;
  featured?: boolean;
  date: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon?: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  platform: 'devto' | 'medium' | 'hashnode' | 'other';
  url: string;
  description?: string;
  date?: string;
  coverImage?: string;
}

export interface FeaturedPost {
  platform: 'linkedin' | 'twitter' | 'other';
  content: string;
  url: string;
  date?: string;
  engagement?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  graduationDate: string;
}

// ============================================================================
// YOUR DATA - EDIT BELOW
// ============================================================================

export const personalInfo: PersonalInfo = {
  name: "Prajwal Athare",
  tagline: "DevOps Engineer | Cybersecurity Enthusiast | Web3 Builder",
  summary: "Aspiring DevOps Engineer with a strong foundation in Linux, Cloud Computing, and Automation. Technically curious and committed to ownership of outcomes in high-velocity engineering environments. Proficient in building reliable CI/CD pipelines, orchestrating microservices, and managing Infrastructure-as-Code (IaC). Eager to apply analytical skills to solve high-impact engineering problems.",
  email: "atharep1703@gmail.com",
  phone: "+91-9922047771",
  location: "Pune, Maharashtra, India",
  profileImage: "/mu.jpg", // Add your profile image path here
  resume: undefined, // Add your resume PDF path here
};

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/prajwal-1703", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/prajwal-athare-a4074628a/", icon: "linkedin" },
  { platform: "Twitter/X", url: "https://x.com/deva_1703", icon: "twitter" },
  { platform: "Email", url: "mailto:atharep1703@gmail.com", icon: "mail" },
];

export const skills: Skill[] = [
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "GitHub Actions"],
  },
  {
    category: "Scripting & Code",
    items: ["Python", "Shell Scripting", "Bash", "C++", "Node.js", "Solidity"],
  },
  {
    category: "Security Tools",
    items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "SonarQube", "Trivy", "OWASP ZAP"],
  },
  {
    category: "Databases & OS",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Linux", "Kali Linux", "Ubuntu", "Windows Server"],
  },
];

export const projects: Project[] = [
  {
    title: "End-to-End DevSecOps Pipeline",
    description: "Architected a self-hosted CI/CD pipeline for automated deployments using Jenkins and Docker, mirroring real-world production workflows. Integrated automated security gates (SonarQube, Trivy) to identify vulnerabilities early. Implemented GitOps principles to automatically update a Kubernetes cluster.",
    techStack: ["Jenkins", "Kubernetes", "Docker", "SonarQube", "Trivy", "GitOps"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: true,
    date: "Dec 2025",
  },
  {
    title: "Private Cloud Backup Server",
    description: "Deployed a self-hosted file synchronization system using Syncthing within Docker containers to automate real-time backups. Implemented Tailscale for secure, zero-trust mesh network, enabling encrypted data transfer across subnets.",
    techStack: ["Docker", "Syncthing", "Tailscale", "Linux"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: true,
    date: "May 2025",
  },
  {
    title: "BlockSource: Code to Crypto",
    description: "Built a decentralized application integrating GitHub OAuth, demonstrating strong backend API integration skills. Winner of the Blockchain Domain-Specific Prize at The Convene 25 (National Level).",
    techStack: ["Web3", "Solidity", "MetaMask", "Next.js"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: true,
    date: "Jan 2025",
  },
];

export const experiences: Experience[] = [
  {
    title: "Blockchain Project Intern (Mentorship)",
    company: "DAppWorld",
    location: "Pune, India",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: [
      "Collaborated on the development of a DAO-based decentralized platform using Solidity and Next.js",
      "Implemented Git workflows for version control and participated in rigorous code reviews",
      "Assisted in the deployment and automated testing of smart contracts on Ethereum testnets",
    ],
    techStack: ["Solidity", "Next.js", "Git", "Ethereum"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "Winner - Blockchain Domain Prize",
    description: "The Convene 25, IEEE Pune Section & Sinhgad Institute",
    date: "2025",
    icon: "trophy",
  },
  {
    title: "Copyright Registered",
    description: "American Sign Language Detection project using MediaPipe & OpenCV",
    date: "2025",
    icon: "award",
  },
  {
    title: "Learn Linux and Shell Scripting",
    description: "Course Completed - From Basic To Advanced (Udemy)",
    date: "2023",
    icon: "certificate",
  },
  {
    title: "Ethereum 101",
    description: "Course Completed - Dapp-world",
    date: "2025",
    icon: "certificate",
  },
];

export const blogPosts: BlogPost[] = [
  // Add your blog posts here
  // Example:
  // {
  //   title: "Getting Started with Kubernetes",
  //   platform: "devto",
  //   url: "https://dev.to/prajwalathare/kubernetes-intro",
  //   description: "A beginner's guide to container orchestration",
  //   date: "2025-01-15",
  // },

   {
    title: "Build Your Own Private Cloud in 5 Minutes with Docker, Syncthing & Tailscale ☁️🔒",
    platform: "devto",
    url: "https://dev.to/prajwal_ee759ffa925a7429e/build-your-own-private-cloud-in-5-minutes-with-docker-syncthing-tailscale-d4b",
    description: "A beginner's guide to container orchestration",
    date: "2026-01-07",
  },
  
];

export const featuredPosts: FeaturedPost[] = [
  // Add your featured social posts here
  // Example:
  // {
  //   platform: "linkedin",
  //   content: "Excited to share that I won the Blockchain Domain Prize at The Convene 25!",
  //   url: "https://linkedin.com/posts/...",
  //   date: "2025-01-20",
  //   engagement: "500+ reactions",
  // },

   {
    platform: "linkedin",
    content: "Excited to share that I won the Blockchain Domain Prize at The Convene 25!",
    url: "https://www.linkedin.com/posts/prajwal-athare-a4074628a_blockchain-web3-dapp-activity-7318930128883924992-9m1-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEY7plABxRlmqTvC8yWceynoBkEnGEtnpyQ",
    date: "2025-01-20",
    engagement: "500+ reactions",
  },
];

export const education: Education = {
  institution: "International Institute of Information Technology",
  degree: "Bachelor of Engineering",
  field: "Computer Engineering",
  location: "Pune, Maharashtra",
  graduationDate: "Expected May 2027",
};

// Navigation items
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

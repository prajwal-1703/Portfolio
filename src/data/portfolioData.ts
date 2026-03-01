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
  tagline: "DevOps & Cloud Engineer | AWS Automation | DevSecOps",
  summary: "DevOps-focused Cloud Engineer skilled in AWS automation, cost optimization, and production-grade CI/CD pipelines. Experienced in building self-healing infrastructure, proactive monitoring systems, and DevSecOps workflows that improve reliability, security, and cloud efficiency.",
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
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Nginx", "Tailscale", "Git", "GitHub"],
  },
  {
    category: "AWS Cloud Services",
    items: ["EC2", "Lambda", "S3", "CloudWatch", "IAM", "VPC", "Route53"],
  },
  {
    category: "Languages & Frameworks",
    items: ["Python", "Node.js", "React.js", "Express.js", "Solidity", "C++", "Bash"],
  },
  {
    category: "Security Tools",
    items: ["SonarQube", "Trivy", "OWASP ZAP", "Burp Suite", "Nmap", "Wireshark", "Metasploit"],
  },
  {
    category: "Databases & OS",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Linux (Kali/Ubuntu)", "Windows Server"],
  },
];

export const projects: Project[] = [
  {
    title: "VizLab",
    description: "Designed, built, and deployed a production-grade MERN application on a self-hosted Linux homelab server using Docker to visualize DevOps infrastructure dependencies across containerized and cloud-based systems. Implemented backend services to collect, parse, and correlate Docker and AWS metrics. Integrated Prometheus and Grafana for real-time metrics scraping and visualization.",
    techStack: ["React", "Node.js", "Docker", "Prometheus", "Grafana", "AWS"],
    liveUrl: "#", // Add live demo link if available
    featured: true,
    date: "Feb 2026",
  },
  {
    title: "AWS Idle Instance Stopper",
    description: "Engineered a serverless cost-optimization bot using AWS Lambda and CloudWatch to automatically detect and stop idle EC2 instances based on CPU utilization thresholds. Reduced non-production cloud compute costs by 40% by eliminating wasted runtime during off-hours.",
    techStack: ["AWS Lambda", "CloudWatch", "Boto3", "Python"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: true,
    date: "Feb 2026",
  },
  {
    title: "End-to-End DevSecOps Pipeline",
    description: "Implemented a production-grade DevSecOps CI/CD pipeline using Jenkins, Docker, Kubernetes, and SonarQube, enforcing automated security gates (SAST, DAST, image scanning) and reducing deployment risk.",
    techStack: ["Jenkins", "Kubernetes", "Docker", "SonarQube", "Trivy"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: true,
    date: "Dec 2025",
  },
  {
    title: "Uptimely (SaaS Observability Platform)",
    description: "Architected a multi-tenant SaaS observability platform using a scalable Node.js polling engine, self-service React dashboards, and automated email alerting to reduce Mean Time to Detection (MTTD) for user services.",
    techStack: ["React", "Node.js", "MongoDB", "AWS"],
    featured: true,
    date: "Jan 2026",
  },
  {
    title: "Private Cloud Backup Server",
    description: "Maintained 99.9% connectivity on dynamic IPs via a self-healing mesh network, removing DNS dependencies. Deployed using Docker, Syncthing, and Tailscale on Linux.",
    techStack: ["Docker", "Syncthing", "Tailscale", "Linux"],
    githubUrl: "https://github.com/Prajwal-1703",
    featured: false,
    date: "May 2025",
  },
];

export const experiences: Experience[] = [
  {
    title: "DevOps Trainee",
    company: "Parabola9",
    location: "Pune, India",
    startDate: "Feb 2026",
    endDate: "Present",
    description: [
      "Designed and deployed an AWS-based intelligent cost optimization engine ('Idle Stopper') that analyzes multi-metric utilization data and automatically enforces shutdown policies - cutting non-production cloud spend by up to 40%.",
      "Developed a proactive disk space monitoring system that triggers automated email alerts upon exceeding utilization thresholds, preventing storage-related service outages.",
    ],
    techStack: ["Python", "AWS", "CloudWatch", "Lambda"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "AWS Certifications",
    description: "Technical Professional, Cloud Economics, Containers on AWS, Migrating Workloads, Digital Sovereignty, ML & Generative AI",
    date: "2026",
    icon: "award",
  },
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
  field: "Computer Engineering (CGPA: 9.268)",
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

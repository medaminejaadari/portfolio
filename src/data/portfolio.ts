// Central source of truth for all portfolio content.
// Typos from the original CV wording are fixed (e.g. "participatedin" → "participated in").

export const siteConfig = {
  name: "Jaadari Mohamed Amine",
  title: "Telecommunications Engineering Student | AI Focus",
  location: "Manar 1, Tunis, Tunisia",
  phone: "+216 29 011 185",
  email: "medamine.jaadari@etudiant-enit.utm.tn",
  linkedin: "https://www.linkedin.com/in/jaadarimed",
  github: "https://github.com/medaminejaadari",
  url: "https://portfolue-eight.vercel.app",
  cv: "/CV_Jaadari_Mohamed_Amine.pdf",
  avatar: "/avatar.webp",
  photo: "/photo.webp",
  description:
    "Telecommunications engineering student at ENIT specializing in Data Science and AI — machine learning, reinforcement learning, RAG systems, and large-scale data analysis.",
};

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code2",
    items: ["C/C++", "Python", "JavaScript", "C#"],
  },
  {
    name: "Data Science & Analysis",
    icon: "BarChart3",
    items: [
      "Data Exploration & Cleaning",
      "Statistical Analysis",
      "Feature Engineering",
      "Data Visualization (Matplotlib, Seaborn, Plotly)",
      "Pandas DataFrames & NumPy Arrays",
    ],
  },
  {
    name: "Machine Learning / AI",
    icon: "BrainCircuit",
    items: [
      "Supervised / Unsupervised Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "RAG Systems",
      "LLM Integration (LangChain)",
    ],
  },
  {
    name: "Signal Processing",
    icon: "AudioWaveform",
    items: [
      "EEG Signal Analysis",
      "Feature Extraction",
      "Filtering",
      "Medical Data Processing",
    ],
  },
  {
    name: "Databases",
    icon: "Database",
    items: ["MySQL", "SQL Server", "MongoDB", "NoSQL"],
  },
  {
    name: "Libraries",
    icon: "Library",
    items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Tools / DevOps",
    icon: "Terminal",
    items: ["Git", "Docker", "Linux", "MLOps"],
  },
  {
    name: "Certifications",
    icon: "Award",
    items: [
      "Google – Agent Fundamentals (DataCamp)",
      "Building Scalable Agentic Systems (DataCamp)",
    ],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Vermeg for Banking Solutions",
    role: "Software Engineering Intern",
    period: "June 2026 – July 2026",
    bullets: [
      "Designed and developed a multi-agent system (Python, LangChain) integrating the Llama 3.3-70B LLM (Groq) for automated generation of personalized reports.",
      "Deployed a secure RESTful API for external integration, with automated multichannel distribution (Email, WhatsApp) and CSV database management.",
    ],
  },
];

export interface Project {
  title: string;
  period: string;
  description: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Automated EEG Analysis and Classification System with RAG Assistance",
    period: "Jan. 2025 – June 2025",
    description: [
      "Analyzed and cleaned raw EEG time-series data by handling missing values, detecting outliers, and preprocessing signals; organized and manipulated the data using Pandas DataFrames and NumPy arrays.",
      "Visualized EEG signals through time-series plots, spectrograms, and correlation matrices to identify patterns and validate engineered and extracted features.",
      "Developed an end-to-end Alzheimer's disease classification system, achieving 81% accuracy on real patient data while comparing KNN, SVM, Random Forest, and Decision Tree models.",
      "Integrated a RAG pipeline for natural-language querying of medical reports and automated PDF report generation.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "RAG"],
    github: "https://github.com/medaminejaadari",
    live: "https://github.com/medaminejaadari",
    featured: true,
  },
  {
    title: "Reinforcement Learning Trading Bot",
    period: "October 2026",
    description: [
      "Developed an RL agent (Monte Carlo Control) integrating an epsilon-greedy policy under GLIE constraints to balance exploration and exploitation, with iterative Q-table updates.",
    ],
    tech: ["Python", "Reinforcement Learning", "NumPy"],
    github: "https://github.com/medaminejaadari",
  },
  {
    title: "Big Data Analysis with Hadoop",
    period: "March 2025",
    description: [
      "Research project on the Hadoop ecosystem (MapReduce, Hive) for big data analysis.",
    ],
    tech: ["Hadoop", "MapReduce", "Hive"],
    github: "https://github.com/medaminejaadari",
  },
  {
    title: "Facial Recognition System — ENIT",
    period: "March 2025",
    description: [
      "Developed a real-time facial recognition system integrating Arduino hardware with Python/OpenCV.",
    ],
    tech: ["Python", "OpenCV", "Arduino"],
    github: "https://github.com/medaminejaadari",
  },
];

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  bullets: string[];
}

export const education: EducationItem[] = [
  {
    school: "National Engineering School of Tunis (ENIT)",
    period: "Sep. 2024 – Present",
    degree: "Telecommunications Engineering (Data Science Specialization)",
    bullets: [
      "Three-year curriculum focused on computer science, telecommunications systems, and software development life cycles.",
    ],
  },
  {
    school: "MP Preparatory Classes — IPEI Gabès",
    period: "2022 – 2024",
    degree: "Mathematics-Physics Preparatory Program",
    bullets: [
      "Built a strong foundation in mathematical analysis, linear algebra, mechanics, and problem-solving, with an introduction to algorithms and programming.",
    ],
  },
];

export interface ActivityItem {
  org: string;
  role: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export const leadership: ActivityItem[] = [
  {
    org: "IEEE CS Chapter (ENIT)",
    role: "Member",
    description:
      "Participated in computer science conferences and training sessions.",
    image: "/cp.webp",
    imageAlt: "IEEE CS Chapter activity photo",
  },
  {
    org: "IEEE SIGHT Chapter (ENIT)",
    role: "Content & IT Team Member",
    description:
      "Created visual content, managed social media, and strengthened the club's digital presence with the IT team.",
    image: "/g2foss.webp",
    imageAlt: "G2FOSS ENIT training activity",
  },
  {
    org: "G2FOSS ENIT",
    role: "Trainee",
    description:
      "Training in algorithmic problem-solving and competition preparation (since Oct. 2024).",
    image: "/ieee.webp",
    imageAlt: "IEEE chapter activity",
  },
];

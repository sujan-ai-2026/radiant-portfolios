export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const personalInfo = {
  name: "Sujan Praba",
  title: "Full-Stack Developer",
  tagline: "I craft digital experiences that blend beautiful design with robust engineering.",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, and I love creating performant, accessible, and visually stunning digital products. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or hiking in the mountains.",
  email: "sujanpraba@gmail.com",
  location: "Coimbatore, India",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const projects: Project[] = [
  {
    id: "pulse-analytics",
    title: "Pulse Analytics",
    description: "Real-time analytics dashboard with interactive charts and AI-powered insights.",
    longDescription: "A comprehensive analytics platform that provides real-time data visualization, custom dashboards, and AI-powered insights. Built with React, D3.js, and a Go backend for high-performance data processing.",
    image: "",
    tags: ["React", "TypeScript", "D3.js", "Go", "PostgreSQL"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "nebula-ui",
    title: "Nebula UI",
    description: "A modern component library with 50+ accessible components and design tokens.",
    longDescription: "An open-source component library featuring 50+ fully accessible React components with a flexible design token system. Includes dark mode, RTL support, and comprehensive documentation.",
    image: "",
    tags: ["React", "Storybook", "CSS-in-JS", "A11y"],
    category: "Frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "sync-flow",
    title: "SyncFlow",
    description: "Real-time collaboration platform with video, whiteboard, and document editing.",
    longDescription: "A collaboration platform enabling teams to work together in real-time with video conferencing, shared whiteboards, and collaborative document editing powered by CRDTs.",
    image: "",
    tags: ["Next.js", "WebRTC", "WebSocket", "Redis"],
    category: "Full-Stack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "terra-map",
    title: "TerraMap",
    description: "Interactive geospatial visualization tool for environmental data.",
    longDescription: "An interactive mapping application that visualizes environmental datasets including climate data, biodiversity hotspots, and pollution levels using Mapbox GL and custom WebGL shaders.",
    image: "",
    tags: ["Mapbox", "WebGL", "Python", "FastAPI"],
    category: "Data Viz",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "code-forge",
    title: "CodeForge",
    description: "AI-powered code review tool that catches bugs before they ship.",
    longDescription: "An intelligent code review assistant that uses machine learning to detect potential bugs, security vulnerabilities, and code quality issues before code reaches production.",
    image: "",
    tags: ["Python", "ML", "React", "Docker"],
    category: "AI/ML",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "wave-audio",
    title: "WaveAudio",
    description: "Browser-based DAW with real-time audio processing and MIDI support.",
    longDescription: "A web-based digital audio workstation featuring real-time audio processing, MIDI device support, virtual instruments, and collaborative session sharing.",
    image: "",
    tags: ["Web Audio API", "React", "WebAssembly", "Rust"],
    category: "Creative",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experiences: Experience[] = [

  {
    id: "1",
    role: "Full-Stack Developer",
    company: "Pirai Infotech Pvt Ltd",
    period: "2023 — Present",
    description: "Contributing as a Full-Stack Developer across multiple production-grade platforms including E-Ticket Booking, Doctor Appointment Management, Insurance & Investment, and Job Search & Posting systems. Built scalable frontend and backend features using React, Next.js, and Node.js. Adopted TypeScript for type-safe development, implemented unit testing, and improved application performance and maintainability. Actively worked with modern tooling and state management solutions to enhance user experience and system reliability.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "TanStack Query", "Vite", "AWS", "Docker", "Unit Testing"]
  },

  {
    id: "2",
    role: "Intern Developer",
    company: "Pirai Infotech Pvt Ltd",
    period: "2023 (6 months)",
    description: "Started from scratch by learning HTML, CSS, and JavaScript, then progressed to building real-world features using React and Next.js. Contributed to frontend development, improved UI components, and gained hands-on experience working on a SaaS platform.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
  }

  // {
  //   id: "3",
  //   role: "Frontend Developer",
  //   company: "DigitalAgency",
  //   period: "2019 — 2020",
  //   description: "Developed responsive web applications for Fortune 500 clients. Specialized in performance optimization and accessibility compliance.",
  //   technologies: ["Vue.js", "SCSS", "WordPress", "PHP"],
  // },
  // {
  //   id: "4",
  //   role: "Junior Developer",
  //   company: "WebStudio",
  //   period: "2018 — 2019",
  //   description: "Started my professional journey building landing pages and e-commerce solutions. Learned agile methodologies and collaborative development.",
  //   technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  // },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications",
    excerpt: "Learn the patterns and practices that help React apps scale from prototype to production.",
    date: "2024-12-15",
    readTime: "8 min",
    tags: ["React", "Architecture"],
    content: "Building scalable React applications requires careful planning and the right architectural patterns. In this post, we explore component composition, state management strategies, and performance optimization techniques that help your app grow without growing pains...",
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns You Should Know",
    excerpt: "Dive deep into discriminated unions, template literals, and conditional types.",
    date: "2024-11-20",
    readTime: "12 min",
    tags: ["TypeScript", "Patterns"],
    content: "TypeScript's type system is incredibly powerful, and mastering its advanced features can dramatically improve your code quality. Let's explore some patterns that go beyond the basics...",
  },
  {
    slug: "future-of-web-dev",
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring emerging trends like AI-assisted coding, edge computing, and WebAssembly.",
    date: "2024-10-05",
    readTime: "6 min",
    tags: ["Web Dev", "Trends"],
    content: "The web development landscape is evolving rapidly. From AI-powered development tools to edge-first architectures, let's look at the trends shaping our industry...",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechStartup",
    avatar: "",
    quote: "Alex is one of the most talented developers I've worked with. Their ability to translate complex requirements into elegant solutions is remarkable.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "DigitalCorp",
    avatar: "",
    quote: "Working with Alex was a game-changer for our product. They brought both technical excellence and creative vision to every sprint.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "CreativeStudio",
    avatar: "",
    quote: "Rarely do you find a developer who cares as deeply about design as Alex. The attention to detail and pixel-perfect implementation is outstanding.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 50 },
      // { name: "Go", level: 65 },
      // { name: "Rust", level: 50 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      // { name: "Docker", level: 80 },
      // { name: "AWS", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

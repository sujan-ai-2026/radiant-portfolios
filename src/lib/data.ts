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
  bio: "I'm a passionate full-stack developer with 4+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, and I love creating performant, accessible, and visually stunning digital products. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or hiking in the mountains.",
  email: "sujanpraba11@gmail.com",
  location: "Coimbatore, India",
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
  },
};

export const projects: Project[] = [
  {
    id: "ai-quiz-master",
    title: "AI Quiz Master",
    description: "Intelligent quiz generation platform that transforms any topic or job description into a high-quality, tailored assessment.",
    longDescription: "AI Quiz Master is an intelligent quiz generation platform that transforms any topic or job description into a high-quality, tailored assessment. By leveraging advanced Language Models (LLMs) via the Groq API, the application dynamically creates multiple-choice questions that range from basic concepts to expert-level scenarios. The platform provides a seamless user experience with real-time scoring, detailed performance breakdowns, and AI-generated summaries that offer actionable feedback and career advice.\n\nCore Tech Stack\n- Frontend Framework: React 18 with TypeScript\n- Build Tooling: Vite for ultra-fast development and optimized production builds\n- Styling & UI: Tailwind CSS for utility-first styling and shadcn/ui (built on Radix UI) for premium, accessible components\n- State Management: TanStack Query (React Query) for efficient data fetching and caching\n- AI Integration: Groq API for high-speed, LLM-powered question and summary generation\n- Form Handling: React Hook Form with Zod for robust schema validation\n- Icons: Lucide React for consistent, scalable iconography",
    image: "/chatbot.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Groq API", "Zod", "Lucide React"],
    category: "AI / Full-Stack",
    liveUrl: "https://sujanai-quiz-generator.netlify.app/",
    githubUrl: "",
    featured: true,
  },
  {
    id: "skycast-ai",
    title: "Aura: Your Weather Concierge",
    description: "Real-time weather application with intelligent AI-powered lifestyle and activity suggestions.",
    longDescription: "Aura is a modern weather platform that goes beyond simple forecasts by providing personalized, AI-driven lifestyle recommendations. By integrating real-time weather data with the Groq API, the application analyzes atmospheric conditions to suggest optimal activities, clothing choices, and health tips. Whether it's recommending a perfect time for a run or suggesting indoor creative projects during a storm, Aura transforms raw data into actionable daily insights.\n\nCore Tech Stack\n- Frontend Framework: React 18 with TypeScript\n- Build Tooling: Vite for lightning-fast development and optimized production builds\n- Weather Integration: Real-time Weather API (via npm) for precise, up-to-the-minute atmospheric data\n- AI Intelligence: Groq API for generating context-aware lifestyle and health suggestions\n- Styling & UI: Tailwind CSS and shadcn/ui for a clean, responsive, and accessible interface",
    image: "/sun.png",
    tags: ["React", "Vite", "Groq API", "Weather API", "Tailwind CSS", "TypeScript"],
    category: "AI / Utility",
    liveUrl: "https://sujanai-weather-companion.netlify.app/",
    githubUrl: "",
    featured: true,
  },
  {
    id: "theme-doctor",
    title: "Theme Doctor",
    description: "A real-time visual theme editor and design system manager for modern web applications.",
    longDescription: "Theme Doctor is a powerful developer tool designed to bridge the gap between design and implementation. It provides a live, interactive environment where developers can customize brand colors, typography, and UI surface styles with instant feedback. By leveraging CSS variables and a global ThemeProvider, it allows for seamless synchronization across complex dashboards, charts, and components. The application features a premium floating horizontal editor, a robust preset system, and the ability to export theme configurations directly to CSV for production use.\n\nCore Tech Stack\n- Frontend Framework: React 18 with TypeScript for type-safe component architecture\n- Build Tooling: Vite for high-performance development and optimized production builds to the 'out' directory\n- State Management: Custom React Context-based Theme System for real-time style injection\n- Animations: Framer Motion for smooth UI transitions and glassmorphism effects\n- Data Visualization: Recharts for theme-aware, interactive data displays\n- Styling & UI: Tailwind CSS for a utility-first, highly customizable design system and Lucide React for consistent iconography",
    image: "/themeDoctor.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Design Systems"],
    category: "Developer Tools",
    liveUrl: "https://themedoctor.netlify.app/",
    githubUrl: "",
    featured: true,
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
    title: "AI & Agents",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "Claude & LLMs", level: 92 },
      { name: "AI Agents (Antigravity)", level: 85 },
      { name: "Agentic Workflows", level: 88 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
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

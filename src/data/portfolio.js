import { Github, Linkedin, Phone, Home, User, Briefcase, Code, BookOpen, Wrench } from 'lucide-react';

export const portfolioData = {
  hero: {
    name: "Sujal Jaiswal",
    highlight: "Available for Software Engineering opportunities",
    description: "Full-Stack Developer crafting clean, user-centric experiences. Active MCA student based in Mumbai.",
    socials: [
      { id: "github", label: "GitHub", url: "https://github.com/thesujaljaiswal", icon: Github },
      { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/sujal-jaiswal", icon: Linkedin },
      { id: "phone", label: "+91 9892072116", url: "tel:+919892072116", icon: Phone }
    ],
    contactEmail: "sujaljaiswal548@gmail.com"
  },
  about: {
    title: "Professional Summary",
    summary: "Curious and self-driven full-stack developer with strong experience in React, REST APIs, and modern web development who enjoys turning ideas into clean, usable products. Known for taking ownership, learning quickly, and building with a strong focus on user experience and simplicity. MCA student based in Mumbai, actively exploring software engineering opportunities."
  },
  experience: {
    title: "Experience",
    companies: [
      {
        id: "scalix",
        name: "Scalix",
        roles: [
          {
            id: "scalix-dev",
            title: "Software Developer (Intern)",
            period: "Mar. 2026 - Present",
            jobType: "OnSite",
            location: "Dahisar, Mumbai",
            bullets: [
              "Developing full-stack applications using Next.js and the Frappe framework to build and optimize internal business workflows."
            ]
          }
        ]
      },
      {
        id: "rxgpt",
        name: "RxGPT",
        roles: [
          {
            id: "rxgpt-fullstack",
            title: "Full Stack Developer (Intern)",
            period: "Dec. 2025 - Feb 2026",
            jobType: "Remote",
            location: "Bhubaneswar, Odisha",
            bullets: [
              "Led frontend architecture and UI/UX for a healthcare platform, building scalable React interfaces integrated with Python/Flask APIs and secure JWT authentication within a remote engineering team."
            ]
          }
        ]
      }
    ]
  },
  projects: {
    title: "Academic Projects",
    items: [
      {
        id: "maitripos",
        title: "maitriPOS",
        period: "Dec. 2025 - Present",
        description: "Architected and built a multi-tenant QR-based commerce platform. Designed secure REST APIs with authentication, store-level data isolation, and optimized database queries. Deployed production system handling real-time customer orders for small businesses.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        links: { github: "https://github.com/thesujaljaiswal/maitripos", live: "https://maitripos.com/" }
      },
      {
        id: "newsquest",
        title: "The NewsQuest",
        period: "Aug. 2025 - Oct. 2025",
        description: "Developed a full-stack news platform implementing RESTful APIs and JWT authentication to ensure secure, scalable, and seamless content delivery.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        links: { github: "https://github.com/thesujaljaiswal/the-news-quest-frontend", live: "https://thenewsquest.vercel.app/" }
      },
      {
        id: "crevexa",
        title: "Crevexa Media",
        period: "Aug. 2025 - Sep. 2025",
        description: "Developed a high-performance, responsive front-end implementing modern tooling (ESLint, fast refresh) and a clean component structure to optimize developer experience and end-user performance.",
        tech: ["React", "Vite"],
        links: { github: "https://github.com/thesujaljaiswal/crevexaOfficialSite", live: "https://crevexa-official-site.vercel.app/" }
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        id: "ssc",
        institution: "S.I.E.S High School",
        degree: "Secondary School Certificate (SSC) | 62.80%",
        period: "2009 - 2019",
        location: "Mumbai, IN"
      },
      {
        id: "hsc",
        institution: "Rao Junior College of Science",
        degree: "Higher Secondary Certificate (HSC) | Science | 90.67%",
        period: "2020 - 2021",
        location: "Mumbai, IN"
      },
      {
        id: "bsc",
        institution: "S.I.E.S College of Arts, Science and Commerce",
        degree: "Bachelor of Science in Computer Science | CGPA: 7.57",
        period: "2021 - 2024",
        location: "Mumbai, IN"
      },
      {
        id: "mca",
        institution: "Thakur Institute of Management Studies, Career Development & Research",
        degree: "Master of Computer Applications (MCA) | CGPA: 7.9 (Pursuing)",
        period: "2024 - 2026",
        location: "Mumbai, IN"
      },
    ]
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        id: "languages",
        category: "Languages",
        skills: ["Java", "JavaScript", "C# (.NET)"]
      },
      {
        id: "frontend",
        category: "Frontend",
        skills: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"]
      },
      {
        id: "backend",
        category: "Backend",
        skills: ["Node.js", "Express.js", "ASP.NET", "REST APIs"]
      },
      {
        id: "databases",
        category: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL"]
      },
      {
        id: "tools",
        category: "Tools & Platforms",
        skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "Figma", "Notion"]
      }
    ]
  },
  navbar: [
    { id: '1', name: 'Home', href: '#', icon: Home },
    { id: '2', name: 'About', href: '#about', icon: User },
    { id: '3', name: 'Experience', href: '#experience', icon: Briefcase },
    { id: '4', name: 'Projects', href: '#projects', icon: Code },
    { id: '5', name: 'Education', href: '#education', icon: BookOpen },
    { id: '6', name: 'Skills', href: '#skills', icon: Wrench },
  ],
  footer: {
    builtWith: ["Love"],
    copyright: "Sujal Jaiswal"
  }
};

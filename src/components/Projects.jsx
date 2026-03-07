import Section from './Section';
import { ExternalLink, Github } from 'lucide-react';
import { BorderBeam } from './ui/border-beam';

const projects = [
  {
    title: 'maitriPOS',
    period: 'Dec. 2025 – Present',
    description: 'Architected and built a multi-tenant QR-based commerce platform. Designed secure REST APIs with authentication, store-level data isolation, and optimized database queries. Deployed production system handling real-time customer orders for small businesses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: { frontend: '#', backend: '#', live: '#' }
  },
  {
    title: 'The NewsQuest',
    period: 'Aug. 2025 – Oct. 2025',
    description: 'Developed a full-stack news platform implementing RESTful APIs and JWT authentication to ensure secure, scalable, and seamless content delivery.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { frontend: '#', backend: '#', live: '#' }
  },
  {
    title: 'Crevexa Media',
    period: 'Aug. 2025 – Sep. 2025',
    description: 'Developed a high-performance, responsive front-end implementing modern tooling (ESLint, fast refresh) and a clean component structure to optimize developer experience and end-user performance.',
    tech: ['React', 'Vite'],
    links: { github: '#', live: '#' }
  }
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 shrink-0">Academic Projects</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 group hover:shadow-[0_10px_30px_-15px_rgba(124,58,237,0.3)] border border-slate-800 hover:border-purple-500/50 flex flex-col h-full relative overflow-hidden">
             
            <BorderBeam size={250} duration={12} delay={9} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-16 h-16 bg-purple-500/20 blur-2xl rounded-full"></div>
            </div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <div className="flex gap-3">
                {project.links.github && (
                  <a href={project.links.github} className="text-slate-400 hover:text-purple-400 transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="text-slate-400 hover:text-pink-400 transition-colors" aria-label="Live Project">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-xs font-mono text-purple-400/80 mb-4">{project.period}</p>
            
            <div className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
              {project.description}
            </div>
            
            <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tech.map((tech, i) => (
                <li key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-purple-300 border border-purple-500/20 shadow-sm">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

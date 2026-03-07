import Section from '../layout/Section';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects">
      <div className="mt-12 mb-8 border-b-4 border-[#111] pb-2 flex justify-between items-end">
        <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">{projects.title}</h2>
        <span className="font-bold text-xs uppercase tracking-widest hidden md:inline">Innovation Column</span>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.items.map((project, idx) => (
          <div key={project.id} className="break-inside-avoid border-2 border-[#111] bg-white paper-shadow flex flex-col h-full relative group">

            <div className="p-1 border-b-2 border-[#111] bg-[#111] text-[#f4f1ea] flex justify-between items-center text-xs font-bold uppercase tracking-widest px-4">
              <span>Case Study No. 0{idx + 1}</span>
              <span className="font-mono">{project.period}</span>
            </div>

            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start border-b border-[#111] pb-4 mb-4">
                <h3 className="sm:text-2xl text-xl font-black uppercase tracking-tight leading-none group-hover:underline decoration-4 underline-offset-4">{project.title}</h3>

                <div className="flex gap-3 shrink-0 ml-4">
                  {project.links?.github && (
                    <a href={project.links.github} className="text-[#111] hover:text-yellow-500 transition-colors" aria-label="GitHub Repository" target="_blank" rel="noreferrer">
                      <Github size={20} strokeWidth={2.5} />
                    </a>
                  )}
                  {project.links?.live && (
                    <a href={project.links.live} className="text-[#111] hover:text-blue-600 transition-colors" aria-label="Live Project" target="_blank" rel="noreferrer">
                      <ExternalLink size={20} strokeWidth={2.5} />
                    </a>
                  )}
                </div>
              </div>

              <p className="font-serif text-sm md:text-base leading-relaxed text-justify mb-6 first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:mr-2">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t-2 border-dashed border-[#111]">
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 block">— Core Technologies —</span>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-bold font-mono px-2 py-1 uppercase bg-[#e8e4d8] border border-[#111]">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

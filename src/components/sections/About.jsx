import Section from '../layout/Section';
import { portfolioData } from '../../data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <Section id="about">
      <div className="mb-8 border-b-4 border-[#111] pb-2 flex justify-between items-end">
        <h2 className="text-2xl min-[400px]:text-3xl md:text-5xl font-black uppercase tracking-tighter">{about.title}</h2>
        <span className="font-bold text-xs uppercase tracking-widest hidden md:inline">Page 2 — Feature</span>
      </div>

      <div className="border border-[#111] p-6 md:p-8 bg-white paper-shadow relative">
        {/* Decorative corner pieces */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#111]"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#111]"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#111]"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#111]"></div>

        <p className="text-sm md:text-2xl font-serif leading-relaxed text-justify relative z-10 first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {about.summary}
        </p>

        <div className="mt-8 text-center border-t border-dashed border-[#111] pt-4">
          <span className="italic font-bold text-sm">— Read more on Page 4</span>
        </div>
      </div>
    </Section>
  );
}

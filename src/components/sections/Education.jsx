import Section from '../layout/Section';
import { portfolioData } from '../../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <Section id="education">
      <div className="mt-12 mb-8 border-t-8 border-b border-[#111] py-2 flex justify-between items-baseline">
        <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl font-black uppercase tracking-tighter">{education.title}</h2>
        <span className="font-bold text-xs uppercase tracking-widest">Academic Records</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {education.items.map((edu, idx) => (
          <div key={edu.id} className="relative group">
            <div className="border border-[#111] p-6 bg-white paper-shadow relative h-full flex flex-col">

              <div className="absolute -top-4 -left-3 bg-[#111] text-[#f4f1ea] font-bold text-sm w-8 h-8 flex items-center justify-center rotate-[-10deg] shadow-[2px_2px_0_0_#ead181] z-10">
                {idx + 1}
              </div>

              <div className="mb-4 pt-2">
                <h3 className="text-lg md:text-xl font-bold uppercase leading-tight mb-2 border-b-2 border-black pb-2 inline-block">
                  {edu.institution}
                </h3>
                <p className="font-serif italic font-bold text-sm md:text-lg mt-2">
                  {edu.degree}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-dashed border-[#111] flex justify-between items-center font-mono text-sm font-bold uppercase">
                <span>{edu.period}</span>
                <span>[{edu.location}]</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

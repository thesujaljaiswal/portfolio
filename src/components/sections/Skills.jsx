import Section from '../layout/Section';
import { portfolioData } from '../../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <Section id="skills">
      <div className="mt-12 mb-8 bg-[#111] text-[#f4f1ea] px-4 py-2 border-y-4 border-double border-[#111]">
        <h2 className="text-2xl min-[400px]:text-3xl md:text-4xl font-black uppercase tracking-widest text-center">{skills.title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 items-start">
        {skills.categories.map((group) => (
          <div key={group.id} className="border-t-2 border-b-2 border-t-[#111] border-b-[#111] py-4">
            <h3 className="text-xl font-bold uppercase tracking-wider flex items-center gap-3 mb-4">
              <span className="text-4xl leading-none mt-1">✑</span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="px-3 py-1 font-mono text-sm font-bold uppercase border border-dashed border-[#111] bg-white hover:bg-[#ead181] transition-colors cursor-crosshair"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

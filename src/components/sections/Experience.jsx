import Section from '../layout/Section';
import { portfolioData } from '../../data/portfolio';

export default function Experience() {
   const { experience } = portfolioData;

   return (
      <Section id="experience">
         <div className="news-border-double flex justify-between items-center px-2 bg-[#111] text-[#f4f1ea] py-1 mb-8 mt-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">{experience.title}</h2>
            <span className="font-bold text-xs uppercase tracking-widest hidden sm:inline">The Professional Journey</span>
         </div>

         <div className="space-y-12">
            {experience.companies.map((company) => (
               <div key={company.id} className="w-full border-b border-[#111] pb-8 last:border-0">
                  <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-6">
                     <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{company.name}</h3>
                     <span className="text-sm font-bold opacity-70 italic">— {company.roles.length} {company.roles.length > 1 ? 'Rank Changes' : 'Rank'} Recorded</span>
                  </div>

                  <div className="pl-0 md:pl-4 space-y-8 relative">
                     {/* Vertical spine */}
                     <div className="hidden md:block absolute left-0 top-2 bottom-0 w-1 bg-[#111]"></div>

                     {company.roles.map((role) => (
                        <div key={role.id} className="relative md:pl-8">
                           {/* Spine connector */}
                           <div className="hidden md:block absolute -left-[10px] top-1.5 w-6 h-1 bg-[#111]"></div>

                           <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 border-b border-dashed border-[#111] pb-2">
                              <div>
                                 <h4 className="text-xl md:text-2xl font-bold uppercase"><span className="nanobanana text-black">{role.title}</span></h4>
                              </div>
                              <div className="text-xs md:text-sm font-mono font-bold uppercase mt-1 md:mt-0 tracking-tight">
                                 {role.period} | {role.jobType} | <span className="underline">{role.location}</span>
                              </div>
                           </div>

                           <ul className="space-y-2 font-serif text-base md:text-lg leading-snug">
                              {role.bullets.map((bullet, idx) => (
                                 <li key={idx} className="flex items-start gap-4">
                                    <span className="font-black mt-1 text-sm">»</span>
                                    <span className="text-justify">{bullet}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </Section>
   );
}

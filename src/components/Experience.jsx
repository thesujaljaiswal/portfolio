import Section from './Section';
import { BorderBeam } from './ui/border-beam';

export default function Experience() {
  return (
    <Section id="experience">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 shrink-0">Experience</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="space-y-8">
        <div className="relative pl-8 md:pl-0 border-l border-slate-700 md:border-none">
          {/* Timeline Dot (Mobile) */}
          <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-6px] top-2 md:hidden"></div>

          <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
            <div className="md:col-span-1 mb-4 md:mb-0 text-slate-400 text-sm md:text-right md:pr-8 font-medium font-mono pt-1">
              Present <br/><span className="text-slate-500">Remote</span>
            </div>
            
            <div className="md:col-span-3 glass p-6 md:p-8 rounded-2xl hover:border-purple-500/30 transition-all group relative overflow-hidden">
              <BorderBeam size={300} duration={12} delay={9} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 block" />

              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute w-3 h-3 bg-purple-500 rounded-full left-[-26px] top-6 border-4 border-slate-900 box-content"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-purple-400 transition-colors">RxGPT</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">Full Stack Developer (Intern)</p>
                
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Led frontend architecture and UI/UX design for a healthcare platform as part of the early engineering team
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Built scalable React interfaces and integrated Python + Flask APIs for authentication and medical workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Worked with RESTful APIs, JWT-based authentication, and Git-based version control in a remote development environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative pl-8 md:pl-0 border-l border-slate-700 md:border-none">
          {/* Timeline Dot (Mobile) */}
          <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-6px] top-2 md:hidden"></div>

          <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
            <div className="md:col-span-1 mb-4 md:mb-0 text-slate-400 text-sm md:text-right md:pr-8 font-medium font-mono pt-1">
              Present <br/><span className="text-slate-500">Remote</span>
            </div>
            
            <div className="md:col-span-3 glass p-6 md:p-8 rounded-2xl hover:border-purple-500/30 transition-all group relative overflow-hidden">
              <BorderBeam size={300} duration={12} delay={9} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 block" />

              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute w-3 h-3 bg-purple-500 rounded-full left-[-26px] top-6 border-4 border-slate-900 box-content"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-purple-400 transition-colors">RxGPT</h3>
                <p className="text-purple-400 text-sm font-medium mb-4">Full Stack Developer (Intern)</p>
                
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Led frontend architecture and UI/UX design for a healthcare platform as part of the early engineering team
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Built scalable React interfaces and integrated Python + Flask APIs for authentication and medical workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1.5 text-xs">▹</span>
                    Worked with RESTful APIs, JWT-based authentication, and Git-based version control in a remote development environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

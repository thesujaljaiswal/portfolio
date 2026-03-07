import Section from './Section';
import { TextReveal } from './ui/text-reveal';

export default function About() {
  const summaryText = "Curious and self-driven full-stack developer with strong experience in React, REST APIs, and modern web development who enjoys turning ideas into clean, usable products. Known for taking ownership, learning quickly, and building with a strong focus on user experience and simplicity. MCA student based in Mumbai, actively exploring software engineering opportunities.";

  return (
    <Section id="about">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px bg-slate-700 flex-1"></div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">Professional Summary</h2>
        <div className="h-px bg-slate-700 flex-1"></div>
      </div>
      
      <div className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500 min-h-[220px] flex items-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors duration-500"></div>
        
        <TextReveal text={summaryText} className="text-lg md:text-xl text-slate-300 leading-relaxed font-light relative z-10" />
      </div>
    </Section>
  );
}

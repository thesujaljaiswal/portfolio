import Section from './Section';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'JavaScript', 'C# (.NET)']
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'ASP.NET', 'REST APIs']
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Figma', 'Notion']
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-slate-800 flex-1"></div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 shrink-0">Technical Skills</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((group, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200 flex items-center gap-2">
               <span className="w-8 h-[1px] bg-purple-500/50 inline-block"></span>
               {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700 hover:border-purple-500/50 rounded-lg text-sm text-slate-300 transition-all cursor-default hover:-translate-y-0.5 hover:shadow-[0_5px_15px_-5px_rgba(124,58,237,0.3)] hover:text-purple-300"
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

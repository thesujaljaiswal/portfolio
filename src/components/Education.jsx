import Section from './Section';

const education = [
  {
    institution: 'Thakur Institute of Management Studies, Career Development & Research',
    degree: 'Master of Computer Applications (MCA) | CGPA: 7.9 (Pursuing)',
    period: '2024 – 2026',
    location: 'Mumbai, IN'
  },
  {
    institution: 'S.I.E.S College of Arts, Science and Commerce',
    degree: 'Bachelor of Science in Computer Science | CGPA: 7.57',
    period: '2021 – 2024',
    location: 'Mumbai, IN'
  },
  {
    institution: 'Rao Junior College of Science',
    degree: 'Higher Secondary Certificate (HSC) | Science | 90.67%',
    period: '2020 – 2021',
    location: 'Mumbai, IN'
  },
  {
    institution: 'S.I.E.S High School',
    degree: 'Secondary School Certificate (SSC) | 62.80%',
    period: '2009 – 2019',
    location: 'Mumbai, IN'
  }
];

export default function Education() {
  return (
    <Section id="education">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100 shrink-0">Education</h2>
        <div className="h-px bg-slate-800 flex-1"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="glass p-6 rounded-xl hover:bg-slate-800/50 transition-colors group border border-transparent hover:border-slate-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-purple-400 transition-colors">{edu.institution}</h3>
              <div className="text-sm font-mono text-slate-500 shrink-0 mt-1 md:mt-0 text-right">
                 {edu.period} <br className="hidden md:block"/> {edu.location && <span className="md:hidden"> | </span>}{edu.location}
              </div>
            </div>
            <p className="text-slate-400 text-sm md:text-base">{edu.degree}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

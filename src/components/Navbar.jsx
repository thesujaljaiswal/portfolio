import { Code, BookOpen, Briefcase, User, Wrench, Home } from 'lucide-react';
import { Dock, DockIcon } from './ui/dock';

const navItems = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Education', href: '#education', icon: BookOpen },
  { name: 'Skills', href: '#skills', icon: Wrench },
];

export default function Navbar() {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold tracking-tighter text-gradient">
            SJ.
          </a>
        </div>
      </nav>

      {/* Magic UI Dock Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock direction="middle">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <DockIcon key={item.name} className="bg-slate-900/80 border border-slate-800 shadow-xl">
                 <a href={item.href} aria-label={item.name} className="flex h-full w-full items-center justify-center relative group">
                    <Icon size={20} />
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-xs px-2 py-1 rounded-md mb-2 pointer-events-none">
                       {item.name}
                    </span>
                 </a>
              </DockIcon>
            );
          })}
        </Dock>
      </div>
    </>
  );
}

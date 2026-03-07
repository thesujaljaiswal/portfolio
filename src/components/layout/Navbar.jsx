import { portfolioData } from '../../data/portfolio';

export default function Navbar() {
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <header className="pt-8 pb-4 news-border-heavy">
      {/* Top micro-header */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-b-2 border-[#111] pb-2 mb-4 text-xs font-bold uppercase tracking-widest gap-2">
        <span>Vol. I — No. 1</span>
        <span className="hidden md:inline">Mumbai, India</span>
        <span>{currentDate}</span>
        <span>Price: Open Source</span>
      </div>

      {/* Main Masthead */}
      <div className="text-center">
        <h1 className="text-2xl min-[320px]:text-3xl min-[426px]:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          The Sujal Times
        </h1>
        <p className="text-[10px] sm:text-sm md:text-lg italic font-medium mt-2 tracking-wide border-y border-[#111] py-1 inline-block px-2 sm:px-8">
          Crafting Clean, User-Centric Experiences Since 2021
        </p>
      </div>

      {/* Category Links acting as quick jumps */}
      <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-6 text-sm font-bold uppercase tracking-wider">
        {portfolioData.navbar.map((item) => (
          <a key={item.id} href={item.href} className="hover:bg-[#111] hover:text-[#f4f1ea] px-2 py-1 transition-colors">
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

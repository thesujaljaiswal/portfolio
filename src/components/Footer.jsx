export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/50 py-8 text-center text-sm text-slate-500 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
        <p>Built with <span className="text-purple-400">React</span>, <span className="text-pink-400">Tailwind CSS</span> & <span className="text-blue-400">Framer Motion</span>.</p>
        <p>&copy; {new Date().getFullYear()} Sujal Jaiswal. All rights reserved.</p>
      </div>
    </footer>
  );
}

import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="w-full border-t-[12px] border-[#111] pt-6 pb-12 mt-20 text-center font-serif text-sm">
      <div className="max-w-2xl mx-auto px-6 border border-[#111] p-6 bg-white paper-shadow flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">— The Sujal Times —</h2>
        <p className="border-y border-dashed border-[#111] py-2 font-bold uppercase tracking-widest text-xs">
          Built with {footer.builtWith.join(', ')}
        </p>
        <p className="font-serif italic font-medium">
          &copy; {new Date().getFullYear()} {footer.copyright}. All printed rights reserved.
        </p>
        <div className="w-32 h-1 bg-[#111] mt-2"></div>
      </div>
    </footer>
  );
}

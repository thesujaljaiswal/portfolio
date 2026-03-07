import { portfolioData } from '../../data/portfolio';

export default function Hero() {
   const { hero } = portfolioData;

   return (
      <section className="relative w-full pb-12 mb-12 border-b-8 border-[#111]" id="#">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Column: Headlines & Story */}
            <div className="md:col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col justify-start">
               <div className="mb-6">
                  <span className="bg-[#111] text-[#f4f1ea] px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-widest inline-block mb-4">
                     Exclusive Report
                  </span>
                  <h2 className="text-2xl min-[380px]:text-3xl min-[450px]:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl 2xl:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-6 flex flex-wrap gap-x-2 gap-y-2">
                     <span>Developer</span> <span className="nanobanana text-black mx-1">Takes Ownership</span> <span>Of Web Space</span>
                  </h2>
                  <p className="text-xl md:text-2xl font-serif italic mb-6 border-l-4 border-[#111] pl-4">
                     "{hero.description}"
                  </p>
               </div>

               <div className="text-base md:text-lg columns-1 md:columns-2 gap-8 font-serif leading-relaxed text-justify">
                  <p className="mb-4">
                     <span className="text-5xl font-black float-left mr-3 leading-[0.8] mt-1">S</span>ujal Jaiswal, an active MCA student based in Mumbai, has been making waves in the full-stack development community. Sources report a strong focus on user experience and an unyielding curiosity that drives continuous learning exactly as industries demand.
                  </p>
                  <p className="mb-4">
                     "I enjoy turning ideas into clean, usable products," Jaiswal stated in a recent press conference, noting a specialization in <span className="font-bold border-b-2 border-dashed border-[#111]">React</span> and <span className="font-bold border-b-2 border-dashed border-[#111]">REST APIs</span>. The developer is confirmed to be actively exploring new software engineering opportunities.
                  </p>
                  <p className="mb-4">
                     Industry analysts point out that finding self-driven engineering talent who pair backend logic with high-end aesthetic execution is increasingly rare.
                  </p>
                  <div className="border border-[#111] p-4 bg-[#111] text-[#f4f1ea] text-center mt-6 break-inside-avoid shadow-[4px_4px_0_0_#ead181]">
                     <span className="block text-xl font-bold mb-2 uppercase tracking-wide">Classified: Available</span>
                     <a href={`mailto:${hero.contactEmail}`} className="underline hover:text-yellow-300 font-mono text-sm">
                        Contact {hero.contactEmail}
                     </a>
                  </div>
               </div>
            </div>

            {/* Right Column: Hero Image & Abstract */}
            <div className="md:col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col items-center pt-2 h-full overflow-hidden">
               <div className="w-[92%] sm:w-full border-2 border-[#111] p-2 bg-white rotate-2 hover:rotate-0 transition-transform duration-300 paper-shadow group mt-4 mx-auto">
                  <div className="relative overflow-hidden border border-[#111] bg-[#e8e4d8] flex items-center justify-center min-h-[300px]">
                     <img
                        src="/front-image.jpg"
                        alt="Sujal Jaiswal Profile"
                        className="object-cover object-top w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                           e.target.onerror = null;
                           e.target.src = "https://via.placeholder.com/400x500.png?text=Photo+Unavailable";
                        }}
                     />
                  </div>
                  <p className="text-[10px] md:text-xs font-mono text-center uppercase tracking-tighter mt-2 font-bold opacity-80">
                     FIG 1. — Developer S. Jaiswal
                  </p>
               </div>

               <div className="w-full mt-auto border-t border-[#111] pt-4 mt-8">
                  <h3 className="font-bold uppercase tracking-widest text-center text-sm border-b border-[#111] pb-2 mb-4">The Network</h3>
                  <ul className="flex flex-col gap-2">
                     {hero.socials.map((social) => {
                        const Icon = social.icon;
                        return (
                           <li key={social.id}>
                              <a
                                 href={social.url}
                                 target="_blank"
                                 rel="noreferrer"
                                 className="flex items-center gap-3 border border-[#111] p-2 hover:bg-[#111] hover:text-[#f4f1ea] transition-colors group"
                              >
                                 <div className="bg-[#111] text-[#f4f1ea] group-hover:bg-[#f4f1ea] group-hover:text-[#111] p-1 border border-[#111]">
                                    <Icon size={16} />
                                 </div>
                                 <span className="font-bold uppercase tracking-widest text-xs flex-1">{social.label}</span>
                                 <span className="font-mono text-[10px]">&gt;&gt;</span>
                              </a>
                           </li>
                        )
                     })}
                  </ul>
               </div>
            </div>

         </div>
      </section>
   );
}

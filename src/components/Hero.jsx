import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowDownRight } from 'lucide-react';
import { Meteors } from './ui/meteors';
import { ShimmerButton } from './ui/shimmer-button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
        <Meteors number={30} />
      </div>
      <div className="bg-hero-glow z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-10 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
          >
            Available for Software Engineering opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
             <span className="text-slate-100">Hi, I'm </span>
             <span className="text-gradient">Sujal Jaiswal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Full-Stack Developer crafting clean, user-centric experiences. Active MCA student based in Mumbai.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-16 mt-8">
            <a href="mailto:sujaljaiswal548@gmail.com" className="inline-block">
               <ShimmerButton shimmerColor="#a855f7" className="shadow-2xl font-bold">
                 <span className="flex items-center gap-2">
                    <Mail size={18} /> Let's Talk
                 </span>
               </ShimmerButton>
            </a>
            
             <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 glass hover:bg-slate-700 text-slate-200 rounded-full font-medium border border-slate-700 hover:border-slate-500 transition-all">
                View Projects <ArrowDownRight size={18} className="text-pink-400" />
             </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <SocialLink href="https://github.com/thesujaljaiswal" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/sujal-jaiswal" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="tel:+919892072116" icon={Phone} label="+91 9892072116" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 p-3 bg-slate-800/30 rounded-full border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 glass"
      aria-label={label}
      title={label}
    >
      <Icon size={22} />
    </a>
  );
}

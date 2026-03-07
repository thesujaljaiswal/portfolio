import { motion } from 'framer-motion';

export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 md:py-32 w-full max-w-5xl mx-auto px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}

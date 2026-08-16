import { resonanceHero } from '@/content/resonance';
import { motion, type Variants } from 'motion/react';

const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const ResonanceHero = () => {
  return (
    <motion.header
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
      className="mb-16 md:mb-24"
    >
      <motion.p
        variants={heroItemVariants}
        className="label-editorial text-sakura-accent/70 flex items-center gap-3"
      >
        <span
          className="bg-sakura-accent inline-block h-px w-8"
          aria-hidden="true"
        />
        {resonanceHero.label}
      </motion.p>

      <motion.h1
        variants={heroItemVariants}
        className="font-jost text-sakura-text mt-6 text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.95] font-bold tracking-tight"
      >
        {resonanceHero.title}
      </motion.h1>

      <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        <motion.p
          variants={heroItemVariants}
          className="font-jost text-sakura-text text-xl leading-snug tracking-tight md:text-2xl"
        >
          {resonanceHero.statement}
        </motion.p>
        <motion.p
          variants={heroItemVariants}
          className="font-zenmaru text-sakura-cobble text-base leading-relaxed md:max-w-md md:text-lg"
        >
          {resonanceHero.intro}
        </motion.p>
      </div>
    </motion.header>
  );
};

export default ResonanceHero;

import type { ResonanceSectionContent } from '@/content/resonance';
import { motion } from 'motion/react';

interface ResonanceSectionProps {
  section: ResonanceSectionContent;
}

const Annotation = ({ children }: { children: string }) => (
  <p className="font-dmmono text-sakura-cobble text-xs leading-relaxed tracking-wide">
    <span
      className="bg-sakura-accent mr-2 inline-block h-1.5 w-1.5 align-middle"
      aria-hidden="true"
    />
    {children}
  </p>
);

const ResonanceSection = ({ section }: ResonanceSectionProps) => {
  const { index, title, paragraphs, annotation } = section;

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="grid gap-8 md:grid-cols-[minmax(0,1fr)_180px] md:gap-10"
    >
      <div>
        <p className="index-mono text-sakura-accent mb-3" aria-hidden="true">
          {index}
        </p>
        <h2 className="font-jost text-sakura-text text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-zenmaru text-sakura-text/90 text-base leading-relaxed md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>
        {annotation && (
          <aside className="mt-6 md:hidden">
            <Annotation>{annotation}</Annotation>
          </aside>
        )}
      </div>

      {annotation && (
        <aside className="hidden md:block">
          <Annotation>{annotation}</Annotation>
        </aside>
      )}
    </motion.section>
  );
};

export default ResonanceSection;
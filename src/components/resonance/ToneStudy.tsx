import { motion } from 'motion/react';

const swatches = [
  { name: 'bg', className: 'bg-sakura-bg' },
  { name: 'surface', className: 'bg-sakura-surface' },
  { name: 'card', className: 'bg-sakura-card' },
  { name: 'stone', className: 'bg-sakura-stone' },
  { name: 'accent', className: 'bg-sakura-accent' },
  { name: 'bloom', className: 'bg-sakura-bloom' },
  { name: 'text', className: 'bg-sakura-text' }
];

interface ToneStudyProps {
  className?: string;
}

const ToneStudy = ({ className }: ToneStudyProps) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`border-sakura-stone/60 border ${className ?? ''}`}
    >
      <div className="divide-sakura-stone/40 flex h-16 divide-x md:h-20">
        {swatches.map(swatch => (
          <div key={swatch.name} className={`${swatch.className} flex-1`} />
        ))}
      </div>
      <div className="divide-sakura-stone/40 border-sakura-stone/60 flex divide-x border-t">
        {swatches.map(swatch => (
          <div key={swatch.name} className="flex-1 px-1 py-2 text-center">
            <span className="font-dmmono text-sakura-cobble text-[0.625rem] tracking-wide">
              {swatch.name}
            </span>
          </div>
        ))}
      </div>
      <figcaption className="label-editorial text-sakura-cobble border-sakura-stone/60 border-t px-3 py-2.5">
        The palette — as it appears in this theme
      </figcaption>
    </motion.figure>
  );
};

export default ToneStudy;

import { EditorialPullQuote } from '@/components/about';
import {
  ResonanceHero,
  ResonanceSection,
  ToneStudy
} from '@/components/resonance';
import AppLink from '@/components/ui/AppLink';
import EditorialDivider from '@/components/ui/EditorialDivider';
import PageContainer from '@/components/ui/PageContainer';
import {
  resonanceClosing,
  resonancePullQuote,
  resonanceSections
} from '@/content/resonance';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

function ResonancePage() {
  useDocumentTitle('Resonance');

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-6xl px-6 py-16"
      >
        {/* Back nav */}
        <div className="mb-12">
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Home
          </AppLink>
        </div>

        <ResonanceHero />

        <EditorialDivider weight="light" className="my-16 md:my-20" />

        {/* Essay */}
        <div className="mx-auto max-w-3xl space-y-14 md:space-y-16">
          <ResonanceSection section={resonanceSections[0]} />
          <ToneStudy />
          <ResonanceSection section={resonanceSections[1]} />
          <ResonanceSection section={resonanceSections[2]} />
        </div>

        {/* Pull quote centerpiece */}
        <div className="mx-auto my-16 max-w-4xl md:my-20">
          <EditorialPullQuote quote={resonancePullQuote} />
        </div>

        <div className="mx-auto max-w-3xl space-y-14 md:space-y-16">
          <ResonanceSection section={resonanceSections[3]} />

          {/* Closing */}
          <div>
            <EditorialDivider weight="light" className="mb-10" />
            <div className="space-y-4">
              {resonanceClosing.map((para, i) => (
                <p
                  key={i}
                  className="font-zenmaru text-sakura-text/90 text-base leading-relaxed md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 text-center md:mt-20">
          <AppLink
            to="/"
            className="font-dmmono text-sakura-cobble hover:text-sakura-accent inline-flex items-center gap-2 text-xs transition-colors"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Back to Home
          </AppLink>
        </div>
      </motion.div>
    </PageContainer>
  );
}

export default ResonancePage;
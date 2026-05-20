import { lazy, Suspense } from 'react';

const AboutHero     = lazy(() => import('../components/AboutUs/AboutHero'));
const AboutFoundation     = lazy(() => import('../components/AboutUs/AboutFoundation'));
const AboutStats     = lazy(() => import('../components/AboutUs/AboutStats'));
const AboutPosture     = lazy(() => import('../components/AboutUs/AboutPosture'));
const AboutTeam     = lazy(() => import('../components/AboutUs/AboutTeam'));
const AboutGlobal     = lazy(() => import('../components/AboutUs/AboutGlobal'));
const Certifications     = lazy(() => import('../components/AboutUs/Certifications'));
const TalkToExpert     = lazy(() => import('../components/AboutUs/TalkToExpert'));
const AboutTimeline    = lazy(() => import('../components/AboutUs/AboutTimeline'));

/*const AboutMission  = lazy(() => import('../components/Aboutus/AboutMission'));
const AboutStats    = lazy(() => import('../components/Aboutus/AboutStats'));
const AboutTeam     = lazy(() => import('../components/Aboutus/AboutTeam'));
const AboutTimeline = lazy(() => import('../components/Aboutus/AboutTimeline'));
const AboutValues   = lazy(() => import('../components/Aboutus/AboutValues'));
const AboutPartners = lazy(() => import('../components/Aboutus/AboutPartners'));
const AboutCareers  = lazy(() => import('../components/Aboutus/AboutCareers'));
const AboutCTA      = lazy(() => import('../components/Aboutus/AboutCTA'));*/

// ── Loading spinner (same pattern as ForMSPsPage) ───────────
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FF5536] border-t-transparent rounded-full animate-spin" />
  </div>
);

// ── Page component ───────────────────────────────────────────
const Aboutus = () => {
  return (
    <div className="bg-[#030407] min-h-screen">

      {/* Section 1 — Hero: "Offense. Defense. Certainty." */}
      <Suspense fallback={<SectionLoader />}>
        <AboutHero />
      </Suspense>
     <Suspense fallback={<SectionLoader />}>
        <AboutFoundation />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutStats />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutPosture />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutTeam />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutTimeline />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutGlobal />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TalkToExpert />
      </Suspense>
      
    </div>
  );
};

export default Aboutus;
import { lazy, Suspense } from 'react';


// Lazy load components for better performance
const IndustriesHero = lazy(() => import('../components/industries/IndustriesHero'));
const IndustriesStats = lazy(() => import('../components/industries/IndustriesStats'));
const IndustriesProblem = lazy(() => import('../components/industries/IndustriesProblem'));
const IndustriesSolutions = lazy(() => import('../components/industries/IndustriesSolutions'));
const IndustriesCompliance = lazy(() => import('../components/industries/IndustriesCompliance'));
const IndustriesTargetAudience = lazy(() => import('../components/industries/IndustriesTargetAudience'));
const IndustriesCaseStudies = lazy(() => import('../components/industries/IndustriesCaseStudies'));
const IndustriesTestimonials = lazy(() => import('../components/industries/IndustriesTestimonials'));
const WhyAuriseg = lazy(() => import('../components/industries/WhyAuriseg'));
const FAQ = lazy(() => import('../components/industries/Faq'));
const SocWhatYouGet = lazy(() => import('../components/industries/SocWhatYouGet'));
const TalkToExpert = lazy(() => import('../components/industries/TalkToExpert'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const IndustriesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Suspense fallback={<SectionLoader />}>
        <IndustriesHero />
      </Suspense>
    </div>
  );
};

export default IndustriesPage;
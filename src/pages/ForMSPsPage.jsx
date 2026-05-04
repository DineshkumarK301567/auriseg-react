import { lazy, Suspense } from 'react';

// Lazy load components for better performance
const MSPHero = lazy(() => import('../components/msp-sections/MSPHero'));
const MSPStats = lazy(() => import('../components/msp-sections/MSPStats'));
const MSPProblems = lazy(() => import('../components/msp-sections/MSPProblems'));
const MSPServices = lazy(() => import('../components/msp-sections/MSPServices'));


// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-[#FE5538] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const ForMSPsPage = () => {
  return (
    <div className="bg-dark min-h-screen">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        
        {/* Hero Section */}
        <Suspense fallback={<SectionLoader />}>
          <MSPHero />
        </Suspense>
        
        {/* Stats Section - 4 boxes with numbers */}
        <Suspense fallback={<SectionLoader />}>
          <MSPStats />
        </Suspense> 
        <Suspense fallback={<SectionLoader />}>
          <MSPProblems />
        </Suspense> 
        <Suspense fallback={<SectionLoader />}>
          <MSPServices />
        </Suspense> 
      </div>
    </div>
  );
};

export default ForMSPsPage;
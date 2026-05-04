import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  const scrollRef = useRef(null);

  const industries = [
    {
      title: 'Healthcare',
      description: 'Safeguarding patient ecosystems through compliance-aligned monitoring and encrypted infrastructure resilience.',
      link: '/industries/healthcare',
      linkText: 'Know More →',
      image: '/images/industries/healthcare.jpg',
      mobileImage: '/images/industries/mobile/healthcare.png'
    },
    {
      title: 'Financial Services',
      description: 'Real-time fraud defense and regulatory assurance protecting transaction integrity.',
      link: '/industries/financial',
      linkText: 'Know More →',
      image: '/images/industries/financial.jpg',
      mobileImage: '/images/industries/mobile/financial.png'
    },
    {
      title: 'Manufacturing',
      description: 'Operational technology hardening and supply-chain risk defense.',
      link: '/industries/manufacturing',
      linkText: 'Know More →',
      image: '/images/industries/manufacturing.jpg',
      mobileImage: '/images/industries/mobile/manufacturing.png'
    },
    {
      title: 'Technology',
      description: 'DevOps-driven scalability, secure software development lifecycle, and cloud-native protection.',
      link: '/industries/technology',
      linkText: 'Know More →',
      image: '/images/industries/technology.jpg',
      mobileImage: '/images/industries/mobile/technology.png'
    },
    {
      title: 'Government & Critical Infrastructure',
      description: 'CERT-In aligned governance frameworks ensuring national-grade resilience.',
      link: '/industries/government',
      linkText: 'Know More →',
      image: '/images/industries/government.jpg',
      mobileImage: '/images/industries/mobile/government.png'
    }
  ];

  // Desktop: go to previous slide
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - visibleCount));
  };

  // Desktop: go to next slide
  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + visibleCount;
      return next >= industries.length ? prev : Math.min(next, industries.length - visibleCount);
    });
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + visibleCount >= industries.length;

  const visibleIndustries = industries.slice(currentIndex, currentIndex + visibleCount);

  // Mobile: scroll snap dot click
  const handleMobileDotClick = (index) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        const cardWidth = cards[index].offsetWidth;
        scrollRef.current.scrollTo({ left: index * (cardWidth + 16), behavior: 'smooth' });
      }
    }
    setCurrentIndex(index);
  };

  // Mobile: track active dot on scroll
  const handleMobileScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cards = scrollRef.current.children;
      if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const index = Math.round(scrollLeft / (cardWidth + 16));
        if (index >= 0 && index < industries.length) {
          setCurrentIndex(index);
        }
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom px-4 sm:px-6 md:px-8">

        {/* Badge */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-8">
          <div
            className="inline-flex items-center justify-center gap-2"
            style={{
              border: '1px solid #CACACA',
              padding: '10px 11px',
              backgroundColor: '#FFFFFF'
            }}
          >
            <img
              src="/icons/playbook-icon.png"
              alt="icon"
              style={{ width: '8px', height: '11.2px' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '16px',
              color: '#FE5538'
            }}>
              INDUSTRIES
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <h2 style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(28px, 5vw, 44px)',
            lineHeight: '110%',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            color: '#000000',
            maxWidth: '1238px',
            margin: '0 auto'
          }}
          className="md:!text-left"
          >
            Sector-Specific <span style={{ color: '#FE5538' }}>Cybersecurity Expertise</span>
          </h2>
        </div>

        {/* ── DESKTOP CARDS ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 md:gap-8 items-stretch">
            {visibleIndustries.map((industry, index) => (
              <div
                key={currentIndex + index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-200"
              >
                {/* Desktop Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FE5538] transition">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {industry.description}
                  </p>

                  {/* Know More Button — visible on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                    <Link
                      to={industry.link}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        border: '1.5px solid #111111',
                        backgroundColor: '#FFFFFF',
                        color: '#111111',
                        fontWeight: 600,
                        fontSize: '14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#111111';
                      }}
                    >
                      Know More <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-[#FE5538] transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Desktop Arrow Navigation - Updated with proper states */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 border ${
                isPrevDisabled 
                  ? 'bg-gray-300 border-gray-300 cursor-not-allowed' 
                  : 'bg-white border-black hover:bg-[#FE5538] hover:border-[#FE5538] cursor-pointer'
              }`}
              style={{ width: '44px', height: '44px' }}
            >
              <svg 
                className={`w-5 h-5 transition-colors duration-300 ${
                  isPrevDisabled 
                    ? 'text-gray-500' 
                    : 'text-black group-hover:text-white'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 border ${
                isNextDisabled 
                  ? 'bg-gray-300 border-gray-300 cursor-not-allowed' 
                  : 'bg-white border-black hover:bg-[#FE5538] hover:border-[#FE5538] cursor-pointer'
              }`}
              style={{ width: '44px', height: '44px' }}
            >
              <svg 
                className={`w-5 h-5 transition-colors duration-300 ${
                  isNextDisabled 
                    ? 'text-gray-500' 
                    : 'text-black group-hover:text-white'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── MOBILE CAROUSEL ── */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleMobileScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              gap: '16px',
              paddingBottom: '16px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            className="hide-scrollbar"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                style={{
                  scrollSnapAlign: 'start',
                  minWidth: '280px',
                  maxWidth: '85%',
                  flexShrink: 0,
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col"
              >
                {/* Image - EXACT SIZE 289×234 */}
                <div className="relative" style={{ width: '289px', height: '234px' }}>
                  <img
                    src={industry.mobileImage || industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                    style={{ width: '289px', height: '234px' }}
                    loading="lazy"
                    onError={(e) => { 
                      e.target.onerror = null;
                      e.target.src = industry.image;
                    }}
                  />
                </div>

                {/* Content - PROPER ALIGNMENT */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#FE5538] mb-3">
                    {industry.title}
                  </h3>
                  
                  {/* Description - Properly aligned */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {industry.description}
                  </p>

                  {/* Know More Button */}
                  <Link
                    to={industry.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-800 bg-white text-gray-800 font-semibold text-sm rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 self-start mt-auto"
                  >
                    Know More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {industries.map((_, dotIndex) => {
              const isActive = currentIndex === dotIndex;
              return (
                <button
                  key={dotIndex}
                  onClick={() => handleMobileDotClick(dotIndex)}
                  className={`transition-all duration-300 rounded-full h-2 ${
                    isActive ? 'w-8 bg-[#FE5538]' : 'w-2 bg-gray-300'
                  }`}
                />
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Industries;
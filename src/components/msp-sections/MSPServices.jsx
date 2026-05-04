import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const MSPServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      title: 'SOC Operations',
      description: 'Fully managed SOC operations running continuously across your entire client environment.',
      link: '/services/soc-operations',
      linkText: 'Explore →',
      icon: '/icons/msp/soc-icon.png'
    },
    {
      title: 'Threat Monitoring',
      description: 'Real-time threat monitoring across endpoints, networks, and your cloud infrastructure.',
      link: '/services/threat-monitoring',
      linkText: 'Explore →',
      icon: '/icons/msp/threat-icon.png'
    },
    {
      title: 'Incident Response',
      description: 'Structured incident response to contain, investigate, and remediate active security threats.',
      link: '/services/incident-response',
      linkText: 'Explore →',
      icon: '/icons/msp/incident-icon.png'
    },
    {
      title: 'White-Label SOC Services',
      description: 'SOC services delivered entirely under your brand, identity, and client reporting.',
      link: '/services/white-label-soc',
      linkText: 'Explore →',
      icon: '/icons/msp/whitelabel-icon.png'
    },
    {
      title: 'Co-Delivery and Enablement',
      description: 'Work with our analysts to build your internal security delivery capabilities.',
      link: '/services/co-delivery',
      linkText: 'Explore →',
      icon: '/icons/msp/codelivery-icon.png'
    },
    {
      title: 'White-Label Security Services',
      description: 'Rebrandable threat reports, vulnerability scans, and compliance outputs sold as yours.',
      link: '/services/white-label-security',
      linkText: 'Explore →',
      icon: '/icons/msp/whitelabel-security-icon.png'
    }
  ];

  // Mobile scroll handlers
  const GAP = 12;

const handleScroll = () => {
  if (scrollRef.current) {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 0;

    const index = Math.round(scrollLeft / (cardWidth + GAP));

    setCurrentIndex(index);
    setScrollPosition(scrollLeft);
  }
};

  const scrollToCard = (index) => {
  if (!scrollRef.current) return;

  const card = scrollRef.current.children[index];

  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'center'
  });

  setCurrentIndex(index);
};

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container-custom px-0 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        
        {/* SERVICE Badge */}
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
            SERVICE
            </span>
          </div>
        </div>
        {/* Section Header */}
       <div className="mb-10 md:mb-12">
  <h2
    style={{
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
    Everything You Need for <br className="hidden md:block" />
    Security Already Built
  </h2>
</div>

        {/* DESKTOP VIEW - Grid Layout with NO SPACES and NO ROUNDED CORNERS */}
        <div className="hidden md:block">
          <div className="flex flex-wrap">
            {services.map((service, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  width: '33.333%',
                  minHeight: '308px',
                  border: '0.5px solid #ADADAD',
                  borderTop: index < 3 ? '0.5px solid #ADADAD' : 'none',
                  borderLeft: index % 3 === 0 ? '0.5px solid #ADADAD' : 'none'
                }}
              >
                {/* Hover Background Overlay */}
                <div className={`absolute inset-0 bg-[#FF5536] transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Content - Relative to stay above overlay */}
                <div className="relative z-10 p-6">
                  {/* Icon Container - Normal: #FF5536, Hover: White */}
                  <div className="mb-4">
                    <img 
                      src={service.icon}
                      alt={service.title}
                      className="w-11 h-11 object-contain transition-all duration-300"
                      style={{ 
                        width: '44px', 
                        height: '44px',
                        filter: hoveredIndex === index ? 'brightness(0) invert(1)' : 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.backgroundColor = hoveredIndex === index ? '#FFFFFF' : '#FF5536';
                        e.target.style.borderRadius = '8px';
                        e.target.style.padding = '10px';
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-bold mb-3 transition-all duration-300"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(16px, 3vw, 26px)',
                      lineHeight: '100%',
                      letterSpacing: '-2%',
                      color: hoveredIndex === index ? '#FFFFFF' : '#13284C'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-4 leading-relaxed transition-all duration-300"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 'clamp(12px, 3vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: hoveredIndex === index ? '#FFFFFF' : '#606060'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Explore Button - Appears on hover (Desktop only) */}
                  <div className={`transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center justify-center font-semibold transition-all duration-300 hover:gap-2"
                      style={{
                        width: '133px',
                        height: '50px',
                        background: 'transparent',
                        border: '1px solid #FFFFFF',
                        borderRadius: '0px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        gap: '8px'
                      }}
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW - Horizontal Scroll Carousel (Square cards, no rounded corners) */}
        <div className="md:hidden relative" role="region" aria-label="Services carousel">
          {/* Carousel Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            role="list"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              gap: '12px',
              paddingLeft: 'calc(50% - 133.5px)',      // 👈 space from left screen
              paddingRight:  'calc(50% - 133.5px)'  
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                role="listitem"
                className="flex-shrink-0 snap-center bg-white"
                style={{
                  width: '267px',
                  minHeight: '209px',
                  border: '0.78px solid #ADADAD',
                  
                }}
              >
                {/* Content */}
                <div className="p-4">
                  {/* Icon - Always #FF5536 on mobile */}
                  <div className="mb-3">
                    <img 
                      src={service.icon}
                      alt={service.title}
                      className="w-9 h-9 object-contain"
                      style={{ 
                        width: '35px', 
                        height: '35px',
                        filter: 'invert(48%) sepia(98%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.backgroundColor = '#FF5536';
                        e.target.style.borderRadius = '6px';
                        e.target.style.padding = '8px';
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '-2%',
                      color: '#13284C'
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-3 leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#606060'
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Explore Button - Always visible on mobile */}
                  <Link 
                    to={service.link}
                    className="inline-flex items-center justify-center font-semibold"
                    style={{
                      width: '97px',
                      height: '34px',
                      background: 'transparent',
                      border: '1px solid #000000',
                      borderRadius: '0px',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '11px',
                      color: '#000000',
                      textDecoration: 'none',
                      gap: '6px'
                    }}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center items-center gap-12 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous services"
              className={`flex items-center justify-center transition-all duration-300 w-12 h-12 ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:opacity-80'
              }`}
              style={{
                background: '#FF5536',
                borderRadius: '50%'
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === services.length - 1}
              aria-label="Next services"
              className={`flex items-center justify-center transition-all duration-300 w-12 h-12 ${
                currentIndex === services.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:opacity-80'
              }`}
              style={{
                background: '#FF5536',
                borderRadius: '50%'
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default MSPServices;
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const services = [
    {
      title: 'Offshore Security Operations',
      description: 'Enterprise-grade SOC capabilities delivered through scalable offshore expertise.',
      link: '/services/offshore-soc',
      linkText: 'Explore Offshore SOC Services →',
      image: '/images/services.png'
    },
    {
      title: 'Managed Security & Compliance Advisory',
      description: 'Security governance and auditing engineered for evolving risk landscapes.',
      link: '/services/compliance-advisory',
      linkText: 'Learn More →',
      image: '/images/compliance-advisory.jpg'
    },
    {
      title: 'White-Label Security Enablement',
      description: 'Enterprise cybersecurity infrastructure ready for MSP deployment.',
      link: '/services/white-label',
      linkText: 'Explore White-Label →',
      image: '/images/white-label.jpg'
    }
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  // Handle scroll to update active card based on scroll position
  const handleScroll = (e) => {
    const container = e.target;
    const cardWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeCard && newIndex >= 0 && newIndex < services.length) {
      setActiveCard(newIndex);
    }
    setScrollPosition(scrollLeft);
  };

  // Scroll to specific card when dot is clicked
  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveCard(index);
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-black py-16 md:py-20">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        {/* 1. SERVICES - Border Top Only */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div 
            className="px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] border text-center inline-flex items-center justify-center gap-1.5 sm:gap-2"
            style={{
              border: '1px solid #444444',
              borderRadius: '0px',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            <img 
              src="/icons/playbook-icon.png" 
              alt="icon"
              style={{
                width: '6px',
                height: '8.4px',
                borderRadius: '0.4px'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span className="uppercase text-[12px] sm:text-[14px] md:text-[16px] text-center"
              
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-3%',
                color: '#FFFFFF'
              }}
            >
              SERVICES
            </span>
          </div>
        </div>

        {/* 2. Security Architecture Heading */}
       <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <h2 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 48px)',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              maxWidth: '1152px'
            }}
          >
            Security Architecture for the <span style={{ color: '#FE5538' }}>AI Era</span>
          </h2>
        </div>

        {/* 3. Services Cards - Desktop Grid & Mobile Swipe */}
        
        {/* DESKTOP VIEW - Grid layout (3 columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              onClick={() => handleCardClick(index)}
              className={`
                group relative border transition-all duration-300 overflow-hidden cursor-pointer
                ${activeCard === index 
                  ? 'bg-[#FE5538] border-[#FE5538]' 
                  : 'bg-black border-gray-800 hover:bg-[#FE5538]'
                }
              `}
              style={{
                width: '100%',
                maxWidth: '413px',
                minHeight: '273px',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="p-5 sm:p-6 md:p-8 transition-all duration-300 flex flex-col h-full">
                <h3 
                  className="font-bold mb-3 transition-all duration-300"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 4.5vw, 23px)',
                    lineHeight: '1.3',
                    letterSpacing: '0%',
                    color: (activeCard === index) ? '#000000' : '#FFFFFF'
                  }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="mb-4 transition-all duration-300 flex-grow"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(13px, 3.5vw, 14px)',
                    lineHeight: '1.5',
                    letterSpacing: '0%',
                    color: (activeCard === index) ? '#000000' : '#9CA3AF'
                  }}
                >
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center font-semibold transition-all duration-300 group-hover:gap-2"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: 'clamp(13px, 3.5vw, 16px)',
                      lineHeight: '1.4',
                      letterSpacing: '0%',
                      color: (activeCard === index) ? '#000000' : '#FE5538'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.linkText}
                  </Link>
                </div>
              </div>

              <style>
                {`
                  .group:hover .p-5 h3, .group:hover .p-6 h3, .group:hover .p-6 h3 {
                    color: #000000 !important;
                  }
                  .group:hover .p-5 p, .group:hover .p-6 p, .group:hover .p-6 p {
                    color: #000000 !important;
                  }
                  .group:hover .p-5 a, .group:hover .p-6 a, .group:hover .p-6 a {
                    color: #000000 !important;
                  }
                `}
              </style>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW - Horizontal Swipe Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            
            {services.map((service, index) => (
              <div 
                key={index} 
                onClick={() => handleCardClick(index)}
                className={`
                  w-full flex-shrink-0 snap-center
                  group relative border transition-all duration-300 overflow-hidden cursor-pointer
                  ${activeCard === index 
                    ? 'bg-[#FE5538] border-[#FE5538]' 
                    : 'bg-black border-gray-800 hover:bg-[#FE5538]'
                  }
                `}
                style={{
                  minHeight: '280px',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="p-5 transition-all duration-300 flex flex-col h-full">
                  <h3 
                    className="font-bold mb-3 transition-all duration-300"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '1.3',
                      letterSpacing: '0%',
                      color: (activeCard === index) ? '#000000' : '#FFFFFF'
                    }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="mb-4 transition-all duration-300 flex-grow"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.5',
                      letterSpacing: '0%',
                      color: (activeCard === index) ? '#000000' : '#9CA3AF'
                    }}
                  >
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={service.link}
                      className="inline-flex items-center font-semibold transition-all duration-300"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '1.4',
                        letterSpacing: '0%',
                        color: (activeCard === index) ? '#000000' : '#FE5538'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {service.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Dynamic Banner Image */}
        <div className="mt-8 md:mt-12 w-full">
          <img 
            src={services[activeCard].image}
            alt={`${services[activeCard].title} banner`}
            style={{
              width: '100%',
              maxWidth: '1240px',
              height: 'auto',
              margin: '0 auto',
              display: 'block'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/1240x353/1A1F2E/FE5538?text=Security+Banner";
            }}
          />
        </div>

        {/* 5. Navigation Dots - BELOW the banner image (Mobile only) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                activeCard === index 
                  ? 'w-8 h-2 bg-[#FE5538]' 
                  : 'w-2 h-2 bg-[#3A3A4A] hover:bg-[#FE5538] hover:w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { useState } from 'react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      // Slide 1 - Original Design
      badgeText: "MODERN CISO PLAYBOOK",
      badgeIcon: "/icons/playbook-icon.png",
      title: <>
        Security Leadership for the <span style={{ color: '#FE5538' }}>AI Threat Era</span>
      </>,
      description: "Real-time AI-driven threat monitoring and enterprise network protection — built for the security challenges of tomorrow.",
      buttonText: "Talk to an Expert →",
      backgroundImage: null,
      backgroundVideo: "/videos/Home Page Animation.mp4",
      backgroundOverlay: null,
      mobileImage: "/images/hero/slide1-mobile.jpg",
      titleStyle: {
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontSize: 'clamp(32px, 8vw, 62px)',
        lineHeight: 'clamp(38px, 9vw, 74px)',
        letterSpacing: '-2%',
        fontWeight: 500,
        color: '#FFFFFF'
      }
    },
    {
      // Slide 2 - Cloud-Native Fortress Design
      badgeText: "CLOUD-NATIVE FORTRESS",
      badgeIcon: "/icons/playbook-icon.png",
      title: "Unified Security Across Modern Infrastructure",
      description: null,
      buttonText: "Schedule a Consultation →",
      backgroundImage: "/images/hero/slide2.jpg",
      backgroundOverlay: "linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 87.74%)",
      mobileImage: "/images/hero/slide2-mobile.jpg",
      titleStyle: {
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(32px, 5vw, 48px)',
        lineHeight: '110%',
        letterSpacing: '-2%',
        color: '#FFFFFF',
        maxWidth: '100%'
      }
    },
    {
      // Slide 3 - Global 24/7 Delivery Design
      badgeText: "GLOBAL 24/7 DELIVERY",
      badgeIcon: "/icons/playbook-icon.png",
      title: "CERT-In empaneled MSSP with global delivery capability",
      description: null,
      buttonText: "View Security Impact →",
      backgroundImage: "/images/hero/slide3.jpg",
      backgroundOverlay: "linear-gradient(270deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.10) 40%, rgba(0, 0, 0, 0) 87.74%)",
      mobileImage: "/images/hero/slide3-mobile.jpg",
      titleStyle: {
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(32px, 5vw, 48px)',
        lineHeight: '120%',
        letterSpacing: '-2%',
        color: '#FFFFFF',
        maxWidth: '90%'
      }
    },
    {
      // Slide 4 - 40% Uptime Gain Design
      badgeText: "40% UPTIME GAIN",
      badgeIcon: "/icons/playbook-icon.png",
      title: "Protecting Global Supply Chains from Digital Risk",
      description: null,
      buttonText: "Talk to Our Experts →",
      backgroundImage: "/images/hero/slide4.jpg",
      backgroundOverlay: "linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 87.74%)",
      mobileImage: "/images/hero/slide4-mobile.jpg",
      titleStyle: {
        fontFamily: "'Cabinet Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(32px, 5vw, 48px)',
        lineHeight: '120%',
        letterSpacing: '-2%',
        color: '#FFFFFF',
        maxWidth: '100%'
      }
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative w-full min-h-[721px] flex items-center overflow-hidden bg-dark">
      {/* DESKTOP BACKGROUNDS - Only visible on desktop */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        {/* Desktop Background for Slides 2-4 */}
        {currentSlide.backgroundImage && (
          <>
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${currentSlide.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div 
              className="absolute inset-0"
              style={{
                background: currentSlide.backgroundOverlay
              }}
            ></div>
          </>
        )}

        {/* Desktop Video for Slide 1 */}
        {!currentSlide.backgroundImage && currentSlide.backgroundVideo && (
          <>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={currentSlide.backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </>
        )}
      </div>

      {/* Content - Vertically Centered for Desktop */}
      <div className="container-custom w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 min-h-[721px]">
          {/* Left Column - Content */}
          <div className="w-full max-w-full lg:max-w-[600px] flex flex-col items-center lg:items-start">
            {/* Badge - With Border and Icon */}
            <div className="inline-block mb-4 sm:mb-6">
              <div 
                className="px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] border text-center inline-flex items-center justify-center gap-1.5 sm:gap-2"
                style={{
                  border: '1px solid #444444',
                  borderRadius: '0px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'transparent'
                }}
              >
                <img 
                  src={currentSlide.badgeIcon}
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
                <span 
                  className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#FFFFFF'
                  }}
                >
                  {currentSlide.badgeText}
                </span>
              </div>
            </div>

            {/* Title */}
            <div 
              className="mb-3 sm:mb-4 text-center lg:text-left transition-all duration-500 w-full"
              style={currentSlide.titleStyle}
            >
              {currentSlide.title}
            </div>
            
            {/* Description Text - Only for Slide 1 */}
            {currentSlide.description && (
              <p 
                className="mb-5 sm:mb-6 text-center lg:text-left transition-all duration-500"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(13px, 4vw, 15.5px)',
                  lineHeight: 'clamp(20px, 5vw, 25.19px)',
                  letterSpacing: '0px',
                  color: '#E0E0E0',
                  maxWidth: '100%',
                  width: '100%'
                }}
              >
                {currentSlide.description}
              </p>
            )}
            
            {/* Button */}
            <a 
              href="#consultation"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                width: activeSlide === 0 ? 'clamp(180px, 45vw, 217px)' : 'clamp(180px, 40vw, 211px)',
                height: activeSlide === 0 ? 'clamp(42px, 10vw, 50px)' : 'clamp(42px, 10vw, 60px)',
                background: '#FF5536',
                borderRadius: activeSlide === 0 ? '16777200px' : '5px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                lineHeight: '100%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '0 16px'
              }}
            >
              {currentSlide.buttonText}
            </a>

            {/* MOBILE IMAGE - Full size, no constraints, can overlap */}
            {currentSlide.mobileImage && (
              <div className="md:hidden w-full flex justify-center my-6">
                <img 
                  src={currentSlide.mobileImage}
                  alt="Mobile visual"
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              </div>
            )}

            {/* Navigation Dots */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === index 
                      ? 'w-8 h-2 bg-[#FE5538]' 
                      : 'w-2 h-2 bg-[#3A3A4A] hover:bg-[#FE5538] hover:w-4'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column - Empty Space (hidden on mobile) */}
          <div className="flex-1 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
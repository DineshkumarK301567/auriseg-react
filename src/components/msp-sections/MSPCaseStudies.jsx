import React, { useState } from 'react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Multi-Finance Company Mauritius",
      image: "/images/case-studies/case-study-1.jpg",
      challenge: "MSP lacked in-house SOC capability but faced an enterprise finance client demanding 24/7 monitoring and compliance reporting.",
      solution: "Auriseg deployed white-label SOC within 5 days, with full ISO 27001-aligned reporting under the MSP's brand identity.",
      impact: "MSP retained a $240K annual contract and expanded to 3 additional clients within 6 months using the same white-label model.",
      readMoreLink: "/case-studies/multi-finance-company-mauritius"
    },
    {
      id: 2,
      title: "Global Retail Chain",
      image: "/images/case-studies/case-study-2.jpg",
      challenge: "Retail chain needed SOC compliance across 50+ locations but lacked internal security team.",
      solution: "Auriseg provided 24/7 monitoring with custom compliance reporting for PCI DSS requirements.",
      impact: "Client achieved full compliance and reduced security incidents by 75% within first 3 months.",
      readMoreLink: "/case-studies/global-retail-chain"
    },
    {
      id: 3,
      title: "Healthcare Provider Network",
      image: "/images/case-studies/case-study-3.jpg",
      challenge: "Healthcare provider required HIPAA-compliant security monitoring across multiple facilities.",
      solution: "Deployed white-label SOC with specialized healthcare threat detection and reporting.",
      impact: "Achieved HIPAA compliance and prevented 3 major ransomware attempts in first 6 months.",
      readMoreLink: "/case-studies/healthcare-provider-network"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === caseStudies.length - 1;

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section 
        className="hidden md:block relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '1440px',
          minHeight: '817.5512084960938px',
          padding: '100px 100px 0 100px',
          gap: '10px',
          background: '#FFFFFF'
        }}
      >
        <div className="relative w-full">
          {/* Header with CASE STUDIES badge and arrows in same row */}
          <div className="flex justify-between items-center mb-12">
            {/* CASE STUDIES Badge */}
            <div
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                padding: '10px 11px',
                marginLeft: '-60px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{ width: '8px', height: '11.2px',
                
                 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                color: '#FE5538',
                
              }}>
                CASE STUDIES
              </span>
            </div>

            {/* Arrow Buttons - Orange circular */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={isPrevDisabled}
                className={`flex items-center justify-center transition-all duration-300 ${
                  isPrevDisabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-80 cursor-pointer'
                }`}
                style={{
                  width: '50.84745788574219px',
                  height: '50.84745788574219px',
                  padding: '12.71px',
                  backgroundColor: '#FF5536',
                  border: 'none',
                  borderRadius: '50.85px'
                }}
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={isNextDisabled}
                className={`flex items-center justify-center transition-all duration-300 ${
                  isNextDisabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:opacity-80 cursor-pointer'
                }`}
                style={{
                  width: '50.84745788574219px',
                  height: '50.84745788574219px',
                  padding: '12.71px',
                  backgroundColor: '#FF5536',
                  border: 'none',
                  borderRadius: '50.85px'
                }}
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Slide Content - Flex row with image offset left */}
          <div className="flex items-start gap-8">
            {/* Left Column - Image with left offset (-22.21px) */}
            <div 
              className="flex-shrink-0"
              style={{
                width: '639.4193115234375px',
                marginLeft: '-60px'
              }}
            >
              <img 
                src={caseStudies[currentSlide].image}
                alt={caseStudies[currentSlide].title}
                style={{
                  width: '639.4193115234375px',
                  height: '426.1729736328125px',
                  objectFit: 'cover',
                  opacity: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/639x426/CCCCCC/FFFFFF?text=Case+Study+Image';
                }}
              />
            </div>

            {/* Right Column - Content with exact width 595px */}
            <div 
              className="flex-shrink-0"
              style={{
                width: '595px',
                gap: '30px',
                opacity: 1
              }}
            >
              {/* Title Section */}
              <div
                style={{
                  width: '595px',
                  gap: '5px',
                  opacity: 1,
                  marginBottom: '30px'
                }}
              >
                <h2 
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '25px',
                    lineHeight: '110%',
                    letterSpacing: '0%',
                    color: '#030407',
                    margin: 0
                  }}
                >
                  {caseStudies[currentSlide].title}
                </h2>
              </div>

              {/* Challenge and Solution - Side by side */}
              <div 
                className="flex gap-8"
                style={{
                  width: '500px',
                  gap: '0',
                  opacity: 1,
                  marginBottom: '30px'
                }}
              >
                {/* Challenge Column */}
                <div style={{ flex: 1 }}>
                  <div 
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 700,
                      fontSize: '15px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                      color: '#13284C',
                      marginBottom: '16px'
                    }}
                  >
                    Challenge
                  </div>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '20.15px',
                      letterSpacing: '0%',
                      color: '#606060',
                      margin: 0,
                      maxWidth: '180px' 
                    }}
                  >
                    {caseStudies[currentSlide].challenge}
                  </p>
                </div>

                {/* Solution Column */}
                <div style={{ flex: 1 }}>
                  <div 
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 700,
                      fontSize: '15px',
                      lineHeight: '16px',
                      letterSpacing: '0px',
                      color: '#13284C',
                      marginBottom: '16px'
                    }}
                  >
                    Solution
                  </div>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '20.15px',
                      letterSpacing: '0%',
                      color: '#606060',
                      margin: 0,
                      maxWidth: '180px' 
                    }}
                  >
                    {caseStudies[currentSlide].solution}
                  </p>
                </div>
              </div>

              {/* Impact Section with Background */}
              <div 
                style={{
                  width: '400px',
                  borderRadius: '8px',
                  background: '#F7F7F7',
                  padding: '20px 24px',
                  marginBottom: '30px'
                }}
              >
                <div 
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '16px',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    color: '#FF5536',
                    marginBottom: '8px'
                  }}
                >
                  IMPACT
                </div>
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '10px',
                    lineHeight: '20.15px',
                    letterSpacing: '0%',
                    color: '#030407',
                    margin: 0
                  }}
                >
                  {caseStudies[currentSlide].impact}
                </p>
              </div>

              {/* Read Case Study Button - Curved/Cave format (border-radius) */}
              <a 
                href={caseStudies[currentSlide].readMoreLink}
                className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#030407] hover:text-white hover:border-[#030407]"
                style={{
                  width: '213px',
                  height: '50px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#030407',
                  borderRadius: '30px',
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#030407'
                }}
              >
                Read Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View - Visible only on mobile (UNCHANGED) */}
      <section className="md:hidden w-full" style={{ background: '#FFFFFF' }}>
        <div 
          className="mx-auto flex flex-col"
          style={{
            width: '374.244140625px',
            minHeight: '970.0685424804688px',
            gap: '32px',
            background: '#FFFFFF',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '40px',
            paddingBottom: '40px'
          }}
        >
          {/* CASE STUDIES Badge - Mobile */}
          <div className="flex justify-center w-full">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                paddingTop: '8px',
                paddingRight: '12px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                backgroundColor: '#FFFFFF'
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
              <span 
                className="uppercase"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FE5538'
                }}
              >
                CASE STUDIES
              </span>
            </div>
          </div>

          {/* Slide Content - Mobile */}
          <div className="w-full">
            {/* Image - Mobile */}
            <div className="w-full mb-6">
              <img 
                src={caseStudies[currentSlide].image}
                alt={caseStudies[currentSlide].title}
                style={{
                  width: '374.244140625px',
                  height: '249.4337158203125px',
                  objectFit: 'cover',
                  opacity: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/374x249/CCCCCC/FFFFFF?text=Case+Study';
                }}
              />
            </div>

            {/* Title - Mobile */}
            <h2 
              className="text-center mb-4"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '120%',
                letterSpacing: '-2%',
                color: '#030407',
                width: '100%',
                textAlign: 'center',
                marginBottom: '24px'
              }}
            >
              {caseStudies[currentSlide].title}
            </h2>

            {/* Challenge Section - Mobile */}
            <div className="mb-5 px-4">
              <div 
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  color: '#13284C',
                  marginBottom: '12px'
                }}
              >
                Challenge
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20.15px',
                  letterSpacing: '0%',
                  color: '#606060',
                  margin: 0
                }}
              >
                {caseStudies[currentSlide].challenge}
              </p>
            </div>

            {/* Solution Section - Mobile */}
            <div className="mb-5 px-4">
              <div 
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  color: '#13284C',
                  marginBottom: '12px'
                }}
              >
                Solution
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20.15px',
                  letterSpacing: '0%',
                  color: '#606060',
                  margin: 0
                }}
              >
                {caseStudies[currentSlide].solution}
              </p>
            </div>

            {/* Impact Section - Mobile with Background */}
            <div className="mb-6 mx-4"
              style={{
                borderRadius: '8px',
                background: '#F7F7F7',
                border: '1px solid #E8E8E4',
                padding: '16px'
              }}
            >
              <div 
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 400,
                  fontSize: '10px',
                  lineHeight: '16px',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#FF5536',
                  marginBottom: '8px'
                }}
              >
                IMPACT
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: '#030407',
                  margin: 0
                }}
              >
                {caseStudies[currentSlide].impact}
              </p>
            </div>

            {/* Read Case Study Button - Mobile */}
            <div className="flex justify-center px-4">
              <a 
                href={caseStudies[currentSlide].readMoreLink}
                className="inline-flex items-center justify-center transition-all duration-300 hover:bg-[#030407] hover:text-white"
                style={{
                  width: '209px',
                  height: '44px',
                  gap: '10px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: '#000000',
                  borderRadius: '30px',
                  paddingTop: '12px',
                  paddingRight: '20px',
                  paddingBottom: '12px',
                  paddingLeft: '20px',
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#000000'
                }}
              >
                Read Case Study →
              </a>
            </div>
          </div>

          {/* Arrow Buttons - Mobile */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              disabled={isPrevDisabled}
              className={`flex items-center justify-center transition-all duration-300 ${
                isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
              }`}
              style={{
                width: '50.84745788574219px',
                height: '50.84745788574219px',
                padding: '12.71px',
                backgroundColor: '#FF5536',
                border: 'none',
                borderRadius: '50.85px'
              }}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={isNextDisabled}
              className={`flex items-center justify-center transition-all duration-300 ${
                isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
              }`}
              style={{
                width: '50.84745788574219px',
                height: '50.84745788574219px',
                padding: '12.71px',
                backgroundColor: '#FF5536',
                border: 'none',
                borderRadius: '50.85px'
              }}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
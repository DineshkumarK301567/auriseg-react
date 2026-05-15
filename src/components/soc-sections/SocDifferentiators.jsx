import React, { useState } from 'react';

const SocDifferentiators = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "White-Label Ready",
      description: "Full white-label infrastructure on client portals, reports, and dashboards, branded to your MSP."
    },
    {
      title: "Scales With Your Pipeline",
      description: "Per-endpoint, per-tier pricing with no hidden escalation fees. Forecast costs precisely and protect your margins."
    },
    {
      title: "Analyst Escalation Path",
      description: "Direct access to Tier 2 and Tier 3 analysts — no automated runaround, no ticket black holes. Escalate in minutes, not hours."
    },
    {
      title: "Dedicated Onboarding",
      description: "A named onboarding engineer owns your go-live. From integration to first detection, Auriseg gets you operational in 72 hours or less."
    }
  ];

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section 
        className="hidden md:block relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '1440px',
          minHeight: '820px',
         // background: '#030407'
        }}
      >
        {/* Background Image for Desktop */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/images/why-auriseg/Bg Image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%'
          }}
        />

        {/* Desktop Content - LEFT + RIGHT Split Layout */}
        <div className="relative z-10 w-full h-full px-8 py-16">
          <div className="max-w-[1200px] mx-auto h-full flex items-center">
            
            {/* LEFT SIDE - Badge, Heading, Button */}
     <div className="w-1/2 pr-12 -translate-y-[50px] translate-x-28">              {/* WHY AURISEG? Badge */}
              <div className="mb-6">
                <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #444444',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px'
              }}
            >
              <img 
                src="/icons/playbook-icon.png" 
                alt="icon"
                style={{
                  width: '8px',
                  height: '11.2px',
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
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FFFFFF'
                }}
              >
              DIFFERENTIATORS
              </span>
            </div>
          </div>

              {/* Main Heading - Left aligned */}
              <h2 
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '38px',
                  lineHeight: '110%',
                  letterSpacing: '0%',
                  color: '#FFFFFF',
                  marginBottom: '32px',
                  maxWidth: '630px'
                }}
              >
                Built for MSPs. Proven in 
                Production.
              </h2>

              {/* Button - Left aligned */}
              <a 
                href="/become-a-partner"
                className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: '#FF5536',
                  borderRadius: '5px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '16px 32px'
                }}
              >
               View Partner Case Studies →
              </a>
            </div>

            {/* RIGHT SIDE - 4 Features stacked vertically */}
            <div className="w-1/2 pl-8 translate-y-32">
              <div className="flex flex-col gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Title - First one always orange, others white turn orange on hover */}
                    <h3 
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '27.2px',
                        letterSpacing: '0%',
                        color: index === 0 ? '#FF5536' : (hoveredIndex === index ? '#FF5536' : '#FFFFFF'),
                        marginBottom: '12px',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '23.1px',
                        letterSpacing: '0%',
                        color: '#ADADAD',
                        margin: 0,
                        maxWidth: '453px'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile View - Visible only on mobile (KEPT SAME AS BEFORE) */}
      <section className="md:hidden w-full" style={{ background: '#030407' }}>
        <div 
          className="mx-auto flex flex-col items-center"
          style={{
            width: '342px',
            minHeight: '801px',
            gap: '32px',
            background: '#030407',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '40px',
            paddingBottom: '40px'
          }}
        >
          {/* WHY AURISEG? Badge - Mobile */}
          <div className="flex justify-center w-full">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #444444',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px'
              }}
            >
              <img 
                src="/icons/playbook-icon.png" 
                alt="icon"
                style={{
                  width: '8px',
                  height: '11.2px',
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
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FFFFFF'
                }}
              >
                DIFFERENTIATORS
              </span>
            </div>
          </div>

          {/* Main Heading - Mobile */}
          <h2 
            className="text-center"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#FFFFFF',
              width: '299.796875px',
              textAlign: 'center',
              margin: 0
            }}
          >
            Built for MSPs. Proven in 
            Production.
          </h2>
          <div className="flex justify-center w-full">
            <a 
              href="/become-a-partner"
              className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
              style={{
                background: '#FF5536',
                borderRadius: '5px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '14px 28px'
              }}
            >
              View Partner Case Studies →
            </a>
          </div>

          {/* Features - Mobile Stacked Layout */}
          <div className="w-full flex flex-col items-center gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="w-full"
                style={{
                  padding: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderLeft: hoveredIndex === index ? '3px solid #FF5536' : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Title - Mobile with Orange highlight on hover */}
                <h3 
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '27.2px',
                    letterSpacing: '0%',
                    color: hoveredIndex === index ? '#FF5536' : '#FFFFFF',
                    marginBottom: '12px',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description - Mobile */}
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '23.1px',
                    letterSpacing: '0%',
                    color: 'rgba(255, 255, 255, 0.45)',
                    margin: 0
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocDifferentiators;
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      label: "CONNECT",
      icon: "/icons/how-it-works/1.png",
      title: "Connect Your Stack",
      description: "We integrate with your existing RMM, PSA, and SIEM platforms — or deploy agentless monitoring with no disruption to your clients' environments."
    },
    {
      label: "ACTIVATE",
      icon: "/icons/how-it-works/2.png",
      title: "Activate SOC Monitoring",
      description: "Auriseg analysts begin 24/7 monitoring immediately. Threat detection rules are tuned to your client environments within the first 48 hours."
    },
    {
      label: "BRAND",
      icon: "/icons/how-it-works/3.png",
      title: "Deliver Under Your Brand",
      description: "Your logo, your colour scheme, your domain. All dashboards, alerts, and reports are configured to look and feel like your own premium security service."
    },
    {
      label: "GROW",
      icon: "/icons/how-it-works/4.png",
      title: "Scale As You Grow",
      description: "Add new client environments in days. Your partner success manager supports every new opportunity with co-branded proposals and presales collateral."
    }
  ];

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section 
        className="hidden md:block relative w-full mx-auto overflow-hidden"
        style={{
          maxWidth: '1440px',
          height: '665px',
          background: '#FFFFFF'
        }}
      >
        {/* Background Image for Desktop */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <img 
            src="/images/how-it-works/how-it-works-bg.jpg"
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
            onError={(e) => {
              console.error('Background image failed to load:', e.target.src);
              e.target.onerror = null;
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) {
                parent.style.backgroundColor = '#F0F0F0';
              }
            }}
          />
        </div>

        {/* Desktop Content */}
        <div className="relative z-10 w-full h-full px-8 py-16">
          <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center">
            {/* HOW IT WORKS Badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px',
                backgroundColor: '#FFFFFF'
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
                className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FE5538'
                }}
              >
                HOW IT WORKS
              </span>
            </div>
          </div>

            {/* Main Heading */}
            <h2 
              className="text-center"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#030407',
                marginBottom: '60px',
                textAlign: 'center'
              }}
            >
              From Signed to Live in Under a Week
            </h2>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Icon - Desktop (First) */}
                  <div 
                    className="flex items-center justify-center mb-3"
                    style={{
                      width: '60px',
                      height: '60.622222900390625px',
                      borderRadius: '8px',
                      background: '#FF55361A'
                    }}
                  >
                    <img 
                      src={step.icon}
                      alt={step.title}
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* CONNECT / ACTIVATE / BRAND / GROW Label - Desktop (Below Icon) */}
                  <div 
                    className="mb-3 flex items-center justify-center"
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '18.19px',
                      letterSpacing: '0.91px',
                      textAlign: 'center',
                      color: '#FF5536',
                      textTransform: 'uppercase'
                    }}
                  >
                    {step.label}
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '29.76px',
                      letterSpacing: '0%',
                      color: '#13284C',
                      width: '262.2734375px',
                      textAlign: 'center'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22.17px',
                      letterSpacing: '0%',
                      color: '#030407',
                      width: '262.2734375px',
                      textAlign: 'center',
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View - Visible only on mobile */}
      <section className="md:hidden w-full bg-white">
        <div 
          className="mx-auto flex flex-col items-center"
          style={{
            width: '342px',
            minHeight: '1317.2901611328125px',
            gap: '32px',
            background: '#FFFFFF',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '40px',
            paddingBottom: '40px'
          }}
        >
          {/* HOW IT WORKS Badge - Mobile */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                paddingTop: '10px',
                paddingRight: '11px',
                paddingBottom: '10px',
                paddingLeft: '11px',
                gap: '10px',
                backgroundColor: '#FFFFFF'
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
                className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FE5538'
                }}
              >
                HOW IT WORKS
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
              color: '#030407',
              width: '299.796875px',
              height: '68px',
              textAlign: 'center',
              margin: 0
            }}
          >
            From Signed to Live in Under a Week
          </h2>

          {/* 4 Steps - Mobile Stacked Layout */}
          <div className="w-full flex flex-col items-center gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full">
                {/* Icon - Mobile (First) */}
                <div 
                  className="flex items-center justify-center mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    background: '#FF55361A'
                  }}
                >
                  <img 
                    src={step.icon}
                    alt={step.title}
                    style={{
                      width: '32px',
                      height: '32px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* CONNECT / ACTIVATE / BRAND / GROW Label - Mobile (Below Icon) */}
                <div 
                  className="flex items-center justify-center"
                  style={{
                    width: '65px',
                    height: '19px',
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '18.19px',
                    letterSpacing: '0.91px',
                    textAlign: 'center',
                    color: '#FF5536',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  {step.label}
                </div>

                {/* Title - Mobile */}
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '29.76px',
                    letterSpacing: '0%',
                    color: '#13284C',
                    width: '262.2734375px',
                    textAlign: 'center',
                    marginBottom: '12px'
                  }}
                >
                  {step.title}
                </h3>

                {/* Description - Mobile */}
                <p 
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '22.17px',
                    letterSpacing: '0%',
                    color: '#030407',
                    width: '262.2734375px',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
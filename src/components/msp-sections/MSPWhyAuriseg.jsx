import React, { useState } from 'react';

const WhyAuriseg = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "White-Label by Design",
      description: "Every deliverable and report is built to carry your brand, not ours."
    },
    {
      title: "Scales With Your Pipeline",
      description: "Add clients instantly, our SOC capacity grows without adding your overhead."
    },
    {
      title: "Lower Cost Than In-House",
      description: "Access a full security operations team at a fraction of hiring costs."
    },
    {
      title: "Deep Operational Expertise",
      description: "Our analysts hold certifications across SIEM, SOAR, EDR, and incident response frameworks."
    }
  ];

  return (
    <>
      {/* ════════════════════════════════
          DESKTOP — hidden on mobile
      ════════════════════════════════ */}
      <section
        className="hidden md:block"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '820px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            backgroundImage: "url('/images/why-auriseg/Bg Image.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Desktop Content */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', padding: '64px 0', boxSizing: 'border-box' }}>
          <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
            <div style={{ maxWidth: '1240px', margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center' }}>

              {/* LEFT SIDE */}
              <div style={{ width: '50%', paddingRight: '48px', transform: 'translateY(-50px) translateX(112px)' }}>

                {/* Badge */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    gap: '10px', border: '1px solid #444444',
                    paddingTop: '10px', paddingRight: '11px', paddingBottom: '10px', paddingLeft: '11px'
                  }}>
                    <img src="/icons/playbook-icon.png" alt="icon"
                      style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                      onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                    />
                    <span style={{
                      fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '16px',
                      lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF', textTransform: 'uppercase'
                    }}>
                      WHY AURISEG?
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h2 style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500, fontSize: '38px',
                  lineHeight: '110%', color: '#FFFFFF', marginBottom: '32px', maxWidth: '630px'
                }}>
                  Built for MSPs. Not Just Adapted for Them.
                </h2>

                {/* Button */}
                <a href="/become-a-partner" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: '#FF5536', borderRadius: '5px',
                  fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '16px',
                  lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF',
                  textDecoration: 'none', padding: '16px 32px', transition: 'opacity 0.3s'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Become a Partner →
                </a>
              </div>

              {/* RIGHT SIDE */}
              <div style={{ width: '50%', paddingLeft: '32px', transform: 'translateY(128px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {features.map((feature, index) => (
                    <div key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <h3 style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                        fontSize: '24px', lineHeight: '27.2px', color: index === 0 ? '#FF5536' : (hoveredIndex === index ? '#FF5536' : '#FFFFFF'),
                        marginBottom: '12px', transition: 'color 0.3s ease'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        fontFamily: "'Inter', sans-serif", fontWeight: 400,
                        fontSize: '16px', lineHeight: '23.1px', color: '#ADADAD',
                        margin: 0, maxWidth: '453px'
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          MOBILE — hidden on desktop
      ════════════════════════════════ */}
      <section
        className="md:hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#030407',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ width: '100%', padding: '0 16px', boxSizing: 'border-box' }}>
          <div style={{
            maxWidth: '374px', margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '32px', paddingTop: '40px', paddingBottom: '40px'
          }}>

            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', border: '1px solid #444444',
                paddingTop: '10px', paddingRight: '11px', paddingBottom: '10px', paddingLeft: '11px'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px', borderRadius: '0.4px' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '16px',
                  lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF', textTransform: 'uppercase'
                }}>
                  WHY AURISEG?
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
              fontSize: '28px', lineHeight: '120%', letterSpacing: '-0.02em',
              color: '#FFFFFF', textAlign: 'center', margin: 0
            }}>
              Built for MSPs. Not Just Adapted for Them.
            </h2>

            {/* Button */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <a href="/become-a-partner" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: '#FF5536', borderRadius: '5px',
                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px',
                lineHeight: '100%', letterSpacing: '-0.02em', color: '#FFFFFF',
                textDecoration: 'none', padding: '14px 28px', transition: 'opacity 0.3s'
              }}>
                Become a Partner →
              </a>
            </div>

            {/* Features */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              {features.map((feature, index) => (
                <div key={index}
                  style={{
                    width: '100%', padding: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderLeft: hoveredIndex === index ? '3px solid #FF5536' : '3px solid transparent',
                    transition: 'all 0.3s ease', cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                    fontSize: '20px', lineHeight: '27.2px',
                    color: hoveredIndex === index ? '#FF5536' : '#FFFFFF',
                    marginBottom: '12px', transition: 'color 0.3s ease'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: '12px', lineHeight: '23.1px',
                    color: 'rgba(255, 255, 255, 0.45)', margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAuriseg;
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MSPProblems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      title: 'SOC Infrastructure Costs Too Much',
      description: 'Building a SOC in-house requires serious upfront capital commitment.',
      icon: '/icons/msp/soc-cost-icon.png'
    },
    {
      title: 'Skilled Analyst Shortage',
      description: 'Cybersecurity demand far outpaces the available talent in the market.',
      icon: '/icons/msp/analyst-shortage-icon.png'
    },
    {
      title: '24/7 Coverage Breaks Margins',
      description: 'Round-the-clock monitoring is now a minimum expectation — not a premium.',
      icon: '/icons/msp/coverage-icon.png'
    },
    {
      title: 'Demand On Enterprise-Grade Security',
      description: 'Delivering managed security without scale puts real pressure on margins and limits what your team can deliver.',
      icon: '/icons/msp/enterprise-security-icon.png'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-dark py-16 md:py-20">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        
        {/* PROBLEM Badge - LEFT ALIGNED */}
        <div className="flex justify-start mb-8 md:mb-10">
          <div 
            className="inline-flex items-center justify-center gap-2"
            style={{
              border: '1px solid #444444',
              paddingTop: '10px',
              paddingRight: '11px',
              paddingBottom: '10px',
              paddingLeft: '11px',
              gap: '10px',
              backgroundColor: 'transparent'
            }}
          >
            <img 
              src="/icons/playbook-icon.png" 
              alt="icon"
              style={{ width: '8px', height: '11.2px' }}
              onError={(e) => {
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
              PROBLEM
            </span>
          </div>
        </div>

        {/* Section Header - LEFT ALIGNED */}
        <div className="mb-12 md:mb-16">
          <h2 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 62px)',
              lineHeight: '100%',
              letterSpacing: '-2%',
              textAlign: 'left',
              color: '#FFFFFF',
              maxWidth: '700px'
            }}
          >
            Why MSPs Struggle to Scale <span style={{ color: '#FE5538' }}>Security Services</span>
          </h2>
        </div>

        {/* Connected Grid with Clean Border Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#444444]/60">
          {problems.map((problem, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative px-6 pt-12 pb-10 flex flex-col
                transition-all duration-300 cursor-pointer
                ${index % 4 !== 3 ? 'lg:border-r border-[#444444]/50' : ''}
                border-[#444444]/30
              `}
              style={{
                minHeight: '320px',
                height: '100%',
                backgroundColor: hoveredIndex === index ? '#FE5538' : 'transparent'
              }}
            >
              {/* Icon - 44x44 */}
              <div className="mb-6">
                <img 
                  src={problem.icon}
                  alt={problem.title}
                  style={{
                    width: '44px',
                    height: '44px',
                    objectFit: 'contain',
                    filter: hoveredIndex === index ? 'brightness(0) invert(1)' : 'none'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/44x44/444444/FFFFFF?text=Icon";
                  }}
                />
              </div>

              {/* Title - Fixed height to keep consistency */}
              <h3 
                className="font-bold mb-4 transition-all duration-300"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 3.5vw, 26px)',
                  lineHeight: '100%',
                  letterSpacing: '1%',
                  color: '#FFFFFF'
                }}
              >
                {problem.title}
              </h3>

              {/* Description */}
              <p 
                className="transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20.27px',
                  letterSpacing: '0%',
                  color: hoveredIndex === index ? '#FFFFFF' : '#ADADAD'
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSPProblems;
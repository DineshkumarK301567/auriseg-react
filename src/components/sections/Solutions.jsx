import { Link } from 'react-router-dom';
import { useState } from 'react';

const Solutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    {
      title: 'Intelligent Threat Defense',
      description: 'Advanced AI analytics, behavioral monitoring, and rapid response frameworks that neutralize emerging threats before impact.',
      link: '/solutions/threat-defense',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon.png',
      backgroundImage: '/images/solutions/Card.png'
    },
    {
      title: 'Integrated Security Operations',
      description: 'Unified visibility across endpoints, cloud, and enterprise networks to maintain operational continuity under pressure.',
      link: '/solutions/security-operations',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon (1).png',
      backgroundImage: '/images/solutions/Card.png'
    },
    {
      title: 'Compliance & Governance Intelligence',
      description: 'Regulatory-aligned frameworks ensuring audit readiness, risk transparency, and enterprise assurance.',
      link: '/solutions/compliance-governance',
      linkText: 'Know More →',
      icon: '/icons/solutions/icon (2).png',
      backgroundImage: '/images/solutions/Card.png'
    }
  ];

  return (
    <section 
      className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden"
      style={{
        minHeight: '878.2px',
        height: 'auto',
        borderTop: '1px solid #E5E7EB',
        borderBottom: '1px solid #E5E7EB'
      }}
    >
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1340px] mx-auto py-12 sm:py-16 md:py-20">

        {/* SOLUTIONS */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div 
            className="inline-flex items-center justify-center gap-2"
            style={{
              border: '1px solid #444444',
              padding: '10px 11px',
              backgroundColor: '#FFFFFF'
            }}
          >
            <img src="/icons/playbook-icon.png" alt="icon" style={{ width: '8px', height: '11.2px' }} />
            <span className="uppercase" style={{ color: '#000000' }}>
              SOLUTIONS
            </span>
          </div>
        </div>

        {/* HEADER */}
        <div className="mb-10 md:mb-12 text-center">
          <h2 style={{ 
             fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(32px, 6vw, 48px)',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#030407',
              maxWidth: '1152px'
          }}>
            Unified defense across <span style={{ color: '#FE5538' }}>every surface.</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="w-full overflow-hidden">
          <div className="flex flex-col md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            
            {solutions.map((solution, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(index)}
                className="relative cursor-pointer"
                style={{ minHeight: '493px' }}
              >

                {/* Background */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${solution.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Icon */}
                <div className="absolute top-6 left-6 z-10">
                  <img src={solution.icon} alt="icon" className="w-10 h-10" />
                </div>

                {/* CONTENT - FORCED WHITE with !important to prevent any override */}
                <div className="absolute top-32 left-0 right-0 p-6 md:p-8 z-10">

                  {/* TITLE - FORCED WHITE */}
                  <h3 
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(18px, 4vw, 22px)',
                      lineHeight: '1.3',
                      color: '#FFFFFF !important'
                    }}
                  >
                    {solution.title}
                  </h3>

                  {/* DESCRIPTION - FORCED WHITE */}
                  <p 
                    className="mb-4 text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 'clamp(13px, 3.5vw, 14px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#FFFFFF !important'
                    }}
                  >
                    {solution.description}
                  </p>

                </div>

                {/* BUTTON - Shows on hover */}
                <div 
                  className={`absolute bottom-8 left-0 right-0 px-6 md:p-8 z-10 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <Link 
                    to={solution.link}
                    className="inline-flex items-center justify-center font-semibold gap-2 group-hover:!text-white"
                    style={{
                      color: '#FFFFFF',
                      border: '2px solid #FFFFFF',
                      padding: '10px 24px',
                      borderRadius: '6px'
                    }}
                  >
                    {solution.linkText}
                  </Link>
                </div>


              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MSPStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    {
      number: '50+',
      description: 'Certified Threat Researchers'
    },
    {
      number: '24/7',
      description: 'SOC Monitoring Capability'
    },
    {
      number: '<15m',
      description: 'Avg. Threat Detection-to-Response Time'
    },
    {
      number: '03',
      description: 'Global SOC Locations'
    }
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#030407] border-t-[0.5px] border-b-[0.5px] border-solid border-[#606060]">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative py-8 px-4 text-center bg-[#030407] flex flex-col justify-center items-center transition-all duration-300 cursor-pointer
                ${index !== stats.length - 1 ? 'lg:border-r border-[#606060]/30' : ''}
              `}
              style={{
                minHeight: '272px'
              }}
            >
              {/* Number - Changes color on hover */}
              <div className="mb-3">
                <span 
                  className="font-medium block transition-all duration-300"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: 'clamp(40px, 6vw, 54px)',
                    lineHeight: '100%',
                    letterSpacing: '-2%',
                    color: hoveredIndex === index ? '#FF5536' : '#FFFFFF'
                  }}
                >
                  {stat.number}
                </span>
              </div>
              
              {/* Description - Changes color on hover */}
              <p 
                className="transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  lineHeight: '1.5',
                  color: hoveredIndex === index ? '#FF5536' : '#9CA3AF',
                  maxWidth: '200px',
                  margin: '0 auto'
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSPStats;
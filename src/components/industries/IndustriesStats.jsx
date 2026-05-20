import React from 'react';

const IndustriesStats = () => {
  const stats = [
    {
      value: "$10.9M",
      description: "Healthcare data breach costs have averaged the highest in 13 years.",
    },
    {
      value: "67%",
      description: "Many healthcare organizations hit with ransomware reported disruptions to patient care.",
    },
    {
      value: "21 min",
      description: "Ambulance diversion time during an active ransomware attack is measured in lives.",
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <section 
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#030407',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">
            
            {/* Border container with orange corner highlights */}
            <div className="relative border border-white/20 rounded-lg overflow-hidden">
              
              {/* Orange Highlights on all 4 corners */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-Left Corner */}
                <div className="absolute top-0 left-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#FE5538] to-transparent"></div>
                <div className="absolute top-0 left-0 w-[2px] h-12 sm:h-16 bg-gradient-to-b from-[#FE5538] to-transparent"></div>
                
                {/* Top-Right Corner */}
                <div className="absolute top-0 right-0 w-12 sm:w-16 h-[2px] bg-gradient-to-l from-[#FE5538] to-transparent"></div>
                <div className="absolute top-0 right-0 w-[2px] h-12 sm:h-16 bg-gradient-to-b from-[#FE5538] to-transparent"></div>
                
                {/* Bottom-Left Corner */}
                <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-[#FE5538] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-12 sm:h-16 bg-gradient-to-t from-[#FE5538] to-transparent"></div>
                
                {/* Bottom-Right Corner */}
                <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-[2px] bg-gradient-to-l from-[#FE5538] to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-[2px] h-12 sm:h-16 bg-gradient-to-t from-[#FE5538] to-transparent"></div>
              </div>

              {/* Stats Grid - 3 columns desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="py-8 md:py-12 px-4 md:px-6 text-center">
                    {/* Value */}
                    <div 
                      style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: '50px',
                        lineHeight: '100%',
                        letterSpacing: '-2%',
                        color: '#FFFFFF',
                        marginBottom: '16px'
                      }}
                    >
                      {stat.value}
                    </div>
                    
                    {/* Description */}
                    <p 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '22px',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        maxWidth: '280px',
                        margin: '0 auto'
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section 
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          background: '#030407',
          padding: '40px 16px'
        }}
      >
        <div className="max-w-[342px] mx-auto">
          
          {/* Border container with orange corner highlights - Mobile */}
          <div className="relative border border-white/20 rounded-lg overflow-hidden">
            
            {/* Orange Highlights on all 4 corners - Mobile */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top-Left Corner */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#FE5538] to-transparent"></div>
              <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-[#FE5538] to-transparent"></div>
              
              {/* Top-Right Corner */}
              <div className="absolute top-0 right-0 w-8 h-[2px] bg-gradient-to-l from-[#FE5538] to-transparent"></div>
              <div className="absolute top-0 right-0 w-[2px] h-8 bg-gradient-to-b from-[#FE5538] to-transparent"></div>
              
              {/* Bottom-Left Corner */}
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-[#FE5538] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-gradient-to-t from-[#FE5538] to-transparent"></div>
              
              {/* Bottom-Right Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-[#FE5538] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-[#FE5538] to-transparent"></div>
            </div>

            {/* Mobile Stats - Stacked */}
            <div className="divide-y divide-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="py-6 px-4 text-center">
                  {/* Value - Mobile */}
                  <div 
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: '30px',
                      lineHeight: '100%',
                      letterSpacing: '-2%',
                      color: '#FFFFFF',
                      marginBottom: '12px'
                    }}
                  >
                    {stat.value}
                  </div>
                  
                  {/* Description - Mobile */}
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '18px',
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}
                  >
                    {stat.description}
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

export default IndustriesStats;
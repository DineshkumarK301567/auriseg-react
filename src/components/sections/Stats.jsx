import StatCard from '../ui/StatCard';

const Stats = () => {
  const stats = [
    { number: '1500+', label: 'Cybersecurity projects securing global enterprises' },
    { number: '10+', label: 'Years of CERT-In empaneled MSSP leadership' },
    { number: '85%', label: 'Customer retention through long-term partnerships' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#030407]">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Border container with orange corner highlights */}
        <div className="relative border border-white/20 rounded-lg overflow-hidden">
          
          {/* Orange Highlights on all 4 corners - FOR BOTH DESKTOP & MOBILE */}
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

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="py-8 md:py-12 px-4 md:px-6">
                <StatCard number={stat.number} label={stat.label} />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;
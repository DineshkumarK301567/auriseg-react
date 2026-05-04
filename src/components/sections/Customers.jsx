import { useEffect, useRef } from 'react';

const Customers = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  
  const customers = [
    { image: '/images/customers/amazon.png' },
    { image: '/images/customers/itc.png' },
    { image: '/images/customers/ola.png' },
    { image: '/images/customers/samsung.png' },
    { image: '/images/customers/flipkart.png' },
    { image: '/images/customers/Burgerking.png' },
    { image: '/images/customers/jsw.png' },
    { image: '/images/customers/lnt.png' },
    { image: '/images/customers/CSB_Bank.png' },
    { image: '/images/customers/sbm.png' },
    { image: '/images/customers/tnega1.png'}
  ];

  // Duplicate customers for seamless scrolling
  const allCustomers = [...customers, ...customers];

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    
    if (!scrollContainer1 || !scrollContainer2) return;

    let scrollAmount1 = 0;
    let scrollAmount2 = 0;
    const scrollSpeed = 1;
    let animationFrame;

    const scroll = () => {
      // First row - Left to Right
      if (scrollContainer1 && !scrollContainer1.matches(':hover')) {
        scrollAmount1 += scrollSpeed;
        
        if (scrollAmount1 >= scrollContainer1.scrollWidth / 2) {
          scrollAmount1 = 0;
          scrollContainer1.scrollLeft = 0;
        } else {
          scrollContainer1.scrollLeft = scrollAmount1;
        }
      }

      // Second row - Right to Left
      if (scrollContainer2 && !scrollContainer2.matches(':hover')) {
        scrollAmount2 += scrollSpeed;
        
        if (scrollAmount2 >= scrollContainer2.scrollWidth / 2) {
          scrollAmount2 = 0;
          scrollContainer2.scrollLeft = 0;
        } else {
          scrollContainer2.scrollLeft = (scrollContainer2.scrollWidth / 2) - scrollAmount2;
        }
      }
      
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="container-custom px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        {/* 1. OUR CUSTOMERS - Border with Icon */}
        <div className="flex justify-center mb-8 md:mb-10">
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
            {/* Icon - Same as Hero section */}
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
                color: '#000000'
              }}
            >
              OUR CUSTOMERS
            </span>
          </div>
        </div>

        {/* 2. Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '44px',
              lineHeight: '110%',
              letterSpacing: '-2%',
              textAlign: 'center',
              color: '#000000',
              maxWidth: '1238px',
              margin: '0 auto'
            }}
          >
            Clients Who Choose Security <span style={{ color: '#FE5538' }}>Without Compromise</span>
          </h2>
        </div>

        {/* First Row - Scrolls Left to Right */}
        <div 
          ref={scrollRef1}
          className="overflow-x-auto scrollbar-hide cursor-pointer mb-4 sm:mb-6"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex gap-4 sm:gap-6 py-4" style={{ width: 'fit-content' }}>
            {allCustomers.map((customer, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 transition-all duration-300"
                style={{
                  width: '180px',
                  height: '70px',
                  border: '1px solid #A59E9E66',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={customer.image}
                    alt={`Customer ${index + 1}`}
                    className="w-full h-full object-contain"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/160x46/F5F5F5/CCCCCC?text=Logo`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolls Right to Left */}
        <div 
          ref={scrollRef2}
          className="overflow-x-auto scrollbar-hide cursor-pointer"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-4 sm:gap-6 py-4" style={{ width: 'fit-content' }}>
            {allCustomers.map((customer, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 transition-all duration-300"
                style={{
                  width: '180px',
                  height: '70px',
                  border: '1px solid #A59E9E66',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={customer.image}
                    alt={`Customer ${index + 1}`}
                    className="w-full h-full object-contain"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/160x46/F5F5F5/CCCCCC?text=Logo`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
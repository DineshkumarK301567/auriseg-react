import { Link } from 'react-router-dom';

const MSPHero = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-dark min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/images/For MSPs and MSSP/hero-bg-fallback.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Left aligned */}
      <div className="container-custom w-full px-4 sm:px-6 md:px-8 relative z-10 pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-start justify-start text-left">
          {/* Left Column - Content */}
          <div className="w-full max-w-[600px]">
            {/* WHITE-LABEL SERVICES - Badge with Icon */}
            <div className="inline-block mb-4 sm:mb-6">
              <div 
                className="px-[8px] sm:px-[11px] py-[8px] sm:py-[10px] border text-center inline-flex items-center justify-center gap-1.5 sm:gap-2"
                style={{
                  border: '1px solid #444444',
                  borderRadius: '0px',
                  display: 'inline-flex',
                  alignItems: 'center'
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
                  className="uppercase text-[12px] sm:text-[14px] md:text-[16px]"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 500,
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#FFFFFF'
                  }}
                >
                  WHITE-LABEL SERVICES
                </span>
              </div>
            </div>

            {/* Main Heading - Left aligned */}
            <h1 
              className="mb-3 sm:mb-4 text-white text-left"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 'clamp(32px, 8vw, 62px)',
                lineHeight: 'clamp(38px, 9vw, 74px)',
                letterSpacing: '-2%',
                fontWeight: 500,
                maxWidth: '100%',
                width: '100%'
              }}
            >
              White-Label SOC <br className="hidden md:block" />
              Services Built for <br className="hidden md:block" />
              <span style={{ color: '#FE5538' }}>MSPs and MSSPs</span>
            </h1>
            
            {/* Description Text - Left aligned */}
            <p 
              className="mb-5 sm:mb-6 text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(13px, 4vw, 16px)',
                lineHeight: 'clamp(20px, 5vw, 28.9px)',
                letterSpacing: '0%',
                color: '#E0E0E0',
                maxWidth: '522px'
              }}
            >
              Auriseg delivers 24/7 managed security operations that MSPs can 
              offer under their own brand — without the infrastructure cost, analyst 
              overhead, or operational complexity.
            </p>
            
            {/* Button - Left aligned */}
            <a 
              href="/become-a-partner"
              className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                width: 'clamp(180px, 45vw, 202px)',
                height: 'clamp(42px, 10vw, 60px)',
                background: '#FF5536',
                borderRadius: '5px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(12px, 3.5vw, 16px)',
                lineHeight: 'clamp(18px, 5vw, 24px)',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '0 16px'
              }}
            >
              Become a Partner →
            </a>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MSPHero;
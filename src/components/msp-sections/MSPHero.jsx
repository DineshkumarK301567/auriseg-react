import { Link } from 'react-router-dom';

const MSPHero = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-dark min-h-screen">
      {/* Desktop Background Image - Hidden on mobile */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <img 
          src="/images/For MSPs and MSSP/hero-bg-fallback.jpg" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Mobile Background - Just black (no image) */}
      <div className="absolute inset-0 w-full h-full z-0 md:hidden bg-black"></div>

      {/* Desktop Content - Left aligned (UNCHANGED) */}
      <div className="hidden md:block container-custom w-full px-4 sm:px-6 md:px-8 relative z-10 pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="flex flex-col items-start justify-start text-left">
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

      {/* Mobile Content - Centered with exact specifications (IMAGE AT TOP) */}
      <div className="md:hidden relative z-10 w-full">
        <div 
          className="mx-auto flex flex-col items-center justify-start"
          style={{
            width: '374px',
            minHeight: '652.3636474609375px',
            marginTop: '140px',
            gap: '32px',
            opacity: 1,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {/* 1. IMAGE - Mobile (374px × 286px) - AT THE TOP */}
          <div className="w-full flex justify-center">
            <img 
              src="/images/For MSPs and MSSP/hero-mobile.jpg"
              alt="Auriseg Security Operations"
              style={{
                width: '374px',
                height: '286px',
                opacity: 1,
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/For MSPs and MSSP/hero-bg-fallback.jpg';
              }}
            />
          </div>

          {/* 2. WHITE-LABEL SERVICES - Badge - Mobile */}
          <div className="w-full flex justify-center">
            <div 
              className="inline-flex items-center justify-center"
              style={{
                width: '158.21929931640625px',
                height: '19.363637924194336px',
                borderWidth: '0.52px',
                borderStyle: 'solid',
                borderColor: '#444444',
                gap: '5.18px',
                paddingTop: '5.18px',
                paddingRight: '5.7px',
                paddingBottom: '5.18px',
                paddingLeft: '5.7px',
                backgroundColor: 'transparent'
              }}
            >
              <span 
                className="uppercase"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-3%',
                  color: '#FFFFFF',
                  textTransform: 'uppercase'
                }}
              >
                WHITE-LABEL SERVICES
              </span>
            </div>
          </div>

          {/* 3. Main Heading - Mobile */}
          <div className="w-full flex justify-center">
            <h1 
              className="text-white text-center"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                width: '307.28125px',
                minHeight: '72px',
                margin: 0,
                textAlign: 'center'
              }}
            >
              White-Label SOC <br />
              Services Built for <br />
              <span style={{ color: '#FE5538' }}>MSPs and MSSPs</span>
            </h1>
          </div>

          {/* 4. Description Text - Mobile */}
          <div className="w-full flex justify-center">
            <p 
              className="text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0%',
                color: '#E0E0E0',
                width: '281.16796875px',
                minHeight: '72px',
                margin: 0,
                textAlign: 'center'
              }}
            >
              Auriseg delivers 24/7 managed security operations that MSPs can 
              offer under their own brand — without the infrastructure cost, analyst 
              overhead, or operational complexity.
            </p>
          </div>

          {/* 5. Button - Mobile */}
          <div className="w-full flex justify-center">
            <a 
              href="/become-a-partner"
              className="inline-flex items-center justify-center transition-all duration-300 hover:opacity-90"
              style={{
                width: '278px',
                height: '48px',
                background: '#FF5536',
                borderRadius: '2.59px',
                gap: '5.18px',
                paddingTop: '15px',
                paddingRight: '10.36px',
                paddingBottom: '15px',
                paddingLeft: '10.36px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-2%',
                textAlign: 'center',
                color: '#FFFFFF',
                textDecoration: 'none'
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
import React, { useState } from 'react';

const IndustriesTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "Auriseg tailored framework by protecting sensitive healthcare data while keeping us compliant.",
      name: "Emily Johnson",
      title: "CEO of SAMSUNG",
      companyIcon: "/images/industries_navbar/healthcare/samsung-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 2,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "The SOC augmentation service transformed our security posture. We now have 24/7 monitoring without adding headcount.",
      name: "Michael Chen",
      title: "CTO of HealthFirst",
      companyIcon: "/images/industries_navbar/healthcare/healthfirst-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },
    {
      id: 3,
      image: "/images/industries_navbar/healthcare/testimonial-1.jpg",
      quote: "HIPAA compliance was a nightmare until we partnered with Auriseg. Now we're audit-ready at all times.",
      name: "Sarah Williams",
      title: "CISO of MedTech Solutions",
      companyIcon: "/images/industries_navbar/healthcare/medtech-icon.png",
      socialLinks: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === testimonials.length - 1;
  const currentTestimonial = testimonials[currentSlide];

  const ArrowBtn = ({ onClick, disabled, dir }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '50.85px', height: '50.85px',
        backgroundColor: disabled ? '#FFBDAD' : '#FF5536',
        border: 'none', borderRadius: '50%',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'opacity 0.3s', flexShrink: 0
      }}
      aria-label={dir === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {dir === 'prev' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );

  const SocialIcons = () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      {/* LinkedIn */}
      <a href={currentTestimonial.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
        style={{ width: '36px', height: '36px', borderRadius: '100px', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF5536'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F7F7F7'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      {/* Instagram */}
      <a href={currentTestimonial.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
        style={{ width: '36px', height: '36px', borderRadius: '100px', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF5536'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F7F7F7'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.908 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09406 12.5922C7.96044 11.7616 8.09196 10.9099 8.47027 10.1584C8.84858 9.40685 9.45418 8.79378 10.201 8.40627C10.9478 8.01876 11.7978 7.87655 12.63 7.99997C13.4789 8.12571 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8743 10.5211 16 11.37Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6.5H17.51" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      {/* Twitter / X */}
      <a href={currentTestimonial.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
        style={{ width: '36px', height: '36px', borderRadius: '100px', backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF5536'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F7F7F7'}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M23 3C22.0424 3.67552 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34668 17.567 3.12393C16.6767 2.90119 15.7395 2.95716 14.8821 3.28445C14.0247 3.61174 13.2884 4.19441 12.773 4.95372C12.2575 5.71304 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18582 6.93101 7.39545C5.36074 6.60509 4.01032 5.43886 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );

  return (
    <>
      {/* ══════════════════════════════
          DESKTOP VIEW
      ══════════════════════════════ */}
      <section
        className="hidden md:block relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '683px',
          background: '#FFFFFF',
          padding: '80px 0'
        }}
      >
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[1240px] mx-auto">

            {/* Badge — centered above box */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                border: '1px solid #ADADAD', padding: '10px 11px', backgroundColor: 'transparent'
              }}>
                <img src="/icons/playbook-icon.png" alt="icon"
                  style={{ width: '8px', height: '11.2px' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace", fontWeight: 400, fontSize: '16px',
                  lineHeight: '100%', letterSpacing: '-0.04em', color: '#FF5536', textTransform: 'uppercase'
                }}>
                  TESTIMONIALS
                </span>
              </div>
            </div>

            {/* ── SINGLE BORDERED BOX — full width ── */}
            <div style={{
              width: '100%',
              border: '1px solid #ADADAD',
              borderRadius: '10px',
              padding: '24px',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              gap: '32px',
              alignItems: 'stretch'
            }}>

              {/* Left — Image */}
              <div style={{ flexShrink: 0 }}>
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  style={{ width: '425px', height: '337px', borderRadius: '12px', objectFit: 'cover' }}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/425x337/CCCCCC/FFFFFF?text=Image'; }}
                />
              </div>

              {/* Right — Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                {/* Quote */}
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '22px',
                  lineHeight: '140%', letterSpacing: '-0.02em', color: '#030407',
                  margin: '0 0 24px 0', flex: 1
                }}>
                  "{currentTestimonial.quote}"
                </p>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', backgroundColor: '#ADADAD', marginBottom: '20px' }} />

                {/* Bottom row: company icon + name/title + social icons — all in ONE row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                  {/* Left side: icon + name + title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Company Icon Box */}
                    <div style={{
                      width: '50px', height: '50px', borderRadius: '10px',
                      backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <img
                        src={currentTestimonial.companyIcon}
                        alt="Company Icon"
                        style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                        onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                      />
                    </div>
                    {/* Name + Title */}
                    <div>
                      <div style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                        fontSize: '16px', lineHeight: '100%', letterSpacing: '-0.02em',
                        color: '#030407', marginBottom: '4px'
                      }}>
                        {currentTestimonial.name}
                      </div>
                      <div style={{
                        fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                        fontSize: '14px', lineHeight: '150%', color: '#030407'
                      }}>
                        {currentTestimonial.title}
                      </div>
                    </div>
                  </div>

                  {/* Right side: social icons */}
                  <SocialIcons />
                </div>
              </div>
            </div>

            {/* Arrow Buttons — below the box, centered */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
              <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
              <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MOBILE VIEW  — unchanged
      ══════════════════════════════ */}
      <section
        className="md:hidden relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '812.63px',
          background: '#FFFFFF',
          padding: '60px 34px'
        }}
      >
        <div className="max-w-[376px] mx-auto">

          {/* Badge Mobile */}
          <div className="flex justify-center mb-8">
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              border: '0.52px solid #ADADAD', padding: '5.18px 5.7px', backgroundColor: 'transparent'
            }}>
              <img src="/icons/playbook-icon.png" alt="icon"
                style={{ width: '6px', height: '8.4px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: '12px',
                lineHeight: '12px', letterSpacing: '-0.02em', color: '#FF5536', textTransform: 'uppercase'
              }}>
                TESTIMONIALS
              </span>
            </div>
          </div>

          {/* Mobile Content Box */}
          <div style={{
            width: '308px', background: '#FFFFFF',
            border: '1px solid #ADADAD', borderRadius: '10px', padding: '13px 11.4px'
          }}>
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{ width: '285.2px', height: '226.15px', borderRadius: '10.74px', objectFit: 'cover', marginBottom: '20px' }}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/285x226/CCCCCC/FFFFFF?text=Image'; }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px',
              lineHeight: '100%', letterSpacing: '-0.02em', color: '#030407', marginBottom: '20px'
            }}>
              "{currentTestimonial.quote}"
            </p>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#ADADAD', marginBottom: '20px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '10px', backgroundColor: '#EEEEEE',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <img src={currentTestimonial.companyIcon} alt="Company Icon"
                  style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '14px', lineHeight: '150%', color: '#030407', marginBottom: '4px'
                }}>
                  {currentTestimonial.name}
                </div>
                <div style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 500,
                  fontSize: '12px', lineHeight: '150%', color: '#444444'
                }}>
                  {currentTestimonial.title}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['linkedin','instagram','twitter'].map((platform) => (
                <a key={platform} href={currentTestimonial.socialLinks[platform]}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '44px', height: '44px', borderRadius: '100px',
                    backgroundColor: '#F7F7F7', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {platform === 'linkedin' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.908 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09406 12.5922C7.96044 11.7616 8.09196 10.9099 8.47027 10.1584C8.84858 9.40685 9.45418 8.79378 10.201 8.40627C10.9478 8.01876 11.7978 7.87655 12.63 7.99997C13.4789 8.12571 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8743 10.5211 16 11.37Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M23 3C22.0424 3.67552 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34668 17.567 3.12393C16.6767 2.90119 15.7395 2.95716 14.8821 3.28445C14.0247 3.61174 13.2884 4.19441 12.773 4.95372C12.2575 5.71304 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18582 6.93101 7.39545C5.36074 6.60509 4.01032 5.43886 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Arrow Buttons Mobile */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
            <ArrowBtn onClick={prevSlide} disabled={isPrevDisabled} dir="prev" />
            <ArrowBtn onClick={nextSlide} disabled={isNextDisabled} dir="next" />
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesTestimonials;
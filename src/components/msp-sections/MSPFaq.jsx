import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: Can I resell Auriseg's services under my own brand?",
      answer: "Yes — 100%. All dashboards, reports, alerts, and client portals carry only your branding. Auriseg operates as a silent backend partner. Your clients will never see the Auriseg name in any touchpoint."
    },
    {
      question: "Q2: How quickly can I onboard my first client?",
      answer: "Most partners have their first client live on SOC monitoring within five to seven business days. Our streamlined onboarding process ensures quick deployment with minimal friction."
    },
    {
      question: "Q3: What security platforms does Auriseg integrate with?",
      answer: "Auriseg integrates with leading SIEM, SOAR, EDR, and XDR platforms including Microsoft Sentinel, Splunk, CrowdStrike, Palo Alto, and many more. Custom integrations are also available for enterprise clients."
    },
    {
      question: "Q4: Is there a minimum commitment to become a partner?",
      answer: "No minimum commitment required. We offer flexible partnership models that scale with your business. Start with one client and grow at your own pace."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <section 
        className="hidden md:block relative w-full mx-auto"
        style={{
          maxWidth: '1440px',
        //  minHeight: '846.2008056640625px',
          padding: '0 100px 100px 100px', 
          gap: '10px',
          background: '#FFFFFF'
        }}
      >
        {/* Same structure as Case Studies - NO centering container */}
        <div className="relative w-full">
          
          {/* FAQ Badge - Left aligned (same as CASE STUDIES) */}
          <div className="flex justify-between items-center mb-12">
            {/* CASE STUDIES Badge */}
            <div
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                padding: '10px 11px',
                marginLeft: '-60px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <img
                src="/icons/playbook-icon.png"
                alt="icon"
                style={{ width: '8px', height: '11.2px',
                
                 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontWeight: 500,
                fontSize: '16px',
                color: '#FE5538',
                
              }}>
                FAQ
              </span>
            </div>
          </div>

          {/* Main Heading - Left aligned (same as CASE STUDIES title position) */}
          <h2 
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '46px',
              lineHeight: '110%',
              letterSpacing: '0%',
              color: '#030407',
              marginBottom: '28px',
              maxWidth: '586px',
              marginLeft: '-60px'
            }}
          >
            Common Questions From MSPs Before Partnering
          </h2>

          {/* FAQ Accordion Items - Full width, left aligned (same as CASE STUDIES content) */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  width: '100%',
                  maxWidth: '1240px',
                  borderRadius: '10px',
                  border: '1px solid #ADADAD',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden',
                  marginLeft: '-60px'
                }}
              >
                {/* Question Box */}
                <div 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    minHeight: '68px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '22px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#030407'
                    }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Button */}
                  {/* Plus/Minus Button */}
<button
  style={{
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: openIndex === index ? '#FF5536' : '#FFFFFF',
    border: openIndex === index 
      ? 'none' 
      : '1.61px solid #ADADAD',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    flexShrink: 0
  }}
>
  <span
    style={{
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '20px',
      color: openIndex === index ? '#FFFFFF' : '#606060'
    }}
  >
    {openIndex === index ? '−' : '+'}
  </span>
</button>
                </div>

                {/* Answer Box - Shows when open */}
               {/* Answer Box - Shows when open */}
{openIndex === index && (
  <div 
    style={{
      width: '100%',
      padding: '20px 24px',
      backgroundColor: '#F9F9F9'
    }}
  >
    <p 
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '23.8px',
        letterSpacing: '0%',
        color: '#606060',
        margin: 0,
        maxWidth: '877px'
      }}
    >
      {faq.answer}
    </p>
  </div>
)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View - Visible only on mobile */}
      <section className="md:hidden w-full" style={{ background: '#FFFFFF' }}>
        <div 
          className="mx-auto flex flex-col"
          style={{
            width: '342px',
            minHeight: '491.3636474609375px',
            gap: '32px',
            background: '#FFFFFF',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: '40px',
            paddingBottom: '40px'
          }}
        >
          {/* FAQ Badge - Mobile */}
          <div className="flex justify-center w-full">
            <div 
              className="inline-flex items-center justify-center gap-2"
              style={{
                border: '1px solid #CACACA',
                paddingTop: '8px',
                paddingRight: '12px',
                paddingBottom: '8px',
                paddingLeft: '12px',
                backgroundColor: '#FFFFFF'
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
                className="uppercase"
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '-2%',
                  color: '#FE5538'
                }}
              >
                FAQ
              </span>
            </div>
          </div>

          {/* Main Heading - Mobile */}
          <h2 
            className="text-center"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '-2%',
              color: '#030407',
              width: '299.796875px',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            Common Questions From MSPs Before Partnering
          </h2>

          {/* FAQ Accordion Items - Mobile */}
          <div className="w-full flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  width: '100%',
                  maxWidth: '342px',
                  borderRadius: '10px',
                  border: '1px solid #ADADAD',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden'
                }}
              >
                {/* Question Box - Mobile */}
                <div 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    minHeight: '50px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    gap: '12px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#030407',
                      flex: 1
                    }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Button - Mobile */}
                  <button
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#FF5536',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <path d="M12 5V19M5 12H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Answer Box - Mobile (Shows when open) */}
                {openIndex === index && (
                  <div 
                    style={{
                      width: '100%',
                      padding: '16px',
                      backgroundColor: '#F9F9F9',
                      borderTop: '1px solid #ADADAD'
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#606060',
                        margin: 0
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
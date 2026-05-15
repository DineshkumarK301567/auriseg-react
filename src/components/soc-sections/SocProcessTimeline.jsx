import React from 'react';

const SocProcessTimeline = () => {
  const steps = [
    {
      title: '1. Scoping Call',
      description: 'Define environments, coverage scope, escalation paths, and SLA tiers.',
      icon: '/icons/timeline/scoping-call.png',
    },
    {
      title: '2. Integration Setup',
      description: 'Define environments, coverage scope, escalation paths, and SLA tiers.',
      icon: '/icons/timeline/integration-setup.png',
    },
    {
      title: '3. Baseline & Tuning',
      description: 'Define environments, coverage scope, escalation paths, and SLA tiers.',
      icon: '/icons/timeline/baseline-tuning.png',
    },
    {
      title: '4. Playbook Alignment',
      description: 'Co-develop runbooks and escalation workflows mapped to your incident response process.',
      icon: '/icons/timeline/playbook-alignment.png',
    },
    {
      title: '5. Go-Live',
      description: '24/7 monitoring activates. SLA clock starts. Your SOC is live.',
      icon: '/icons/timeline/go-live.png',
    },
  ];

  return (
    <>
      {/* ═══════════════════════════ DESKTOP ═══════════════════════════ */}
      <section
        className="hidden md:flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          height: '634px',
          background: '#FFFFFF',
          paddingTop: '72px',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Badge ── */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid #ADADAD',
            padding: '10px 11px',
            marginBottom: '28px',
          }}
        >
          <img
            src="/icons/playbook-icon.png"
            alt=""
            style={{ width: '8px', height: '11.2px' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: '#FF5536',
            }}
          >
            PROCESS TIMELINE
          </span>
        </div>

        {/* ── Heading ── */}
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '48px',
            lineHeight: '110%',
            color: '#030407',
            textAlign: 'center',
            margin: '0 0 16px 0',
          }}
        >
          Operational in 14 Days
        </h2>

        {/* ── Subheading ── */}
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#444444',
            maxWidth: '586px',
            margin: '0 0 56px 0',
          }}
        >
          Auriseg's structured onboarding moves fast, from contract signature to
          full SOC coverage in under two weeks.
        </p>

        {/* ── Timeline Row ── */}
        <div
          style={{
            width: '1256px',
            maxWidth: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingLeft: '84px',
            paddingRight: '84px',
            boxSizing: 'border-box',
          }}
        >
          {/* 
            Horizontal gradient line — LEFT: light (#F5D3CD) → RIGHT: dark (#FF5536)
            Starts light on the left, gets darker/stronger toward the end 
          */}
          <div
  style={{
    position: 'absolute',
    top: '20px',
    left: '104px',
    right: '104px',
    height: '2px',
    background: 'linear-gradient(90deg, #F5D3CD 0%, #FF5536 100%)',
    zIndex: 0,
  }}
/>

          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '31.58px',
                  background: '#FF5536',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                  flexShrink: 0,
                }}
              >
                <img
                  src={step.icon}
                  alt={step.title}
                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '17px',
                  lineHeight: '100%',
                  letterSpacing: '-0.02em',
                  color: '#13284C',
                  marginBottom: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '150%',
                  color: '#444444',
                  maxWidth: '183px',
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════ MOBILE ═══════════════════════════ */}
      <section
        className="md:hidden flex flex-col items-center"
        style={{
          width: '100%',
          background: '#FFFFFF',
          paddingTop: '40px',
          paddingBottom: '40px',
          boxSizing: 'border-box',
        }}
      >
        {/* ── Badge - Mobile ── */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5.18px',
            border: '0.52px solid #ADADAD',
            padding: '5.18px 5.7px',
            marginBottom: '20px',
          }}
        >
          <img
            src="/icons/playbook-icon.png"
            alt=""
            style={{ width: '6px', height: '8.4px' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#FF5536',
            }}
          >
            PROCESS TIMELINE
          </span>
        </div>

        {/* ── Heading - Mobile ── */}
        <h2
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#030407',
            textAlign: 'center',
            width: '299px',
            margin: '0 0 12px 0',
          }}
        >
          Operational in 14 Days
        </h2>

        {/* ── Subheading - Mobile ── */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '150%',
            textAlign: 'center',
            color: '#606060',
            width: '310px',
            margin: '0 0 37px 0',
          }}
        >
          Auriseg's structured onboarding moves fast, from contract signature to
          full SOC coverage in under two weeks.
        </p>

        {/* ── Vertical Steps ── */}
        <div
          style={{
            width: '308px',
            position: 'relative',
          }}
        >
          {/* 
            Vertical gradient line — TOP: light (#F5D3CD) → BOTTOM: dark (#FF5536)
            Starts light at top, gets stronger going down 
          */}
          <div
            style={{
              position: 'absolute',
              top: '15px',      /* center of first icon (30px / 2) */
              bottom: '15px',   /* center of last icon */
              left: '14px',     /* horizontal center of 30px icon */
              width: '2.25px',
              background: 'linear-gradient(180deg, #F5D3CD 0%, #FF5536 100%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                position: 'relative',
                zIndex: 1,
                marginBottom: index !== steps.length - 1 ? '32px' : 0,
              }}
            >
              {/* Icon circle - Mobile */}
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '23.68px',
                  background: '#FF5536',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={step.icon}
                  alt={step.title}
                  style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-0.02em',
                    color: '#13284C',
                    marginBottom: '8px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '150%',
                    color: '#030407',
                    maxWidth: '183px',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SocProcessTimeline;
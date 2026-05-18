import { useState, useRef } from 'react';



const TEAM = [
  {
    id: 1,
    photo: '/images/About Us/team/member-1.png',
    name: 'Srinivasan M. S.',
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com/in/srinivasanms',
  },
  {
    id: 2,
    photo: '/images/About Us/team/member-1.png',
    name: 'Mukesh Sharma',
    role: 'VP, Operations',
    linkedin: 'https://linkedin.com/in/mukesh-sharma',
  },
  {
    id: 3,
    photo: '/images/About Us/team/member-1.png',
    name: 'Srinivasan M. S.',
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 4,
    photo: '/images/About Us/team/member-1.png',
    name: 'Srinivasan M. S.',
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 5,
    photo: '/images/About Us/team/member-1.png',
    name: 'Srinivasan M. S.',
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    id: 6,
    photo: '/images/About Us/team/member-1.png',
    name: 'Srinivasan M. S.',
    role: 'Founder & CEO',
    linkedin: 'https://linkedin.com/in/',
  },
];

/* ── LinkedIn Icon ──────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.667 2.5H3.333A.833.833 0 002.5 3.333v13.334c0 .46.373.833.833.833h13.334a.833.833 0 00.833-.833V3.333A.833.833 0 0016.667 2.5zM7.083 14.167H5v-5.5h2.083v5.5zM6.042 7.75a1.208 1.208 0 110-2.416 1.208 1.208 0 010 2.416zm8.125 6.417H12.083V11.25c0-.792-.014-1.81-1.104-1.81-1.104 0-1.271.863-1.271 1.754v2.973H7.625v-5.5h1.997v.753h.028c.278-.527.958-1.083 1.972-1.083 2.108 0 2.498 1.39 2.498 3.197v3.633h.047z" fill="#FF5536"/>
  </svg>
);

/* ── Arrow Button — same as CaseStudies ────────────────────── */
const ArrowBtn = ({ onClick, disabled, direction }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    style={{
      width: '50.85px',
      height: '50.85px',
      padding: '12.71px',
      backgroundColor: '#FF5536',
      border: 'none',
      borderRadius: '50.85px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'opacity 0.2s',
      flexShrink: 0,
    }}
  >
    {direction === 'prev' ? (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </button>
);

/* ── Single Team Card ───────────────────────────────────────── */
const TeamCard = ({ member, isDesktop }) => (
  <div className={isDesktop ? 'at-card-desktop' : 'at-card-mobile'}>

    {/* Photo */}
    <div className={isDesktop ? 'at-photo-desktop' : 'at-photo-mobile'}>
      <img
        src={member.photo}
        alt={member.name}
        className={isDesktop ? 'at-photo-img-desktop' : 'at-photo-img-mobile'}
        onError={(e) => { e.target.onerror = null; e.target.style.background = '#F7F7F7'; }}
      />
    </div>

    {/* Name + Role + LinkedIn row */}
    <div className={isDesktop ? 'at-info-desktop' : 'at-info-mobile'}>
      <div className="at-name-role">
        <span className={isDesktop ? 'at-name-desktop' : 'at-name-mobile'}>
          {member.name}
        </span>
        <span className={isDesktop ? 'at-role-desktop' : 'at-role-mobile'}>
          {member.role}
        </span>
      </div>

      {/* LinkedIn button */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={isDesktop ? 'at-linkedin-desktop' : 'at-linkedin-mobile'}
        aria-label={`${member.name} LinkedIn`}
      >
        <LinkedInIcon />
      </a>
    </div>

  </div>
);

/* ── Component ──────────────────────────────────────────────── */
const AboutTeam = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  /* Desktop shows 4 at a time, mobile shows ~1.3 */
  const DESKTOP_VISIBLE = 4;
  const MOBILE_VISIBLE  = 1;
  const maxDesktop = TEAM.length - DESKTOP_VISIBLE;
  const maxMobile  = TEAM.length - MOBILE_VISIBLE;

  const prevDesktop = () => setCurrent((p) => Math.max(p - 1, 0));
  const nextDesktop = () => setCurrent((p) => Math.min(p + 1, maxDesktop));
  const prevMobile  = () => setCurrent((p) => Math.max(p - 1, 0));
  const nextMobile  = () => setCurrent((p) => Math.min(p + 1, maxMobile));

  return (
    <>
      <style>{`

        /* ── Section ──────────────────────────────────────────── */
        .at-section {
          width: 100%;
          background: #FFFFFF;
          overflow: hidden;
        }

        /* ══════════════════════════════════════════════════════
           DESKTOP  ≥ 768px
        ══════════════════════════════════════════════════════ */
        @media (min-width: 768px) {

          .at-section {
            height: 783px;
            padding: 80px 100px;
            display: flex;
            flex-direction: column;
            gap: 48px;
          }

          /* Top row: heading left + arrows right */
          .at-top-desktop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }

          /* Heading — Cabinet Grotesk Bold 700, 48px */
          .at-heading {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 500;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: 0;
            color: #030407;
            margin: 0;
            max-width: 490px;
          }

          /* Arrow group */
          .at-arrows-desktop {
            display: flex;
            gap: 12px;
            align-items: center;
            padding-top: 8px;
          }

          /* Carousel viewport */
          .at-viewport-desktop {
            overflow: hidden;
            width: 100%;
          }

          /* Sliding track */
          .at-track-desktop {
            display: flex;
            gap: 24px;
            transition: transform 0.4s ease;
          }

          /* ── Desktop Card ── */
          .at-card-desktop {
            flex-shrink: 0;
            width: 295px;
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          /* Photo container — 295×295, bg #F7F7F7 */
          .at-photo-desktop {
            width: 295px;
            height: 295px;
            background: #F7F7F7;
            overflow: hidden;
            flex-shrink: 0;
          }
          .at-photo-img-desktop {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
          }

          /* Info row — 295×59, space-between */
          .at-info-desktop {
            width: 295px;
            height: 59px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 12px;
          }

          .at-name-role {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          /* Name desktop — Inter 500, 18px, lh 28px, #13284C */
          .at-name-desktop {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            letter-spacing: -0.02em;
            color: #13284C;
            display: block;
          }

          /* Role desktop — Inter 400, 14px, lh 100%, #606060 */
          .at-role-desktop {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #606060;
            display: block;
          }

          /* LinkedIn button desktop — 44×44, border-radius 2px, bg #F7F7F7 */
          .at-linkedin-desktop {
            width: 44px;
            height: 44px;
            border-radius: 2px;
            background: #F7F7F7;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background 0.2s;
            text-decoration: none;
          }
          .at-linkedin-desktop:hover { background: #E8E8E8; }

          /* Hide mobile */
          .at-mobile-only { display: none; }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE  < 768px
        ══════════════════════════════════════════════════════ */
        @media (max-width: 767px) {

          .at-section {
            height: auto;
            padding: 48px 16px;
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          /* Top: heading only (no arrows here — arrows are below) */
          .at-top-desktop { display: none; }

          /* Heading mobile — Cabinet Grotesk Medium 500, 28px */
          .at-heading-mobile {
            font-family: 'Cabinet Grotesk', sans-serif;
            font-weight: 500;
            font-size: 28px;
            line-height: 30px;
            letter-spacing: -0.02em;
            color: #030407;
            text-align: center;
            margin: 0;
            max-width: 333px;
          }

          /* Carousel viewport */
          .at-viewport-mobile {
            overflow: hidden;
            width: 100%;
          }

          /* Sliding track */
          .at-track-mobile {
            display: flex;
            gap: 16px;
            transition: transform 0.4s ease;
          }

          /* ── Mobile Card ── */
          .at-card-mobile {
            flex-shrink: 0;
            width: 262px;
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          /* Photo — 262×262, bg #F7F7F7 */
          .at-photo-mobile {
            width: 262.44px;
            height: 262.44px;
            background: #F7F7F7;
            overflow: hidden;
            flex-shrink: 0;
          }
          .at-photo-img-mobile {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
          }

          /* Info row mobile — 262×52, space-between */
          .at-info-mobile {
            width: 262.44px;
            height: 52.49px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 10px;
          }

          .at-name-role { display: flex; flex-direction: column; gap: 3px; }

          /* Name mobile — Inter 500, 16px */
          .at-name-mobile {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #13284C;
            display: block;
          }

          /* Role mobile — Inter 400, 12px */
          .at-role-mobile {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 12px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #606060;
            display: block;
          }

          /* LinkedIn mobile — 39×39, border-radius 1.78px */
          .at-linkedin-mobile {
            width: 39.14px;
            height: 39.14px;
            border-radius: 1.78px;
            background: #F7F7F7;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background 0.2s;
            text-decoration: none;
          }
          .at-linkedin-mobile:hover { background: #E8E8E8; }

          /* Arrows — centered below carousel */
          .at-arrows-mobile {
            display: flex;
            gap: 12px;
            justify-content: center;
          }

          /* Desktop-only elements */
          .at-desktop-only { display: none; }
        }

      `}</style>

      <section className="at-section" aria-labelledby="at-heading">

        {/* ══ DESKTOP LAYOUT ══════════════════════════════════ */}
        <div className="at-top-desktop at-desktop-only">

          {/* Heading */}
          <h2 id="at-heading" className="at-heading">
            The Experts Behind<br />Every Engagement
          </h2>

          {/* Arrows — top right */}
          <div className="at-arrows-desktop">
            <ArrowBtn
              direction="prev"
              disabled={current === 0}
              onClick={prevDesktop}
            />
            <ArrowBtn
              direction="next"
              disabled={current >= maxDesktop}
              onClick={nextDesktop}
            />
          </div>
        </div>

        {/* Desktop carousel */}
        <div className="at-viewport-desktop at-desktop-only">
          <div
            ref={trackRef}
            className="at-track-desktop"
            style={{ transform: `translateX(calc(-${current} * (295px + 24px)))` }}
          >
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} isDesktop={true} />
            ))}
          </div>
        </div>

        {/* ══ MOBILE LAYOUT ═══════════════════════════════════ */}
        <div className="at-mobile-only">

          {/* Heading */}
          <h2 id="at-heading" className="at-heading-mobile">
            The Experts Behind<br />Every Engagement
          </h2>
        </div>

        {/* Mobile carousel */}
        <div className="at-viewport-mobile at-mobile-only">
          <div
            className="at-track-mobile"
            style={{ transform: `translateX(calc(-${current} * (262px + 16px)))` }}
          >
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} isDesktop={false} />
            ))}
          </div>
        </div>

        {/* Mobile arrows — below carousel */}
        <div className="at-arrows-mobile at-mobile-only">
          <ArrowBtn
            direction="prev"
            disabled={current === 0}
            onClick={prevMobile}
          />
          <ArrowBtn
            direction="next"
            disabled={current >= maxMobile}
            onClick={nextMobile}
          />
        </div>

      </section>
    </>
  );
};

export default AboutTeam;
import { useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   ABOUT TIMELINE  —  src/components/Aboutus/AboutTimeline.jsx

   Fixes applied:
   1. Vertical line REMOVED
   2. Icon = /icons/playbook-icon.png — hidden by default, shows on hover/active
   3. Description ALWAYS visible (not hidden)
   4. Only 3 years: 2013, 2015, 2017
─────────────────────────────────────────────────────────────── */

const TIMELINE = [
  {
    year: '2013',
    description: 'Founded in Chennai, India. First Managed SOC deployed — offensive and defensive mandates unified from day one.',
  },
  {
    year: '2015',
    description: 'Expanded into Government & Defense vertical. Achieved HIPAA compliance; healthcare security practice launched.',
  },
  {
    year: '2017',
    description: 'Launched AI-driven Threat Intelligence service. Crossed 50-client milestone across four verticals.',
  },
];

/* ── Playbook icon (same as Certifications section) ────────── */
const PlaybookIcon = () => (
  <img
    src="/icons/playbook-icon.png"
    alt=""
    aria-hidden="true"
    style={{ width: '8px', height: '11.2px', borderRadius: '0.4px', display: 'block' }}
    onError={(e) => { e.target.style.display = 'none'; }}
  />
);

/* ── Single timeline row ────────────────────────────────────── */
const TimelineRow = ({ item, active, onHover }) => (
  <div
    className={`atl-row ${active ? 'atl-row--active' : ''}`}
    onMouseEnter={onHover}
  >
    {/* Left: icon (hidden until hover/active) + year */}
    <div className="atl-year-block">
      {/* Icon — hidden by default, shown on hover/active */}
      <span className="atl-icon-wrap">
        <PlaybookIcon />
      </span>
      <span className="atl-year">{item.year}</span>
    </div>

    {/* Right: description — ALWAYS visible */}
    <p className="atl-desc">
      {item.description}
    </p>
  </div>
);

/* ── Component ──────────────────────────────────────────────── */
const AboutTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <style>{`

        /* ── Section ────────────────────────────────────────── */
        .atl-section {
          position: relative;
          width: 100%;
          background: #030407;
          overflow: hidden;
        }

        /* BG image */
        .atl-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          pointer-events: none;
          opacity: 0.6;
        }

        /* ── Heading ─────────────────────────────────────────── */
        .atl-heading {
          font-family: 'Cabinet Grotesk', sans-serif;
          color: #FFFFFF;
          margin: 0;
        }

        /* ── Timeline list — NO ::before line ─────────────────── */
        .atl-list {
          display: flex;
          flex-direction: column;
          position: relative;
          /* NO ::before pseudo-element — vertical line removed */
        }

        /* ── Row ─────────────────────────────────────────────── */
        .atl-row {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          position: relative;
          z-index: 1;
          transition: opacity 0.25s;
        }
        /* Non-active rows slightly dimmed */
        .atl-row:not(.atl-row--active) { opacity: 0.5; }
        .atl-row:hover,
        .atl-row.atl-row--active { opacity: 1; }

        /* ── Year block ──────────────────────────────────────── */
        .atl-year-block {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Icon wrap — HIDDEN by default */
        .atl-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        /* Show icon ONLY on hover or active */
        .atl-row:hover .atl-icon-wrap,
        .atl-row--active .atl-icon-wrap {
          opacity: 1;
        }

        /* ── Year text ───────────────────────────────────────── */
        .atl-year {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 100%;
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        /* Year turns orange on hover/active */
        .atl-row:hover .atl-year,
        .atl-row--active .atl-year {
          color: #FF5536;
        }

        /* ── Description — ALWAYS visible ────────────────────── */
        .atl-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: #9CA3AF;
          margin: 0;
          /* Always shown — no hidden state */
          opacity: 1;
        }

        /* ══════════════════════════════════════════════════════
           DESKTOP  ≥ 768px
        ══════════════════════════════════════════════════════ */
        @media (min-width: 768px) {

          .atl-section { height: 900px; }

          /* Heading — absolute top-left */
          .atl-heading {
            position: absolute;
            top: 100px;
            left: 80px;
            font-weight: 500;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: 0;
            max-width: 697px;
            z-index: 2;
          }

          /* Timeline — right side, vertically centered, width 518px, gap 44px */
          .atl-list {
            position: absolute;
            right: 100px;
            top: 50%;
            transform: translateY(-50%);
            width: 518px;
            gap: 44px;
            z-index: 2;
          }

          /* Row layout — icon left + year + desc */
          .atl-row {
            gap: 24px;
            align-items: flex-start;
            min-height: 84px;
          }

          /* Icon wrap desktop */
          .atl-icon-wrap {
            width: 16px;
            margin-right: 8px;
          }

          /* Year block desktop */
          .atl-year-block {
            gap: 8px;
            min-width: 120px;
          }

          /* Year desktop — 54px */
          .atl-year { font-size: 54px; }

          /* Desc desktop */
          .atl-desc {
            font-size: 13px;
            line-height: 20px;
            letter-spacing: -0.01em;
            padding-top: 10px;
            max-width: 260px;
          }

          .atl-mobile-only { display: none; }
        }

        /* ══════════════════════════════════════════════════════
           MOBILE  < 768px
        ══════════════════════════════════════════════════════ */
        @media (max-width: 767px) {

          .atl-section {
            height: auto;
            min-height: 898px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 24px 60px;
            gap: 40px;
          }

          /* Heading mobile */
          .atl-heading {
            position: static;
            font-weight: 500;
            font-size: 28px;
            line-height: 30px;
            letter-spacing: -0.02em;
            text-align: center;
            max-width: 300px;
            z-index: 2;
          }

          /* Timeline mobile */
          .atl-list {
            width: 100%;
            max-width: 342px;
            gap: 12px;
            z-index: 2;
          }

          /* Row mobile — 273×111, gap 12px */
          .atl-row {
            gap: 12px;
            align-items: flex-start;
            min-height: 111px;
          }

          /* Icon wrap mobile */
          .atl-icon-wrap {
            width: 12px;
            margin-right: 4px;
          }

          /* Year block mobile */
          .atl-year-block {
            gap: 6px;
            min-width: 80px;
          }

          /* Year mobile — 36px */
          .atl-year { font-size: 36px; }

          /* Desc mobile */
          .atl-desc {
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.01em;
            padding-top: 6px;
            max-width: 220px;
          }

          .atl-desktop-only { display: none; }
        }

      `}</style>

      <section className="atl-section" aria-labelledby="atl-heading">

        {/* BG — desktop */}
        <img
          src="/images/About Us/timeline-bg-desktop.png"
          alt="" className="atl-bg atl-desktop-only"
          aria-hidden="true" draggable="false"
        />

        {/* BG — mobile */}
        <img
          src="/images/About Us/timeline-bg-mobile.png"
          alt="" className="atl-bg atl-mobile-only"
          aria-hidden="true" draggable="false"
        />

        {/* Heading */}
        <h2 id="atl-heading" className="atl-heading">
          Over a Decade<br />of Defending What Matters
        </h2>

        {/* Timeline — 3 items only */}
        <div className="atl-list">
          {TIMELINE.map((item, idx) => (
            <TimelineRow
              key={item.year}
              item={item}
              active={activeIdx === idx}
              onHover={() => setActiveIdx(idx)}
            />
          ))}
        </div>

      </section>
    </>
  );
};

export default AboutTimeline;
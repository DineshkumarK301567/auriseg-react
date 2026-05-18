import React from 'react';

const STATS = [
  {
    id: 'market',
    label: 'Service Market',
    value: '$96B',
    icon: '/images/About Us/bar-chart.png',
  },
  {
    id: 'verticals',
    label: 'Industry Verticals Served',
    value: '08+',
    icon: '/images/About Us/building.png',
  },
  {
    id: 'countries',
    label: 'Countries',
    value: '05',
    icon: '/images/About Us/stats/globe.png',
  },
  {
    id: 'founded',
    label: 'Year Founded',
    value: '2013',
    icon: '/images/About Us/calendar.png',
  },
  {
    id: 'empanelled',
    label: 'Empanelled',
    value: 'Cert - In',
    icon: '/images/About Us/shield-check.png',
  },
];

/* ─────────────────────────────────────────────────────────────
   StatCard — NO icon-wrap div, NO white border, plain <img>
   Icon sits absolute bottom-right inside the card
─────────────────────────────────────────────────────────────── */
const StatCard = ({ stat, extraClass = '' }) => (
  <div className={`as-card ${extraClass}`}>

    {/* Label — top-left */}
    <span className="as-card-label">{stat.label}</span>

    {/* Value — bottom-left (pushed down by flex space-between) */}
    <span className="as-card-value">{stat.value}</span>

    {/* Icon — absolute bottom-right, NO wrapper, NO border */}
    <img
      src={stat.icon}
      alt=""
      className="as-card-icon"
      draggable="false"
      aria-hidden="true"
      onError={(e) => { e.target.style.display = 'none'; }}
    />

  </div>
);

/* ─────────────────────────────────────────────────────────────
   Component
─────────────────────────────────────────────────────────────── */
const AboutStats = () => (
  <>
    <style>{`

      /* ── Section ──────────────────────────────────────────── */
      .as-section {
        width: 100%;
        background: #030407;
      }

      /* ── Heading ──────────────────────────────────────────── */
      .as-heading {
        font-family: 'Cabinet Grotesk', sans-serif;
        color: #FFFFFF;
        margin: 0;
      }

      /* ─────────────────────────────────────────────────────
         CARD BASE — shared desktop + mobile
      ───────────────────────────────────────────────────── */
      .as-card {
        background: #030407;
        position: relative;
        overflow: hidden;          /* clips icon bleeding outside */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      /* Label */
      .as-card-label {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 100%;
        color: #F7F7F7;
        display: block;
        position: relative;
        z-index: 2;
      }

      /* Value */
      .as-card-value {
        font-family: 'Cabinet Grotesk', sans-serif;
        font-weight: 500;
        letter-spacing: -0.02em;
        line-height: 100%;
        color: #FFFFFF;
        display: block;
        position: relative;
        z-index: 2;
      }

      /*
        ICON — plain <img>, NO wrapper div, NO white border, NO border-radius
        Absolutely positioned bottom-right, semi-transparent, clipped by card
      */
      .as-card-icon {
        position: absolute;
        bottom:  0;
        right:   0;
        z-index: 1;
        pointer-events: none;
        object-fit: contain;
        opacity: 0.4;
        /* Hard reset — ensure zero border/radius/background always */
        border:           none !important;
        border-radius:    0    !important;
        background:       none !important;
        box-shadow:       none !important;
        outline:          none !important;
        padding:          0    !important;
      }

      /* ══════════════════════════════════════════════════════
         DESKTOP  ≥ 768px
      ══════════════════════════════════════════════════════ */
      @media (min-width: 768px) {

        /* Section — 1440 × 940 */
        .as-section {
          height: 940px;
          padding: 100px 100px 0;
        }

        /* Heading — left-aligned, Bold 700, 48px */
        .as-heading {
          font-weight: 500;
          font-size: 48px;
          line-height: 110%;
          letter-spacing: 0;
          margin-bottom: 38px;
          max-width: 650px;
        }

        /* Grid — 3 equal cols */
        .as-grid {
          width: 100%;
          max-width: 1240px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        /* Every card — full border all 4 sides */
        .as-card {
          padding: 28px 28px 36px;
          min-height: 274px;
          border: 0.5px solid #5D5D5D;
        }

        /* Modifier classes kept but not needed for borders */
        .as-card--col-divider {}
        .as-card--row-divider {}

        /* Empanelled spans 2 cols */
        .as-card--span2 {
          grid-column: span 2;
        }

        /* Label — 20px */
        .as-card-label { font-size: 20px; }

        /* Value — 54px */
        .as-card-value { font-size: 54px; }

        /* Icon — 140×140, slightly bleeds bottom-right */
        .as-card-icon {
          width:  140px;
          height: 140px;
          bottom: -15px;
          right:  -10px;
        }
      }

      /* ══════════════════════════════════════════════════════
         MOBILE  < 768px
      ══════════════════════════════════════════════════════ */
      @media (max-width: 767px) {

        /* Section — min 792px */
        .as-section {
          height: auto;
          min-height: 792px;
          padding: 48px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Heading — centered, Medium 500, 28px */
        .as-heading {
          font-weight: 500;
          font-size: 28px;
          line-height: 30px;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 32px;
          max-width: 287px;
        }

        /* Grid — 1 col */
        .as-grid {
          width: 100%;
          max-width: 342px;
          display: grid;
          grid-template-columns: 1fr;
        }

        /* Every card — full border all 4 sides */
        .as-card {
          padding: 20px 20px 28px;
          min-height: 110px;
          border: 0.5px solid #5D5D5D;
        }

        /* Modifier classes kept but not needed for borders */
        .as-card--row-divider {}
        .as-card--col-divider {}

        /* span2 → normal single col */
        .as-card--span2 {
          grid-column: span 1;
        }

        /* Label — 14px */
        .as-card-label {
          font-size: 14px;
          letter-spacing: 0;
        }

        /* Value — 32px */
        .as-card-value {
          font-size: 32px;
          line-height: 32px;
          letter-spacing: -0.02em;
        }

        /* Icon — 70×70, bleeds bottom-right */
        .as-card-icon {
          width:  70px;
          height: 70px;
          bottom: -8px;
          right:  -5px;
        }
      }

    `}</style>

    <section className="as-section" aria-labelledby="as-heading">

      {/* Heading */}
      <h2 id="as-heading" className="as-heading">
        The Numbers Behind <br/>the Protection
      </h2>

      {/* ──────────────────────────────────────────────────────
          GRID
          Row 1 — col1        | col2 (orange-left) | col3 (orange-left)
          Row 2 — col1(gray)  | col2+3 span (gray + orange-left)
      ────────────────────────────────────────────────────── */}
      <div className="as-grid">

        {/* ROW 1 */}
        <StatCard stat={STATS[0]} />
        <StatCard stat={STATS[1]} extraClass="as-card--col-divider" />
        <StatCard stat={STATS[2]} extraClass="as-card--col-divider" />

        {/* ROW 2 */}
        <StatCard stat={STATS[3]} extraClass="as-card--row-divider" />
        <StatCard
          stat={STATS[4]}
          extraClass="as-card--row-divider as-card--col-divider as-card--span2"
        />

      </div>

    </section>
  </>
);

export default AboutStats;
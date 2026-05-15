import { useState } from 'react';

const stats = [
  { number: '24/7', subNumber: '365', description: 'Analyst Coverage' },
  { number: '<15m', description: 'Alert Triage SLA' },
  { number: '90%', description: 'Reduction in MTTR' },
  { number: '100%', description: 'Visibility. Zero Gaps.' },
];

const SocStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        background: '#030407',
        padding: '48px 0',
        boxSizing: 'border-box',
      }}
    >
      <style>{`

        /* ── OUTER WRAPPER ── */
        .soc-outer {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        /* ── BORDER BOX ── */
        .soc-border {
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* ── ORANGE CORNER BRACKETS ── */
        .soc-corner {
          position: absolute;
          width: 48px;
          height: 48px;
          pointer-events: none;
          z-index: 2;
        }
        .soc-corner-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid #FE5538;
          border-left: 2px solid #FE5538;
        }
        .soc-corner-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid #FE5538;
          border-right: 2px solid #FE5538;
        }
        .soc-corner-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid #FE5538;
          border-left: 2px solid #FE5538;
        }
        .soc-corner-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #FE5538;
          border-right: 2px solid #FE5538;
        }

        /* ── GRID: 4 columns desktop ── */
        .soc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        /* ── CARD ── */
        .soc-card {
          padding: 40px 32px;
          background: #030407;
          cursor: pointer;
          transition: background 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          box-sizing: border-box;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }
        .soc-card:last-child {
          border-right: none;
        }
        .soc-card:hover {
          background: #0d0f18;
        }

        /* ── NUMBER ROW: inline 24/7 365 ── */
        .soc-num-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: nowrap;
        }

        /* ── LARGE NUMBER ── */
        .soc-num {
          font-family: 'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif;
          font-size: clamp(30px, 3.6vw, 54px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #ffffff;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        /* ── SUB NUMBER (365) ── */
        .soc-subnum {
  font-family: 'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif;
  font-size: clamp(30px, 3.6vw, 54px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #ffffff;
  transition: color 0.25s ease;
  white-space: nowrap;
}

        .soc-card:hover .soc-num,
        .soc-card:hover .soc-subnum {
          color: #FF5536;
        }

        /* ── DESCRIPTION ── */
        .soc-desc {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
          color: #6B7280;
          transition: color 0.25s ease;
          margin: 10px 0 0 0;
          padding: 0;
          white-space: nowrap;
        }
        .soc-card:hover .soc-desc {
          color: #FF5536;
        }

        /* ── TABLET: 641px – 1023px → 2×2 ── */
        @media (min-width: 641px) and (max-width: 1023px) {
          .soc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .soc-card {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
          .soc-card:nth-child(2),
          .soc-card:nth-child(4) {
            border-right: none;
          }
          .soc-card:nth-child(3),
          .soc-card:nth-child(4) {
            border-bottom: none;
          }
          .soc-num {
            font-size: clamp(32px, 5vw, 48px);
          }
          .soc-subnum {
            font-size: clamp(32px, 5vw, 48px);
          }
        }

        /* ── MOBILE: ≤640px → stacked, left-aligned ── */
        @media (max-width: 640px) {
          .soc-outer {
            padding: 0 16px;
          }
          .soc-grid {
            grid-template-columns: 1fr;
          }
          .soc-card {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding: 28px 20px;
            align-items: flex-start;
          }
          .soc-card:last-child {
            border-bottom: none;
          }
          .soc-num-row {
            justify-content: flex-start;
            gap: 10px;
          }
          .soc-num {
            font-size: clamp(36px, 10vw, 48px);
          }
          .soc-subnum {
            font-size: clamp(36px, 10vw, 48px);
          }
          .soc-desc {
            font-size: 12px;
            white-space: normal;
            text-align: left;
            margin-top: 8px;
            color: #6B7280;
          }
        }
      `}</style>

      <div className="soc-outer">
        <div className="soc-border">

          {/* Orange corner brackets */}
          <div className="soc-corner soc-corner-tl" />
          <div className="soc-corner soc-corner-tr" />
          <div className="soc-corner soc-corner-bl" />
          <div className="soc-corner soc-corner-br" />

          {/* Stats grid */}
          <div className="soc-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="soc-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Inline number row: 24/7  365 */}
                <div className="soc-num-row">
                  <span className="soc-num">{stat.number}</span>
                  {stat.subNumber && (
                    <span className="soc-desc soc-subnum-desc">
  {stat.subNumber}
</span>
                  )}
                </div>

                {/* Description below */}
                <p className="soc-desc">{stat.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocStats;
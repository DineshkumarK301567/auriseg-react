import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SERVICES_COLUMNS = [
  {
    id: 'msps',
    icon: '/icons/msp-icon.png',
    label: 'For MSPs and MSSPs',
    labelLink: '/services/for-msps', // ← clicking the header navigates here
    items: [
      { to: '/services/soc-augmentation',      text: 'SOC Operations & Augmentation' },
      { to: '/services/threat-monitoring',     text: 'Threat Monitoring' },
      { to: '/services/incident-response',     text: 'Incident Response' },
      { to: '/services/white-label-security',  text: 'White-label Security Services' },
      { to: '/services/offshore-teams',        text: 'Offshore Cybersecurity Teams' },
      { to: '/services/co-delivery',           text: 'Co-delivery and Enablement Support' },
    ],
  },
  {
    id: 'managed',
    icon: '/icons/managed-icon.png',
    label: 'Managed Security',
    items: [
      { to: '/services/247-monitoring', text: '24/7 Security Monitoring' },
      { to: '/services/mdr',            text: 'Managed Detection and Response (MDR)' },
    ],
  },
  {
    id: 'testing',
    icon: '/icons/testing-icon.png',
    label: 'Security Testing & Assurance',
    items: [
      { to: '/services/vulnerability-assessment', text: 'Vulnerability Assessment' },
      { to: '/services/penetration-testing',      text: 'Penetration Testing' },
      { to: '/services/mobile-app-security',      text: 'Mobile App Security Testing' },
      { to: '/services/cloud-security-audit',     text: 'Cloud Security Audit' },
      { to: '/services/social-engineering',       text: 'Social Engineering & Phishing Simulations' },
      { to: '/services/source-code-review',       text: 'Source Code Review' },
      { to: '/services/ai-security',              text: 'AI Security, Testing, Deployment' },
      { to: '/services/ot-iot-security',          text: 'OT/IoT security and automotive security' },
    ],
  },
  {
    id: 'advisory',
    icon: '/icons/advisory-icon.png',
    label: 'Advisory and Enablement',
    items: [
      { to: '/services/security-architecture', text: 'Security Architecture' },
      { to: '/services/program-advisory',      text: 'Program Advisory' },
      { to: '/services/vciso',                 text: 'vCISO Services' },
      { to: '/services/tool-selection',        text: 'Tool Selection and Implementation' },
      { to: '/services/maturity-assessments',  text: 'Maturity Assessments' },
    ],
  },
  {
    id: 'grc',
    icon: '/icons/grc-icon.png',
    label: 'GRC and Compliance',
    items: [
      { to: '/services/risk-assessments',      text: 'Risk Assessments' },
      { to: '/services/regulatory-compliance', text: 'Regulatory Compliance' },
      { to: '/services/audit-readiness',       text: 'Audit Readiness' },
    ],
  },
];

const MAIN_NAV = [
  { label: 'Solutions',       to: '/solutions' },
  { label: 'Industries',      to: '/industries' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'Resources',       to: '/resources' },
];

const COMPANY_LINKS = [
  { label: 'About us',    to: '/about-us' },
  { label: 'Careers',     to: '/careers' },
  { label: 'Contact us',  to: '/contact' },
];

/* ─────────────────────────────────────────────
   ICON FALLBACK
───────────────────────────────────────────── */
const ColIcon = ({ src, alt }) => {
  const iconMap = {
    'msp-icon.png':      'M',
    'managed-icon.png':  'M',
    'testing-icon.png':  'S',
    'advisory-icon.png': 'A',
    'grc-icon.png':      'G',
  };
  const key = src.split('/').pop();
  return (
    <img
      src={src}
      alt={alt}
      className="w-[18px] h-[18px] flex-shrink-0"
      onError={(e) => {
        e.target.style.display = 'none';
        const span = document.createElement('span');
        span.textContent = iconMap[key] || '•';
        span.className = 'text-[#FF5536] text-xs font-bold w-[18px] flex-shrink-0';
        e.target.parentNode.insertBefore(span, e.target);
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   DROPDOWN GROUP
   If col.labelLink is set → header is a <Link>
   otherwise → plain <span>
───────────────────────────────────────────── */
const DropdownGroup = ({ col, onClose }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-center gap-2 mb-3">
      <ColIcon src={col.icon} alt={col.label} />
      {col.labelLink ? (
        <Link
          to={col.labelLink}
          onClick={onClose}
          className="text-[#FF5536] font-bold leading-tight hover:underline"
          style={{ fontSize: '13px', letterSpacing: '0.01em' }}
        >
          {col.label}
        </Link>
      ) : (
        <span
          className="text-[#FF5536] font-bold leading-tight"
          style={{ fontSize: '13px', letterSpacing: '0.01em' }}
        >
          {col.label}
        </span>
      )}
    </div>

    {/* Items */}
    <ul className="space-y-[7px]">
      {col.items.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            onClick={onClose}
            className="block text-gray-700 hover:text-[#FF5536] transition-colors duration-150 leading-snug"
            style={{ fontSize: '13px' }}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/* ─────────────────────────────────────────────
   MEGA DROPDOWN – DESKTOP
   Full viewport width, white bg, 100px side padding, 40px top/bottom
   Col 1: MSPs & MSSPs + Managed Security
   Col 2: Security Testing & Assurance
   Col 3: Advisory and Enablement + GRC and Compliance
───────────────────────────────────────────── */
const ServicesDropdown = ({ onClose }) => (
  <div
    className="fixed left-0 right-0 bg-white z-40"
    style={{
      top: '73px',
      borderTop: '3px solid #FF5536',
      borderBottom: '1px solid #E5E7EB',
      boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    }}
    onMouseLeave={onClose}
  >
    <div
      style={{
        maxWidth: '1441px',
        margin: '0 auto',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '100px',
        paddingRight: '100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '40px',
      }}
    >
      {/* Column 1: MSPs + Managed Security */}
      <div>
        <DropdownGroup col={SERVICES_COLUMNS[0]} onClose={onClose} />
        <DropdownGroup col={SERVICES_COLUMNS[1]} onClose={onClose} />
      </div>

      {/* Column 2: Security Testing */}
      <div>
        <DropdownGroup col={SERVICES_COLUMNS[2]} onClose={onClose} />
      </div>

      {/* Column 3: Advisory + GRC */}
      <div>
        <DropdownGroup col={SERVICES_COLUMNS[3]} onClose={onClose} />
        <DropdownGroup col={SERVICES_COLUMNS[4]} onClose={onClose} />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   MOBILE ACCORDION ITEM
───────────────────────────────────────────── */
const MobileAccordion = ({ label, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 px-0 text-left"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px', color: open ? '#FF5536' : '#9CA3AF' }}
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pb-4 px-1">
          {children}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MOBILE SERVICES SUB-ACCORDION
   If col.labelLink → header row has link + chevron
───────────────────────────────────────────── */
const MobileServiceGroup = ({ col, onClose }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-1">
      <div
        className="flex items-center justify-between w-full py-2 px-2 rounded-md transition-colors"
        style={{ background: open ? 'rgba(255,85,54,0.08)' : 'transparent' }}
      >
        {/* Left: icon + label (clickable link if labelLink exists) */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <ColIcon src={col.icon} alt={col.label} />
          {col.labelLink ? (
            <Link
              to={col.labelLink}
              onClick={onClose}
              className="text-white font-medium hover:text-[#FF5536] transition-colors truncate"
              style={{ fontSize: '13px' }}
            >
              {col.label}
            </Link>
          ) : (
            <span className="text-white font-medium truncate" style={{ fontSize: '13px' }}>
              {col.label}
            </span>
          )}
        </div>

        {/* Chevron toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-2 flex-shrink-0 p-1"
          aria-label="Expand"
        >
          <svg
            className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="pl-8 mt-1 space-y-1">
          {col.items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="block text-gray-400 hover:text-[#FF5536] transition-colors py-[3px]"
              style={{ fontSize: '12px' }}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const servicesTimerRef = useRef(null);
  const companyTimerRef = useRef(null);

  /* Scroll shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Hover helpers */
  const openServices = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesOpen(true);
    setCompanyOpen(false);
  };
  const closeServices = () => {
    servicesTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const openCompany = () => {
    if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
    setCompanyOpen(true);
    setServicesOpen(false);
  };
  const closeCompany = () => {
    companyTimerRef.current = setTimeout(() => setCompanyOpen(false), 150);
  };

  useEffect(() => () => {
    clearTimeout(servicesTimerRef.current);
    clearTimeout(companyTimerRef.current);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: '14.5px',
    lineHeight: '21.75px',
    letterSpacing: '-0.36px',
    color: '#9CA3AF',
    transition: 'color 0.2s',
  };

  const activeStyle = { color: '#FF5536' };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A] shadow-lg' : 'bg-[#0A0A0A]'
      }`}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* ── DESKTOP ───────────────────────────────────── */}
      <div
        className="hidden md:flex items-center justify-between"
        style={{
          maxWidth: '1441px',
          margin: '0 auto',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '100px',
          paddingRight: '100px',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.png" alt="Auriseg" className="h-9 w-auto" />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {/* Services */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 py-2"
              style={{ ...navLinkStyle, ...(servicesOpen ? activeStyle : {}) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => {
                if (!servicesOpen) e.currentTarget.style.color = '#9CA3AF';
              }}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <ServicesDropdown onClose={() => setServicesOpen(false)} />
            )}
          </div>

          {/* Static links */}
          {MAIN_NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              style={navLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              className="whitespace-nowrap py-2"
            >
              {item.label}
            </Link>
          ))}

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={openCompany}
            onMouseLeave={closeCompany}
          >
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 py-2"
              style={{ ...navLinkStyle, ...(companyOpen ? activeStyle : {}) }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF5536')}
              onMouseLeave={(e) => {
                if (!companyOpen) e.currentTarget.style.color = '#9CA3AF';
              }}
            >
              Company
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {companyOpen && (
              <div
                className="absolute top-full right-0 mt-0 bg-white rounded-b-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                style={{ minWidth: '160px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                onMouseEnter={openCompany}
                onMouseLeave={closeCompany}
              >
                <div className="h-[3px] w-full bg-[#FF5536]" />
                {COMPANY_LINKS.map((link, i) => (
                  <div key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setCompanyOpen(false)}
                      className="block px-5 py-3 text-gray-700 hover:bg-[#FF5536] hover:text-white transition-all duration-150 whitespace-nowrap"
                      style={{ fontSize: '13px', fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                    {i < COMPANY_LINKS.length - 1 && (
                      <div className="mx-3 border-t border-gray-100" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/talk-to-experts"
            className="bg-[#FF5536] hover:bg-[#e04a2d] text-white font-semibold rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '-0.2px',
              padding: '10px 20px',
            }}
          >
            Talk to Experts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── MOBILE TOPBAR ─────────────────────────────── */}
      <div
        className="md:hidden flex items-center justify-between px-5 py-4"
        style={{ borderBottom: mobileOpen ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
      >
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Auriseg" className="h-8 w-auto" />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-700 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE DRAWER ─────────────────────────────── */}
      <div
        className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[calc(100vh-64px)] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ background: '#0A0A0A' }}
      >
        <div className="px-5 pb-8 pt-2">

          {/* Services accordion */}
          <MobileAccordion label="Services">
            <div className="mt-2 space-y-1">
              {SERVICES_COLUMNS.map((col) => (
                <MobileServiceGroup
                  key={col.id}
                  col={col}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </MobileAccordion>

          {/* Static nav */}
          {MAIN_NAV.map((item) => (
            <div key={item.label} className="border-b border-gray-800">
              <Link
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-gray-400 hover:text-[#FF5536] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px' }}
              >
                {item.label}
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}

          {/* CTA Button */}
          <div className="my-5">
            <Link
              to="/talk-to-experts"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#FF5536] hover:bg-[#e04a2d] text-white font-semibold rounded-lg py-3 transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600 }}
            >
              Talk to Experts →
            </Link>
          </div>

          {/* Company links (About us, Careers, Contact us) */}
          {COMPANY_LINKS.map((link) => (
            <div key={link.to} className="border-b border-gray-800">
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 text-gray-400 hover:text-[#FF5536] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '15px' }}
              >
                {link.label}
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}

          {/* Bottom warning bar */}
          <div
            className="mt-6 flex items-center gap-2 justify-center py-3 rounded-lg"
            style={{ background: 'rgba(255,85,54,0.1)', border: '1px solid rgba(255,85,54,0.2)' }}
          >
            <svg className="w-4 h-4 text-[#FF5536]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span className="text-[#FF5536] font-medium" style={{ fontSize: '13px' }}>
              Are you under attack?
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
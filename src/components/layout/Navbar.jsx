import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const servicesTimeoutRef = useRef(null);
  const companyTimeoutRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const companyButtonRef = useRef(null);
  
  const navItems = ['Solutions', 'Industries', 'Success Stories', 'Resources'];

  // Font style configuration
  const navFontStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: '14.5px',
    lineHeight: '21.75px',
    letterSpacing: '-0.36px',
    color: '#9CA3AF'
  };

  // Handle Services Dropdown with delay
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.matches(':hover') &&
        servicesButtonRef.current && 
        !servicesButtonRef.current.matches(':hover')
      ) {
        setServicesDropdownOpen(false);
      }
    }, 300);
  };

  // Handle Company Dropdown with delay
  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) {
      clearTimeout(companyTimeoutRef.current);
      companyTimeoutRef.current = null;
    }
    setCompanyDropdownOpen(true);
  };

  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      if (
        companyDropdownRef.current && 
        !companyDropdownRef.current.matches(':hover') &&
        companyButtonRef.current && 
        !companyButtonRef.current.matches(':hover')
      ) {
        setCompanyDropdownOpen(false);
      }
    }, 300);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="bg-dark fixed w-full z-50 border-b border-gray-800">
      <div className="container-custom">
        {/* Main Navigation - Single Row */}
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/">
            <img src="/logo.png" alt="Auriseg" className="h-8 md:h-11 w-auto" />
          </Link>
          
          {/* Desktop Menu - Only visible on desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                ref={servicesButtonRef}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={(e) => {
                  handleServicesMouseEnter();
                  e.currentTarget.style.color = '#FE5538';
                }}
                onMouseLeave={(e) => {
                  handleServicesMouseLeave();
                  if (!servicesDropdownOpen) {
                    e.currentTarget.style.color = '#9CA3AF';
                  }
                }}
                className="flex items-center gap-1 py-2 px-1 transition-colors duration-300 whitespace-nowrap"
                style={navFontStyle}
              >
                Services
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ stroke: 'currentColor' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Mega Dropdown - Desktop Only */}
              {servicesDropdownOpen && (
                <div 
                  ref={servicesDropdownRef}
                  className="absolute top-full left-0 mt-1 pt-2 w-[700px] bg-white rounded-lg shadow-xl border border-gray-200"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  
                  <div className="py-4 px-6 max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1 - MSP & Managed Security */}
                      <div>
                        {/* For MSPs and MSSPs with Icon */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <img src="/icons/msp-icon.png" alt="MSP" className="w-5 h-5" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                            <h3 className="text-[#FE5538] font-bold text-xs uppercase tracking-wider">
                              For MSPs and MSSPs
                            </h3>
                          </div>
                          <ul className="space-y-1">
                            {/* DESKTOP: White-Label Services Link */}
                            <li>
                              <Link 
                                to="/services/for-msps" 
                                className="text-xs text-[#FE5538] hover:text-[#FE5538] transition block py-1 font-semibold"
                              >
                                White-Label Services →
                              </Link>
                            </li>
                            <li><Link to="/services/soc-operations" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1 pl-3">• SOC Operations & Augmentation</Link></li>
                            <li className="pl-3"><Link to="/services/threat-monitoring" className="text-xs text-gray-600 hover:text-[#FE5538] transition block py-0.5">• Threat Monitoring</Link></li>
                            <li className="pl-3"><Link to="/services/incident-response" className="text-xs text-gray-600 hover:text-[#FE5538] transition block py-0.5">• Incident Response</Link></li>
                            <li className="pl-3"><Link to="/services/white-label-security" className="text-xs text-gray-600 hover:text-[#FE5538] transition block py-0.5">• White-label Security</Link></li>
                            <li className="pl-3"><Link to="/services/offshore-teams" className="text-xs text-gray-600 hover:text-[#FE5538] transition block py-0.5">• Offshore Teams</Link></li>
                            <li className="pl-3"><Link to="/services/co-delivery" className="text-xs text-gray-600 hover:text-[#FE5538] transition block py-0.5">• Co-delivery & Enablement</Link></li>
                          </ul>
                        </div>
                        
                        {/* Managed Security with Icon */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <img src="/icons/managed-icon.png" alt="Managed Security" className="w-5 h-5" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                            <h3 className="text-[#FE5538] font-bold text-xs uppercase tracking-wider">
                              Managed Security
                            </h3>
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/services/247-monitoring" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">24/7 Security Monitoring</Link></li>
                            <li><Link to="/services/mdr" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Managed Detection & Response</Link></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 - Security Testing with Icon */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <img src="/icons/testing-icon.png" alt="Security Testing" className="w-5 h-5" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                          <h3 className="text-[#FE5538] font-bold text-xs uppercase tracking-wider">
                            Security Testing & Assurance
                          </h3>
                        </div>
                        <ul className="space-y-1">
                          <li><Link to="/services/vulnerability-assessment" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Vulnerability Assessment</Link></li>
                          <li><Link to="/services/penetration-testing" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Penetration Testing</Link></li>
                          <li><Link to="/services/mobile-app-security" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Mobile App Security Testing</Link></li>
                          <li><Link to="/services/cloud-security-audit" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Cloud Security Audit</Link></li>
                          <li><Link to="/services/social-engineering" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Social Engineering & Phishing</Link></li>
                          <li><Link to="/services/source-code-review" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Source Code Review</Link></li>
                          <li><Link to="/services/ai-security" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">AI Security & Deployment</Link></li>
                          <li><Link to="/services/ot-iot-security" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">OT/IoT & Automotive Security</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 - Advisory & GRC with Icons */}
                      <div>
                        {/* Advisory and Enablement with Icon */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <img src="/icons/advisory-icon.png" alt="Advisory" className="w-5 h-5" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                            <h3 className="text-[#FE5538] font-bold text-xs uppercase tracking-wider">
                              Advisory & Enablement
                            </h3>
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/services/security-architecture" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Security Architecture</Link></li>
                            <li><Link to="/services/program-advisory" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Program Advisory</Link></li>
                            <li><Link to="/services/vciso" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">vCISO Services</Link></li>
                            <li><Link to="/services/tool-selection" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Tool Selection & Implementation</Link></li>
                            <li><Link to="/services/maturity-assessments" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Maturity Assessments</Link></li>
                          </ul>
                        </div>

                        {/* GRC and Compliance with Icon */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <img src="/icons/grc-icon.png" alt="GRC" className="w-5 h-5" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                            <h3 className="text-[#FE5538] font-bold text-xs uppercase tracking-wider">
                              GRC & Compliance
                            </h3>
                          </div>
                          <ul className="space-y-1">
                            <li><Link to="/services/risk-assessments" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Risk Assessments</Link></li>
                            <li><Link to="/services/regulatory-compliance" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Regulatory Compliance</Link></li>
                            <li><Link to="/services/audit-readiness" className="text-xs text-gray-700 hover:text-[#FE5538] transition block py-1">Audit Readiness</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="transition-colors duration-300 whitespace-nowrap"
                style={navFontStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FE5538';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9CA3AF';
                }}
              >
                {item}
              </Link>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                ref={companyButtonRef}
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                onMouseEnter={(e) => {
                  handleCompanyMouseEnter();
                  e.currentTarget.style.color = '#FE5538';
                }}
                onMouseLeave={(e) => {
                  handleCompanyMouseLeave();
                  if (!companyDropdownOpen) {
                    e.currentTarget.style.color = '#9CA3AF';
                  }
                }}
                className="flex items-center gap-1 py-2 px-1 transition-colors duration-300 whitespace-nowrap"
                style={navFontStyle}
              >
                Company
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {companyDropdownOpen && (
                <div 
                  ref={companyDropdownRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-32"
                  onMouseEnter={handleCompanyMouseEnter}
                  onMouseLeave={handleCompanyMouseLeave}
                >
                  <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>
                  
                  <div className="bg-white rounded-md shadow-lg border border-gray-200 py-1">
                    <Link
                      to="/about-us"
                      className="block px-3 py-1.5 text-xs text-gray-700 hover:text-[#FE5538] hover:bg-gray-50 transition"
                    >
                      About Us
                    </Link>
                    <div className="mx-2 border-t border-gray-100"></div>
                    <Link
                      to="/careers"
                      className="block px-3 py-1.5 text-xs text-gray-700 hover:text-[#FE5538] hover:bg-gray-50 transition"
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/talk-to-experts"
              className="bg-[#FE5538] hover:bg-[#e24b31] text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14.5px',
                lineHeight: '21.75px',
                letterSpacing: '-0.36px'
              }}
            >
              Talk to Experts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[80vh] pb-4 overflow-y-auto' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3 pt-4">
            {/* Services - Mobile Accordion */}
            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left transition py-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '14.5px',
                  lineHeight: '21.75px',
                  letterSpacing: '-0.36px',
                  color: '#9CA3AF'
                }}
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileServicesOpen && (
                <div className="mt-3 pl-3 space-y-4">
                  {/* For MSPs and MSSPs - MOBILE VIEW */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/icons/msp-icon.png" alt="MSP" className="w-4 h-4" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                      <span className="text-[#FE5538] text-xs font-semibold">For MSPs and MSSPs</span>
                    </div>
                    <div className="pl-2 space-y-2">
                      {/* MOBILE: White-Label Services Link */}
                      <Link to="/services/for-msps" className="block text-xs text-[#FE5538] hover:text-[#FE5538] py-1 font-semibold">White-Label Services →</Link>
                      <Link to="/services/soc-operations" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• SOC Operations & Augmentation</Link>
                      <Link to="/services/threat-monitoring" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• Threat Monitoring</Link>
                      <Link to="/services/incident-response" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• Incident Response</Link>
                      <Link to="/services/white-label-security" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• White-label Security</Link>
                      <Link to="/services/offshore-teams" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• Offshore Teams</Link>
                      <Link to="/services/co-delivery" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1 pl-3">• Co-delivery & Enablement</Link>
                    </div>
                  </div>

                  {/* Managed Security - MOBILE */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/icons/managed-icon.png" alt="Managed Security" className="w-4 h-4" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                      <span className="text-[#FE5538] text-xs font-semibold">Managed Security</span>
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link to="/services/247-monitoring" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">24/7 Security Monitoring</Link>
                      <Link to="/services/mdr" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Managed Detection & Response</Link>
                    </div>
                  </div>

                  {/* Security Testing - MOBILE */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/icons/testing-icon.png" alt="Security Testing" className="w-4 h-4" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                      <span className="text-[#FE5538] text-xs font-semibold">Security Testing & Assurance</span>
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link to="/services/vulnerability-assessment" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Vulnerability Assessment</Link>
                      <Link to="/services/penetration-testing" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Penetration Testing</Link>
                      <Link to="/services/mobile-app-security" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Mobile App Security Testing</Link>
                      <Link to="/services/cloud-security-audit" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Cloud Security Audit</Link>
                      <Link to="/services/social-engineering" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Social Engineering & Phishing</Link>
                      <Link to="/services/source-code-review" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Source Code Review</Link>
                      <Link to="/services/ai-security" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">AI Security & Deployment</Link>
                      <Link to="/services/ot-iot-security" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">OT/IoT & Automotive Security</Link>
                    </div>
                  </div>

                  {/* Advisory & Enablement - MOBILE */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/icons/advisory-icon.png" alt="Advisory" className="w-4 h-4" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                      <span className="text-[#FE5538] text-xs font-semibold">Advisory & Enablement</span>
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link to="/services/security-architecture" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Security Architecture</Link>
                      <Link to="/services/program-advisory" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Program Advisory</Link>
                      <Link to="/services/vciso" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">vCISO Services</Link>
                      <Link to="/services/tool-selection" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Tool Selection & Implementation</Link>
                      <Link to="/services/maturity-assessments" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Maturity Assessments</Link>
                    </div>
                  </div>

                  {/* GRC & Compliance - MOBILE */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/icons/grc-icon.png" alt="GRC" className="w-4 h-4" onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }} />
                      <span className="text-[#FE5538] text-xs font-semibold">GRC & Compliance</span>
                    </div>
                    <div className="pl-2 space-y-2">
                      <Link to="/services/risk-assessments" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Risk Assessments</Link>
                      <Link to="/services/regulatory-compliance" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Regulatory Compliance</Link>
                      <Link to="/services/audit-readiness" className="block text-xs text-gray-400 hover:text-[#FE5538] py-1">Audit Readiness</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="transition py-2 text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '14.5px',
                  lineHeight: '21.75px',
                  letterSpacing: '-0.36px',
                  color: '#9CA3AF'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FE5538';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9CA3AF';
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            {/* Company - Mobile Accordion */}
            <div className="border-b border-gray-800 pb-3">
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="flex items-center justify-between w-full text-left transition py-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: '14.5px',
                  lineHeight: '21.75px',
                  letterSpacing: '-0.36px',
                  color: '#9CA3AF'
                }}
              >
                <span>Company</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileCompanyOpen && (
                <div className="mt-3 pl-4 space-y-2">
                  <Link
                    to="/about-us"
                    className="block text-gray-400 hover:text-[#FE5538] transition py-1 text-xs"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/careers"
                    className="block text-gray-400 hover:text-[#FE5538] transition py-1 text-xs"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/talk-to-experts"
              className="bg-[#FE5538] text-white px-4 py-2 rounded-lg text-center transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '14.5px',
                lineHeight: '21.75px',
                letterSpacing: '-0.36px'
              }}
              onClick={() => setIsOpen(false)}
            >
              Talk to Experts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
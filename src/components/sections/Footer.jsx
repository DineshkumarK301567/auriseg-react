import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#030407] border-t border-gray-800 pt-16 pb-8">
      <div className="container-custom px-4 sm:px-6 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-1">
              <img 
                src="logo.png" 
                alt="Auriseg" 
                className="h-11 w-auto mt-12"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/120x40/1A1F2E/FE5538?text=AURISEG";
                }}
              />
            </Link>
            <p className="text-[#FE5538] font-semibold text-sm tracking-wider">
              OPTIMISE SECURITY
            </p>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="h3 text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-[#FE5538] transition text-sm">About</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="h3 text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/penetration-testing" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Penetration Testing</Link></li>
              <li><Link to="/services/cloud-security" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Cloud Security</Link></li>
              <li><Link to="/services/social-engineering" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Social Engineering</Link></li>
              <li><Link to="/services/ot-iot-security" className="text-gray-400 hover:text-[#FE5538] transition text-sm">OT/IoT Security</Link></li>
              <li><Link to="/services/mobile-app-security" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Mobile App Security</Link></li>
            </ul>
          </div>

          {/* Managed Column */}
          <div className="lg:col-span-1">
            <h3 className="h3 text-white font-bold text-lg mb-4">Managed</h3>
            <ul className="space-y-3">
              <li><Link to="/managed/soc-operations" className="text-gray-400 hover:text-[#FE5538] transition text-sm">SOC Operations</Link></li>
              <li><Link to="/managed/mdr" className="text-gray-400 hover:text-[#FE5538] transition text-sm">MDR</Link></li>
              <li><Link to="/managed/incident-response" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Incident Response</Link></li>
              <li><Link to="/managed/white-labeled-security" className="text-gray-400 hover:text-[#FE5538] transition text-sm">White-labeled Security</Link></li>
              <li><Link to="/managed/threat-monitoring" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Threat Monitoring</Link></li>
            </ul>
          </div>

          {/* Advisory Column */}
          <div className="lg:col-span-1">
            <h3 className="h3 text-white font-bold text-lg mb-4">Advisory</h3>
            <ul className="space-y-3">
              <li><Link to="/advisory/risk-assessments" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Risk Assessments</Link></li>
              <li><Link to="/advisory/vciso-services" className="text-gray-400 hover:text-[#FE5538] transition text-sm">vCISO Services</Link></li>
              <li><Link to="/advisory/maturity-assessments" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Maturity Assessments</Link></li>
              <li><Link to="/advisory/compliance" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Compliance</Link></li>
              <li><Link to="/advisory/security-architecture" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Security Architecture</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="h3 text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/book-intro-call" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Book intro call</Link></li>
              <li><Link to="/get-in-touch" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Get in touch</Link></li>
              <li><Link to="/newsletter" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Join newsletter</Link></li>
              <li>
                <div className="flex items-center space-x-4 mt-2">
                  <Link to="#" className="text-gray-400 hover:text-[#FE5538] transition">
                    <span className="text-sm">Follow us</span>
                  </Link>
                </div>
              </li>
              <li><Link to="/feedback" className="text-gray-400 hover:text-[#FE5538] transition text-sm">Send feedback</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Auriseg. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-[#FE5538] text-sm transition">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#FE5538] text-sm transition">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-[#FE5538] text-sm transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
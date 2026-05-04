import { useState } from 'react';
import { Link } from 'react-router-dom';

const TalkToExpert = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    helpWith: {
      interviewing: false,
      incidentResponse: false,
      vulnerabilityAssessment: false,
      cloudSecurity: false,
      managedSecurityServices: false,
      other: false
    },
    challenge: '',
    agreeToContact: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('help.')) {
      const helpField = name.split('.')[1];
      setFormData({
        ...formData,
        helpWith: {
          ...formData.helpWith,
          [helpField]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedHelp = [];
    if (formData.helpWith.interviewing) selectedHelp.push('✓ Interviewing');
    if (formData.helpWith.incidentResponse) selectedHelp.push('✓ Incident Response');
    if (formData.helpWith.vulnerabilityAssessment) selectedHelp.push('✓ Vulnerability Assessment');
    if (formData.helpWith.cloudSecurity) selectedHelp.push('✓ Cloud Security');
    if (formData.helpWith.managedSecurityServices) selectedHelp.push('✓ Managed Security Services');
    if (formData.helpWith.other) selectedHelp.push('✓ Other');

    const whatsappMessage = `
*New Consultation Request from Auriseg Website*
------------------------------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company Name:* ${formData.companyName}
*Job Title:* ${formData.jobTitle}

*Need Help With:*
${selectedHelp.join('\n')}

*Security Challenge:*
${formData.challenge || 'Not specified'}

*Agreed to Contact:* ${formData.agreeToContact ? 'Yes' : 'No'}
------------------------------------------------
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '9999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      jobTitle: '',
      helpWith: {
        interviewing: false,
        incidentResponse: false,
        vulnerabilityAssessment: false,
        cloudSecurity: false,
        managedSecurityServices: false,
        other: false
      },
      challenge: '',
      agreeToContact: false
    });

    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  // Updated Partner Logos based on your reference images
  const partnerLogos = [
    { name: 'Google', image: '/images/partners/google.png' },
    { name: 'SAMSUNG', image: '/images/partners/samsung.png' },
    { name: 'Microsoft', image: '/images/partners/microsoft.png' },
    { name: 'LARSEN & TOUBRO', image: '/images/partners/lnt.png' },
    { name: 'amazon', image: '/images/partners/amazon.png' },
    { name: 'OLAY', image: '/images/partners/olay.png' },
    { name: 'BURGER KING', image: '/images/partners/burgerking.png' },
    { name: 'JSW', image: '/images/partners/jsw.png' },
    { name: 'Flipkart', image: '/images/partners/flipkart.png' },
    { name: 'OLA', image: '/images/partners/ola.png' }
  ];

  // Bullet points with icons
  const bulletPoints = [
    { text: 'Answer over text, tone, and personality pitch', icon: '/icons/check-icon.png' },
    { text: 'Set expectations for understanding, win-win outcomes, and trust', icon: '/icons/check-icon.png' },
    { text: 'Identify potential solutions—creating new ideas, life-changing ideas', icon: '/icons/check-icon.png' },
    { text: 'Create connections, no pressure dialogue or project needs', icon: '/icons/check-icon.png' }
  ];

  const offices = [
    {
      city: 'Office: Mumbai',
      address: '3rd Floor, Smita House, 20th floor, HDFC Bank, Bandra (East), Mumbai, Maharashtra - 400 051',
      phone: '+91 22 4567 1234'
    },
    {
      city: 'India',
      address: 'WEST 17th Main, Building C, North Wing, Noida Extension, Greater Noida, Uttar Pradesh - 201309',
      link: 'https://example.com'
    },
    {
      city: 'Singapore',
      address: 'Singapore, Malaysia, and West Asia region office in Kuala Lumpur, Singapore & Dubai, Malaysia',
      link: 'https://example.com'
    },
    {
      city: 'United States of America',
      address: 'Aurora, CO, Bellevue, WA, Salt Lake City, UT, USA',
      link: 'https://example.com'
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      <div className="container-custom px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Talk to Expert today */}
            <h1 
              className="font-bold text-white"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(40px, 8vw, 50px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                maxWidth: '440px'
              }}
            >
              Talk to Expert today
            </h1>

            {/* Get clarity in 30 minutes */}
            <div>
              <h2 
                className="font-bold text-white mb-6"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '140%',
                  letterSpacing: '-2%',
                  maxWidth: '380px'
                }}
              >
                Get clarity in 30 minutes:
              </h2>
              
              <ul className="space-y-3">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <img 
                      src={point.icon}
                      alt="check"
                      className="w-5 h-5 mt-0.5"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/20x20/FE5538/FFFFFF?text=✓";
                      }}
                    />
                    <span 
                      className="text-[#A1A1A1]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '140%',
                        letterSpacing: '-2%'
                      }}
                    >
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trusted by Box - Updated with 10 Enterprise Logos */}
            <div className="bg-[#161616] rounded-lg p-6">
              <h3 
                className="font-medium text-white mb-6"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '-2%'
                }}
              >
                Trusted by 100+ Enterprise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
                {partnerLogos.map((partner, index) => (
                  <div key={index} className="flex items-center justify-start">
                    <img 
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-8 w-auto opacity-70 hover:opacity-100 transition"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/100x40/1A1F2E/FE5538?text=${partner.name.charAt(0)}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM with Gradient Background */}
          <div className="relative">
            {/* Form Container with Orange Gradient Background */}
            <div 
              className="rounded-xl p-6 md:p-10"
              style={{
                background: 'linear-gradient(0deg, rgba(254, 85, 56, 0.2) 0%, rgba(254, 85, 56, 0) 100%)',
                width: '100%',
                minHeight: '793px',
                position: 'relative'
              }}
            >
              <div className="bg-transparent">
                <h2 
                  className="text-white font-bold mb-8"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(36px, 5vw, 48px)',
                    lineHeight: '120%',
                    letterSpacing: '0%'
                  }}
                >
                  Request Expert Consultation
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                    <p className="text-green-500">✓ Request sent successfully! You'll be redirected to WhatsApp.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE5538] transition"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      className="w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE5538] transition"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE5538] transition"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Client Name"
                      className="w-full bg-transparent border-b border-white/50 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE5538] transition"
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-white mb-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                      }}
                    >
                      What do you need help with?
                    </label>
                    <div className="space-y-2">
                      {['interviewing', 'incidentResponse', 'vulnerabilityAssessment', 'cloudSecurity', 'managedSecurityServices', 'other'].map((key) => (
                        <label key={key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name={`help.${key}`}
                            checked={formData.helpWith[key]}
                            onChange={handleChange}
                            className="w-4 h-4 accent-[#FE5538]"
                          />
                          <span className="text-gray-300 text-sm">
                            {key === 'interviewing' && 'Interviewing'}
                            {key === 'incidentResponse' && 'Incident Response'}
                            {key === 'vulnerabilityAssessment' && 'Vulnerability Assessment'}
                            {key === 'cloudSecurity' && 'Cloud Security'}
                            {key === 'managedSecurityServices' && 'Managed Security Services'}
                            {key === 'other' && 'Other'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 text-sm">
                      Kindly describe your security challenge.
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      rows="3"
                      className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FE5538] transition"
                      placeholder="Type your security challenge here..."
                    ></textarea>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-[#FE5538] mt-0.5"
                      />
                      <label className="text-[#A1A1A1] text-sm">
                        Target is not enough due to ongoing migrating key topics.
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-[#FE5538] mt-0.5"
                      />
                      <label className="text-[#A1A1A1] text-sm">
                        I agree to be contacted by Auriseg regarding my inquiry.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToContact}
                    className="w-full bg-[#FE5538] hover:bg-[#e24b31] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Now'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* OUR OFFICES SECTION */}
        <div className="mt-20">
          <h2 
            className="text-white font-medium mb-8"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(28px, 5vw, 36px)',
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
            Our Offices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-[#1A1F2E] rounded-xl p-5 border border-gray-800 hover:border-[#FE5538] transition-all duration-300"
              >
                <h3 
                  className="text-white font-medium mb-2"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '150%',
                    letterSpacing: '0%'
                  }}
                >
                  {office.city}
                </h3>
                <p className="text-[#F7F7F7] text-sm leading-relaxed mb-3">
                  {office.address}
                </p>
                {office.phone && (
                  <p className="text-[#FE5538] text-sm font-medium">
                    {office.phone}
                  </p>
                )}
                {office.link && (
                  <a 
                    href={office.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FE5538] text-sm font-medium hover:underline inline-block"
                  >
                    Contact Us
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToExpert;
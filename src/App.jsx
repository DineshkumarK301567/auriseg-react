import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import TalkToExpert from './pages/TalkToExpert';
import ForMSPsPage from './pages/ForMSPsPage';
import SOCAugmentation from './pages/SOCAugmentation';
import Aboutus from './pages/Aboutus';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* ✅ About Us — now uses the real Aboutus component */}
            <Route path="/about-us" element={<Aboutus />} />

            <Route path="/careers" element={<div className="pt-32 text-center text-white">Careers Page</div>} />
            <Route path="/contact-us" element={<div className="pt-32 text-center text-white">Contact Page</div>} />
            <Route path="/report-attack" element={<div className="pt-32 text-center text-white">Report Attack Page</div>} />
            <Route path="/services" element={<div className="pt-32 text-center text-white">Services Page</div>} />
            <Route path="/solutions" element={<div className="pt-32 text-center text-white">Solutions Page</div>} />
            <Route path="/industries" element={<div className="pt-32 text-center text-white">Industries Page</div>} />
            <Route path="/success-stories" element={<div className="pt-32 text-center text-white">Success Stories Page</div>} />
            <Route path="/resources" element={<div className="pt-32 text-center text-white">Resources Page</div>} />
            <Route path="/talk-to-experts" element={<TalkToExpert />} />
            <Route path="/services/for-msps" element={<ForMSPsPage />} />
            <Route path="/services/soc-augmentation" element={<SOCAugmentation />} />
            <Route path="*" element={<div className="pt-32 px-4 text-center text-white">This page is coming soon.</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
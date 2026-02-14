
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import ServiceDetail from './pages/ServiceDetail';
import FreeTrial from './pages/FreeTrial';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          {/* Flat structure for better SEO and professional URLs */}
          <Route path="/:slug" element={<ServiceDetail />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

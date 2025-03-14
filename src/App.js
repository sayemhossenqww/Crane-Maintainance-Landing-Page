// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import pages
import HomePage from './pages/HomePage';
// import FeaturesPage from './pages/FeaturesPage';
// import PricingPage from './pages/PricingPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import BlogPage from './pages/BlogPage';
// import BlogPostPage from './pages/BlogPostPage';

// Import layout components
import Header from './components/layout/Header';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/layout/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <div className="font-sans text-gray-800 bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} /> */}
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
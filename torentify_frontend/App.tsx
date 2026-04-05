
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Login from './pages/Login';
import TryForFree from './pages/TryForFree';
import JobDetail from './pages/JobDetails';
import BlogDetails from './pages/BlogDetail';
import { Toaster } from "react-hot-toast";
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <Header />
        <div className="flex-grow">
            <Toaster position="top-right" />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/try-for-free" element={<TryForFree />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

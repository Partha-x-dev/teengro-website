import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Team from './Team';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Get logged-in user
  const [user, setUser] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem('teengro_user');
    setUser(stored ? JSON.parse(stored) : null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('teengro_user');
    setUser(null);
    navigate('/');
  };

  // Hide navbar on auth pages
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  if (isAuthPage) return null;

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        Teen<span>Gro</span>
      </Link>

      <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/how-it-works">How It Works</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className="nav-auth">
        {user ? (
          <>
            <Link to="/dashboard" className="nav-user-chip">
              <span className="nav-user-avatar">{user.name?.charAt(0).toUpperCase()}</span>
              <span className="nav-user-name">{user.name.split(' ')[0]}</span>
            </Link>
            <button onClick={handleLogout} className="btn btn-outline nav-btn-sm">Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline nav-btn-sm">Log In</Link>
            <Link to="/signup" className="btn btn-primary nav-btn-sm">Sign Up Free →</Link>
          </>
        )}
      </div>

      <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
      </div>
    </nav>
  );
}

function Footer() {
  const location = useLocation();
  const hideFooter = ['/login', '/signup', '/dashboard'].includes(location.pathname);
  if (hideFooter) return null;

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Teen<span>Gro</span></div>
          <p className="footer-tagline">
            Empowering India's youth to earn real money, build real skills, 
            and gain real independence — before they turn 18.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Platform</div>
          <ul className="footer-links">
            <li><Link to="/categories">Browse Projects</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><a href="/about">Leaderboard</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="/about">Careers</a></li>
            <li><a href="/about">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            <li><a href="/about">Help Center</a></li>
            <li><a href="/about">Contact</a></li>
            <li><a href="/about">Privacy Policy</a></li>
            <li><a href="/about">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 TéenGro. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="/about">Twitter</a>
          <a href="/about">Instagram</a>
          <a href="/about">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
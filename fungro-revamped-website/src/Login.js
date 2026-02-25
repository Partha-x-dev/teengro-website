import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    // Simulate auth — replace with real API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('teengro_users') || '[]');
      const user = users.find(u => u.email === form.email && u.password === form.password);

      if (user) {
        localStorage.setItem('teengro_user', JSON.stringify(user));
        setLoading(false);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Try signing up first.');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <Link to="/" className="auth-logo">Teen<span>Gro</span></Link>
          <p>India's #1 teen earning platform</p>
        </div>
        <div className="auth-illustration">
          <div className="auth-card-float">
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--white)' }}>₹2,400 earned</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>This week by Ananya S.</div>
          </div>
          <div className="auth-stats-float">
            <div className="auth-stat-mini"><strong>50L+</strong><span>Members</span></div>
            <div className="auth-stat-mini"><strong>200+</strong><span>Brands</span></div>
            <div className="auth-stat-mini"><strong>Free</strong><span>Always</span></div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-wrap">
          <div className="auth-form-header">
            <h1>Welcome back 👋</h1>
            <p>Log in to your TéenGro account</p>
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email" name="email" placeholder="you@example.com"
                value={form.email} onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password" name="password" placeholder="Enter your password"
                value={form.password} onChange={handleChange}
                className="form-input"
              />
            </div>
            <div style={{ textAlign: 'right', marginBottom: '8px' }}>
              <a href="#" style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: '600' }}>Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
              {loading ? <span className="btn-spinner"></span> : 'Log In →'}
            </button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>

          <div className="auth-social">
            <button className="social-auth-btn">🇬 Google</button>
            <button className="social-auth-btn">📘 Facebook</button>
          </div>

          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
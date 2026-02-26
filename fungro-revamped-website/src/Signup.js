import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    age: '', phone: '', role: 'teen',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateStep1 = () => {
    if (!form.name.trim()) return 'Please enter your full name.';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email.';
    if (!form.phone || form.phone.length < 10) return 'Please enter a valid phone number.';
    return '';
  };

  const validateStep2 = () => {
    if (!form.age || form.age < 14 || form.age > 25) return 'Age must be between 14 and 25.';
    if (!form.password || form.password.length < 6) return 'Password must be at least 6 characters.';
    if (form.password !== form.confirmPassword) return 'Passwords do not match.';
    return '';
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateStep2();
    if (err) { setError(err); return; }

    setLoading(true);
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('teengro_users') || '[]');
      const exists = users.find(u => u.email === form.email);
      if (exists) {
        setError('An account with this email already exists. Please log in.');
        setLoading(false);
        return;
      }
      const newUser = { name: form.name, email: form.email, password: form.password, phone: form.phone, age: form.age, role: form.role };
      users.push(newUser);
      localStorage.setItem('teengro_users', JSON.stringify(users));
      localStorage.setItem('teengro_user', JSON.stringify(newUser));
      setLoading(false);
      navigate('/dashboard');
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
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🚀</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--white)' }}>Start earning today</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>₹50 to ₹5,000 per project</div>
          </div>
          <div className="auth-stats-float">
            <div className="auth-stat-mini"><strong>2 min</strong><span>To sign up</span></div>
            <div className="auth-stat-mini"><strong>Free</strong><span>Always</span></div>
            <div className="auth-stat-mini"><strong>Safe</strong><span>Verified</span></div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-wrap">
          <div className="auth-form-header">
            <h1>Join TéenGro 🎉</h1>
            <p>Create your free account in 2 minutes</p>
          </div>

          {/* Step indicator */}
          <div className="auth-steps">
            <div className={`auth-step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className="auth-step-line"></div>
            <div className={`auth-step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
          </div>

          {error && <div className="auth-error">⚠️ {error}</div>}

          {step === 1 && (
            <div className="auth-form">
              {/* Role selector */}
              <div className="form-group">
                <label>I am a...</label>
                <div className="role-selector">
                  <button type="button" className={`role-btn ${form.role === 'teen' ? 'active' : ''}`} onClick={() => setForm({ ...form, role: 'teen' })}>
                    🧑 Teen (14–25)
                  </button>
                  <button type="button" className={`role-btn ${form.role === 'parent' ? 'active' : ''}`} onClick={() => setForm({ ...form, role: 'parent' })}>
                    👨‍👩‍👧 Parent / Guardian
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="10-digit mobile number" value={form.phone} onChange={handleChange} className="form-input" maxLength={10} />
              </div>
              <button type="button" className="btn btn-primary auth-submit" onClick={handleNext}>
                Continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>Your Age</label>
                <input type="number" name="age" placeholder="Age (14–25)" value={form.age} onChange={handleChange} className="form-input" min={14} max={25} />
              </div>
              <div className="form-group">
                <label>Create Password</label>
                <input type="password" name="password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} className="form-input" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Re-enter your password" value={form.confirmPassword} onChange={handleChange} className="form-input" />
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.5' }}>
                By signing up, you agree to our <Link to="/about" style={{ color: 'var(--primary)' }}>Terms of Service</Link> and <Link to="/about" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>.
                {form.role === 'teen' && parseInt(form.age) < 18 && ' Parental consent will be required.'}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn btn-primary auth-submit" style={{ flex: 2 }} disabled={loading}>
                  {loading ? <span className="btn-spinner"></span> : 'Create Account 🎉'}
                </button>
              </div>
            </form>
          )}

          <p className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
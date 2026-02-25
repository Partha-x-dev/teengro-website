import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('teengro_user') || 'null');

  React.useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('teengro_user');
    navigate('/');
  };

  if (!user) return null;

  const projects = [
    { icon: '✍️', color: '#FFE8D6', name: 'Blog Writing for HealthKart', pay: '₹500', status: 'Open', deadline: '2 days' },
    { icon: '📊', color: '#E8D6FF', name: 'Market Survey – Fashion Brand', pay: '₹300', status: 'Open', deadline: '5 days' },
    { icon: '🎨', color: '#D6E8FF', name: 'Social Media Banners – Startup', pay: '₹800', status: 'Open', deadline: '3 days' },
    { icon: '📱', color: '#D6F5EE', name: 'App Testing – EdTech App', pay: '₹400', status: 'Open', deadline: '1 day' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--light)', paddingTop: 'var(--nav-height)' }}>

      {/* Dashboard Header */}
      <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #2d2d4e 100%)', padding: '48px 5% 40px', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '6px' }}>Welcome back,</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '2rem', letterSpacing: '-1px' }}>
              {user.name} 👋
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '6px', fontSize: '0.9rem' }}>{user.email}</p>
          </div>
          <button onClick={handleLogout} className="btn btn-outline" style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.25)' }}>
            Log Out
          </button>
        </div>

        {/* Quick Stats */}
        <div style={{ maxWidth: '1100px', margin: '32px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {[
            { label: 'Wallet Balance', value: '₹0.00', icon: '💳' },
            { label: 'Projects Completed', value: '0', icon: '✅' },
            { label: 'Active Projects', value: '0', icon: '⚡' },
            { label: 'Rating', value: '—', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius)', padding: '20px 24px' }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.4rem', color: 'var(--white)', letterSpacing: '-0.5px' }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 5%' }}>

        {/* Available Projects */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.4rem', color: 'var(--text-dark)' }}>
              🔥 Available Projects
            </h2>
            <Link to="/categories" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>View all →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {projects.map((p, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '20px', border: '1px solid var(--border)', transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{p.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '1.3' }}>{p.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '3px' }}>Deadline: {p.deadline}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--accent2)', fontSize: '1.1rem' }}>{p.pay}</span>
                  <button className="btn btn-primary" style={{ padding: '7px 16px', fontSize: '0.8rem' }}>Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '36px', border: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.3rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
            🚀 Complete Your Profile
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            {[
              { icon: '📸', text: 'Add a profile photo', done: false },
              { icon: '🛠️', text: 'Add your skills', done: false },
              { icon: '📋', text: 'Apply to first project', done: false },
              { icon: '💳', text: 'Link your UPI / Bank', done: false },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'var(--light)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-dark)', fontWeight: '500' }}>{item.text}</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)' }}>→</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
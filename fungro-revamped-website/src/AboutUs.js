import React, { useEffect, useRef } from 'react';

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    const els = ref.current?.querySelectorAll('.fade-in');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const milestones = [
  { year: '2020', title: 'The Idea', desc: 'Founder Parth noticed teens had talent but no platform to monetize it. TéenGro was born in a college dorm room.' },
  { year: '2021', title: 'First 1,000 Users', desc: 'Launched beta with 50 projects. Word spread fast — within 3 months, 1,000 teens had signed up from across India.' },
  { year: '2022', title: 'Shark Tank India', desc: 'Pitched on national TV and secured ₹1.5 Cr funding. Overnight, TéenGro became a household name for Indian youth.' },
  { year: '2023', title: '10 Lakh Milestone', desc: 'Crossed 10 lakh registered users. Expanded to 12 categories and onboarded 100+ brand partners including Fortune 500 companies.' },
  { year: '2024', title: '50 Lakh & Beyond', desc: 'Now the #1 youth earning platform in India. ₹2 Crore+ paid out to teens. Expanding to Southeast Asia.' },
];

export default function AboutUs() {
  const pageRef = useFadeIn();

  return (
    <main ref={pageRef}>

      {/* HERO */}
      <section className="team-hero">
        <span className="section-tag" style={{ background: 'rgba(255,107,53,0.2)', color: '#FFD166' }}>Our Story</span>
        <h1 className="section-title fade-in" style={{ marginTop: '12px' }}>
          We Believe Every Teen<br /><span>Deserves a Head Start</span>
        </h1>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          TéenGro was built on a simple idea — that age should never be a barrier 
          to earning, growing, and becoming financially independent.
        </p>
      </section>

      {/* MISSION */}
      <section style={{ padding: '100px 5%', background: 'var(--light)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div className="fade-in">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Turning Teen Talent<br />Into <span>Real Income</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '16px', fontSize: '1.05rem' }}>
              India has 250 million teenagers. Most of them are talented, curious, and hungry 
              to prove themselves — but have nowhere to start. TéenGro bridges that gap.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '12px', fontSize: '1.05rem' }}>
              We connect young people aged 14–25 with real companies that need real work done. 
              Everyone wins — teens earn money and build portfolios, companies get fresh creative 
              energy at scale.
            </p>
          </div>
          <div className="fade-in" style={{ transitionDelay: '0.15s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '🎯', label: 'Mission', text: 'Financial independence for every Indian teen' },
              { icon: '👁️', label: 'Vision', text: 'India\'s most trusted youth employment platform' },
              { icon: '💡', label: 'Innovation', text: 'AI-powered project matching technology' },
              { icon: '🤝', label: 'Trust', text: '100% verified companies, safe payments' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px',
                border: '1px solid var(--border)', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '100px 5%', background: 'var(--white)' }}>
        <div className="text-center fade-in">
          <span className="section-tag">Journey</span>
          <h2 className="section-title">Our Story,<br /><span>Year by Year</span></h2>
        </div>
        <div style={{ maxWidth: '700px', margin: '60px auto 0', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary), var(--accent2))', borderRadius: '2px' }}></div>
          {milestones.map((m, i) => (
            <div key={i} className="fade-in" style={{ display: 'flex', gap: '32px', marginBottom: '40px', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '0.7rem', flexShrink: 0, position: 'relative', zIndex: 1, border: '3px solid var(--light)' }}>{m.year}</div>
              <div style={{ background: 'var(--light)', borderRadius: 'var(--radius)', padding: '20px 24px', flex: 1, border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '6px' }}>{m.title}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        <div className="stats-grid">
          {[
            { num: '50L+', label: 'Teen Members' },
            { num: '₹2Cr+', label: 'Total Paid Out' },
            { num: '200+', label: 'Brand Partners' },
            { num: '12', label: 'Work Categories' },
          ].map((s, i) => (
            <div className="stat-item fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="section-title fade-in">Ready to Be Part<br />of the Story?</h2>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          Join 50 lakh teens already building their future on TéenGro.
        </p>
        <div className="cta-actions fade-in" style={{ transitionDelay: '0.2s' }}>
          <a href="/signup" className="btn btn-primary">Join for Free →</a>
          <a href="/team" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Meet the Team</a>
        </div>
      </section>

    </main>
  );
}
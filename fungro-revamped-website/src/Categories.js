import React, { useEffect, useRef, useState } from 'react';

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

const allCategories = [
  {
    icon: '✍️', name: 'Content Writing', count: 120, color: '#FFE8D6',
    desc: 'Blog posts, articles, product descriptions, social captions and more.',
    tags: ['Blogging', 'SEO Writing', 'Copywriting', 'Product Descriptions'],
    pay: '₹200 – ₹1,500',
  },
  {
    icon: '📱', name: 'Social Media', count: 85, color: '#D6F5EE',
    desc: 'Manage accounts, create content calendars, and grow brand presence.',
    tags: ['Instagram', 'YouTube Scripts', 'Reels Ideas', 'Engagement'],
    pay: '₹300 – ₹2,000',
  },
  {
    icon: '🎨', name: 'Graphic Design', count: 60, color: '#D6E8FF',
    desc: 'Logos, banners, social media graphics, and brand identity design.',
    tags: ['Logo Design', 'Canva', 'Posters', 'Thumbnails'],
    pay: '₹500 – ₹5,000',
  },
  {
    icon: '🔬', name: 'Market Research', count: 95, color: '#E8FFD6',
    desc: 'Surveys, competitor analysis, and consumer behavior studies.',
    tags: ['Surveys', 'Data Collection', 'Analysis', 'Reports'],
    pay: '₹100 – ₹800',
  },
  {
    icon: '💻', name: 'App & Web Testing', count: 45, color: '#F5D6FF',
    desc: 'Test apps and websites, report bugs, and provide UX feedback.',
    tags: ['Bug Reports', 'UX Feedback', 'Beta Testing', 'Mobile Apps'],
    pay: '₹200 – ₹1,000',
  },
  {
    icon: '🎤', name: 'Voice Over', count: 30, color: '#FFD6D6',
    desc: 'Record voiceovers for videos, ads, audiobooks, and e-learning.',
    tags: ['Hindi', 'English', 'Regional Languages', 'Podcasts'],
    pay: '₹300 – ₹2,500',
  },
  {
    icon: '📸', name: 'Photography', count: 25, color: '#D6F0FF',
    desc: 'Product photography, event coverage, and stock photo creation.',
    tags: ['Product Shoots', 'Lifestyle', 'Stock Photos', 'Editing'],
    pay: '₹500 – ₹3,000',
  },
  {
    icon: '🧮', name: 'Data Entry', count: 110, color: '#FFFBD6',
    desc: 'Accurate data entry, spreadsheet management, and database updates.',
    tags: ['Excel', 'Google Sheets', 'CRM Data', 'Cataloguing'],
    pay: '₹50 – ₹500',
  },
  {
    icon: '🎬', name: 'Video Editing', count: 40, color: '#FFE8F5',
    desc: 'Edit Reels, YouTube videos, ads, and short-form content for brands.',
    tags: ['Reels', 'YouTube', 'Ads', 'Subtitles'],
    pay: '₹500 – ₹4,000',
  },
  {
    icon: '🌐', name: 'Translation', count: 55, color: '#D6FFEE',
    desc: 'Translate content across Indian and international languages accurately.',
    tags: ['Hindi', 'Tamil', 'Bengali', 'Regional'],
    pay: '₹100 – ₹1,200',
  },
  {
    icon: '📧', name: 'Email & Outreach', count: 35, color: '#E8D6FF',
    desc: 'Write cold emails, newsletters, and lead-generation outreach scripts.',
    tags: ['Cold Email', 'Newsletters', 'B2B', 'Lead Gen'],
    pay: '₹150 – ₹800',
  },
  {
    icon: '🤖', name: 'AI & Tech Tasks', count: 20, color: '#D6E0FF',
    desc: 'AI training data, prompt writing, chatbot testing, and tech support.',
    tags: ['AI Training', 'Prompt Writing', 'Chatbot', 'Tech Support'],
    pay: '₹200 – ₹1,500',
  },
];

export default function Categories() {
  const pageRef = useFadeIn();
  const [selected, setSelected] = useState(null);

  return (
    <main ref={pageRef}>

      {/* HERO */}
      <section className="team-hero">
        <span className="section-tag" style={{ background: 'rgba(255,107,53,0.2)', color: '#FFD166' }}>12 Categories</span>
        <h1 className="section-title fade-in" style={{ marginTop: '12px' }}>
          Find Work That<br /><span>Matches Your Vibe</span>
        </h1>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          From writing to design to voice acting — there's a category for every skill 
          and every interest. Hundreds of live projects waiting for you.
        </p>
      </section>

      {/* CATEGORIES GRID */}
      <section style={{ padding: '100px 5%', background: 'var(--light)' }}>
        <div className="text-center fade-in">
          <span className="section-tag">Browse All</span>
          <h2 className="section-title">All <span>12 Categories</span></h2>
          <p className="section-subtitle">Click any category to see what's inside.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginTop: '50px' }}>
          {allCategories.map((cat, i) => (
            <div key={i} className="fade-in" onClick={() => setSelected(selected === i ? null : i)}
              style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '28px',
                border: `2px solid ${selected === i ? 'var(--primary)' : 'var(--border)'}`,
                cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                transform: selected === i ? 'translateY(-6px)' : 'none',
                boxShadow: selected === i ? 'var(--shadow)' : 'none',
                transitionDelay: `${i * 0.04}s`,
              }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '14px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>{cat.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '3px' }}>{cat.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.count}+ projects</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '0.85rem', color: 'var(--accent2)' }}>{cat.pay}</div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '14px' }}>{cat.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.tags.map((tag, j) => (
                  <span key={j} style={{ background: cat.color, color: 'var(--text-dark)', borderRadius: '50px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: '600' }}>{tag}</span>
                ))}
              </div>
              {selected === i && (
                <div style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--border)', display: 'flex', gap: '10px' }}>
                  <a href="/signup" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>Apply Now →</a>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', alignSelf: 'center' }}>Sign up free to browse live projects</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="section-title fade-in">Found Your Category?<br /><span style={{ color: 'var(--accent)' }}>Start Earning Today.</span></h2>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          Join free and apply to your first project in under 5 minutes.
        </p>
        <div className="cta-actions fade-in" style={{ transitionDelay: '0.2s' }}>
          <a href="/signup" className="btn btn-primary">Create Free Account →</a>
        </div>
      </section>

    </main>
  );
}
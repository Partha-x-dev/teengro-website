import React, { useEffect, useRef } from 'react';

// Scroll animation hook
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = ref.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const projects = [
  { icon: '✍️', color: '#FFE8D6', name: 'Blog Writing', category: 'Content Creation', earn: '₹500' },
  { icon: '📱', color: '#D6F5EE', name: 'App Testing', category: 'Tech & Testing', earn: '₹300' },
  { icon: '📊', color: '#E8D6FF', name: 'Market Survey', category: 'Research', earn: '₹200' },
  { icon: '🎨', color: '#D6E8FF', name: 'Logo Design', category: 'Design', earn: '₹800' },
];

const categories = [
  { icon: '✍️', name: 'Content Writing', count: '120+ projects' },
  { icon: '📱', name: 'Social Media', count: '85+ projects' },
  { icon: '🎨', name: 'Graphic Design', count: '60+ projects' },
  { icon: '🔬', name: 'Research', count: '95+ projects' },
  { icon: '💻', name: 'App Testing', count: '45+ projects' },
  { icon: '🎤', name: 'Voice Over', count: '30+ projects' },
  { icon: '📸', name: 'Photography', count: '25+ projects' },
  { icon: '🧮', name: 'Data Entry', count: '110+ projects' },
];

const testimonials = [
  {
    stars: '★★★★★',
    text: 'I earned my first ₹2,000 in just two weeks while preparing for my boards! The projects are super flexible and the companies are legit.',
    name: 'Ananya S.',
    role: 'Class 12 Student, Mumbai',
    color: '#FF6B35',
    initials: 'A',
  },
  {
    stars: '★★★★★',
    text: 'TéenGro changed how I see work. I got a certificate from a real company and it helped me in my college applications. This is gold!',
    name: 'Rohan K.',
    role: 'First Year, Delhi University',
    color: '#06D6A0',
    initials: 'R',
  },
  {
    stars: '★★★★★',
    text: 'As a parent, I was skeptical at first. But watching my daughter build skills, earn money, and grow in confidence has been incredible.',
    name: 'Priya M.',
    role: 'Parent of a Teenlancer',
    color: '#FFD166',
    initials: 'P',
  },
];

const steps = [
  { icon: '🔐', title: 'Sign Up Free', desc: 'Create your Teenlancer profile in minutes. No experience needed — just your enthusiasm!' },
  { icon: '🗂️', title: 'Pick a Project', desc: 'Browse hundreds of live projects from real companies. Choose what matches your skills.' },
  { icon: '✅', title: 'Complete & Submit', desc: 'Follow guided steps to complete the task. Submit your work directly through the app.' },
  { icon: '💰', title: 'Get Paid Instantly', desc: 'Money hits your wallet the moment your work is approved. Withdraw to UPI anytime.' },
];

export default function Home() {
  const pageRef = useFadeIn();

  return (
    <main ref={pageRef}>

      {/* ====== HERO ====== */}
      <section className="hero">
        <div className="hero-bg-blob"></div>
        <div className="hero-bg-blob2"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              As seen on Shark Tank India
            </div>
            <h1 className="hero-title">
              Earn Real Money.<br />
              Build Real Skills.<br />
              <span className="highlight">Grow Before 18.</span>
            </h1>
            <p className="hero-desc">
              India's #1 platform for teens and youth aged 14–25. Work on real projects 
              from top brands, earn ₹50 to ₹5,000 per task, and build a portfolio 
              that gets you ahead — no investment required.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary">Start Earning Free →</a>
              <a href="#how-it-works" className="btn btn-outline">How It Works</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>50L+</strong>
                <span>Youth Joined</span>
              </div>
              <div className="hero-stat">
                <strong>200+</strong>
                <span>Companies</span>
              </div>
              <div className="hero-stat">
                <strong>12</strong>
                <span>Categories</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-badge floating-badge-1">
              🎉 <span>₹1,200 earned today!</span>
            </div>
            <div className="hero-card-main">
              <div className="hero-card-label">🔥 Live Projects</div>
              <div className="project-list">
                {projects.map((p, i) => (
                  <div className="project-item" key={i}>
                    <div className="project-icon" style={{ background: p.color }}>{p.icon}</div>
                    <div className="project-info">
                      <div className="project-name">{p.name}</div>
                      <div className="project-cat">{p.category}</div>
                    </div>
                    <div className="project-earn">{p.earn}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="floating-badge floating-badge-2">
              ✅ <span>Approved instantly</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className="how-it-works" id="how-it-works">
        <div className="text-center fade-in">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">From Zero to Earning<br /><span>in 4 Easy Steps</span></h2>
          <p className="section-subtitle">No experience. No investment. Just your skills and 10 minutes of your day.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="step-number">0{i + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== STATS ====== */}
      <div className="stats-section">
        <div className="stats-grid">
          {[
            { num: '₹2Cr+', label: 'Total Paid Out' },
            { num: '50L+', label: 'Active Teenlancers' },
            { num: '200+', label: 'Brand Partners' },
            { num: '4.8★', label: 'App Rating' },
          ].map((s, i) => (
            <div className="stat-item fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ====== CATEGORIES ====== */}
      <section className="categories" id="categories">
        <div className="text-center fade-in">
          <span className="section-tag">Explore</span>
          <h2 className="section-title">Work in What You <span>Love</span></h2>
          <p className="section-subtitle">12 categories, hundreds of live projects. Something for every skill, every interest.</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div className="category-card fade-in" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="cat-icon">{cat.icon}</span>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="testimonials">
        <div className="text-center fade-in">
          <span className="section-tag">Real Stories</span>
          <h2 className="section-title">They Started <span>Just Like You</span></h2>
          <p className="section-subtitle">Thousands of teens have already earned, learned, and grown. You're next.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card fade-in" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="testimonial-stars">{t.stars}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section">
        <span className="section-tag fade-in">Join the Movement</span>
        <h2 className="section-title fade-in" style={{ transitionDelay: '0.1s' }}>
          Your First Paycheck<br />is Waiting
        </h2>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
          Over 50 lakh young people are already earning. Download the app and 
          start your first project today — completely free.
        </p>
        <div className="cta-actions fade-in" style={{ transitionDelay: '0.3s' }}>
          <a href="/signup" className="btn btn-primary">Download App Free →</a>
          <a href="/about" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
            For Companies
          </a>
        </div>
      </section>

    </main>
  );
}
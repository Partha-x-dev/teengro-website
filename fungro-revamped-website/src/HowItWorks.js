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

const steps = [
  {
    icon: '🔐', step: '01', title: 'Create Your Free Profile',
    desc: 'Sign up in under 2 minutes. Add your skills, interests, and a short bio. No resume needed — we just want to know what you love doing.',
    tips: ['Age verification (14–25)', 'Parental consent for under 18', 'No fees, ever'],
  },
  {
    icon: '🗂️', step: '02', title: 'Browse & Apply to Projects',
    desc: 'Explore hundreds of live projects filtered by category, pay range, and time commitment. Found something cool? Apply with one tap.',
    tips: ['Filter by skill level', 'See estimated time per task', 'Read company reviews'],
  },
  {
    icon: '✅', step: '03', title: 'Complete the Task',
    desc: 'Follow the guided task instructions. Submit your work directly through the platform. Our quality team gives feedback within 24 hours.',
    tips: ['Step-by-step task guide', 'Ask questions in task chat', 'Revisions allowed'],
  },
  {
    icon: '💰', step: '04', title: 'Get Paid Instantly',
    desc: 'Once your work is approved, money hits your TéenGro wallet immediately. Withdraw to UPI, bank account, or redeem for gift cards.',
    tips: ['Instant wallet credit', 'UPI & bank withdrawal', 'No minimum payout'],
  },
  {
    icon: '🏆', step: '05', title: 'Build Your Portfolio',
    desc: 'Every completed project adds to your TéenGro portfolio. Earn badges, climb the leaderboard, and get verified certificates from real companies.',
    tips: ['Shareable portfolio link', 'Company certificates', 'Skill badges & ranks'],
  },
];

const faqs = [
  { q: 'Who can join TéenGro?', a: 'Anyone aged 14–25 can join. If you\'re under 18, you\'ll need a parent or guardian to approve your account during signup.' },
  { q: 'Is it completely free?', a: 'Yes! Signing up and applying to projects is 100% free. TéenGro takes a small platform fee only after you earn — so we only win when you win.' },
  { q: 'How long does it take to get paid?', a: 'Once your work is approved by the company, your wallet is credited instantly. Withdrawals to UPI take under 5 minutes.' },
  { q: 'What if my work gets rejected?', a: 'You\'ll receive detailed feedback and get one free revision attempt. Our support team is always available to help you improve.' },
  { q: 'Are the companies real and verified?', a: 'Absolutely. Every company goes through a strict verification process before posting projects. We have 200+ verified brand partners.' },
  { q: 'Can I work on multiple projects at once?', a: 'Yes! You can take up to 3 projects simultaneously. As you build your reputation, that limit increases.' },
];

export default function HowItWorks() {
  const pageRef = useFadeIn();

  return (
    <main ref={pageRef}>

      {/* HERO */}
      <section className="team-hero">
        <span className="section-tag" style={{ background: 'rgba(255,107,53,0.2)', color: '#FFD166' }}>Simple & Transparent</span>
        <h1 className="section-title fade-in" style={{ marginTop: '12px' }}>
          Earning Money Has<br /><span>Never Been This Easy</span>
        </h1>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          From signup to your first payout — here's exactly how TéenGro works, 
          step by step. No hidden steps, no confusing process.
        </p>
      </section>

      {/* STEPS */}
      <section style={{ padding: '100px 5%', background: 'var(--light)' }}>
        <div className="text-center fade-in">
          <span className="section-tag">The Process</span>
          <h2 className="section-title">5 Steps to Your<br /><span>First Paycheck</span></h2>
        </div>
        <div style={{ maxWidth: '900px', margin: '60px auto 0', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {steps.map((s, i) => (
            <div key={i} className="fade-in" style={{
              background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '36px',
              border: '1px solid var(--border)', display: 'grid',
              gridTemplateColumns: 'auto 1fr', gap: '28px', alignItems: 'start',
              transitionDelay: `${i * 0.1}s`
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255,107,53,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.4rem', color: 'rgba(255,107,53,0.25)', letterSpacing: '-1px' }}>{s.step}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px', fontSize: '0.95rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {s.tips.map((tip, j) => (
                    <span key={j} style={{ background: 'rgba(255,107,53,0.08)', color: 'var(--primary)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.8rem', fontWeight: '600' }}>✓ {tip}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 5%', background: 'var(--white)' }}>
        <div className="text-center fade-in">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked<br /><span>Questions</span></h2>
        </div>
        <div style={{ maxWidth: '780px', margin: '50px auto 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="section-title fade-in">Now You Know the Steps.<br /><span style={{ color: 'var(--accent)' }}>Take the First One.</span></h2>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          Sign up free and start browsing projects in the next 2 minutes.
        </p>
        <div className="cta-actions fade-in" style={{ transitionDelay: '0.2s' }}>
          <a href="/signup" className="btn btn-primary">Get Started Free →</a>
        </div>
      </section>

    </main>
  );
}

function FAQItem({ q, a, delay }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="fade-in" style={{ transitionDelay: `${delay}s`, background: 'var(--light)', borderRadius: 'var(--radius)', border: `1px solid ${open ? 'var(--primary)' : 'var(--border)'}`, overflow: 'hidden', transition: 'border-color 0.2s' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '1rem', color: 'var(--text-dark)' }}>{q}</span>
        <span style={{ fontSize: '1.4rem', color: 'var(--primary)', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{a}</div>
      )}
    </div>
  );
}
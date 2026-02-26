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

const teamMembers = [
  {
    name: 'Parth Sharma',
    role: 'Founder & CEO',
    bio: 'IIM Ahmedabad alumnus with a passion for youth empowerment. Previously led product at two edtech unicorns. Believes every teenager deserves financial independence.',
    emoji: '👨‍💼',
    cardColor: '#FF6B35',
  },
  {
    name: 'Riya Patel',
    role: 'Chief Technology Officer',
    bio: 'Ex-Flipkart engineer with 8+ years in scalable platforms. Built TéenGro core matching algorithm that connects teens with the perfect projects.',
    emoji: '👩‍💻',
    cardColor: '#06D6A0',
  },
  {
    name: 'Arjun Mehta',
    role: 'Head of Partnerships',
    bio: 'Forged relationships with 200+ brands including Fortune 500 companies. Shark Tank pitch strategist. Loves cricket and cold brew coffee.',
    emoji: '🤝',
    cardColor: '#FFD166',
  },
  {
    name: 'Sneha Rao',
    role: 'Head of Product',
    bio: 'Designed user experiences loved by millions. Alumna of NID Ahmedabad. Obsessed with making complex things beautifully simple.',
    emoji: '🎨',
    cardColor: '#A78BFA',
  },
  {
    name: 'Vikram Nair',
    role: 'Head of Growth',
    bio: 'Built TéenGro from 0 to 50L users with zero paid ads. Viral marketing wizard, content creator, and former teen entrepreneur himself.',
    emoji: '📈',
    cardColor: '#F472B6',
  },
  {
    name: 'Meera Iyer',
    role: 'Community Lead',
    bio: 'Created the TéenGro community playbook. Hosts weekly sessions for our Teenlancers. Former school counsellor with a huge heart.',
    emoji: '🌟',
    cardColor: '#34D399',
  },
];

const values = [
  {
    emoji: '🚀',
    title: 'Real Opportunities',
    text: 'Every project on TéenGro is from a verified company. No fake tasks, no spam — just genuine work that builds your career.',
  },
  {
    emoji: '🛡️',
    title: 'Safety First',
    text: 'Parental approvals, age verification, and a safe payment system. We protect teens at every step of their journey.',
  },
  {
    emoji: '📚',
    title: 'Learn While You Earn',
    text: 'Skill-building is baked into everything. Every project teaches you something new about the real world of work.',
  },
  {
    emoji: '💳',
    title: 'Instant Payments',
    text: 'Your money, your wallet — immediately. No delays, no excuses. Withdraw to any UPI or bank account in seconds.',
  },
];

export default function Team() {
  const pageRef = useFadeIn();

  return (
    <main ref={pageRef}>

      <section className="team-hero">
        <span className="section-tag" style={{ background: 'rgba(255,107,53,0.2)', color: '#FFD166' }}>
          Meet the Builders
        </span>
        <h1 className="section-title fade-in" style={{ marginTop: '12px' }}>
          The People Behind<br />
          <span><strong>TéenGro</strong></span>
        </h1>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
          Educators, engineers, entrepreneurs, and parents united by a single mission:
          to give every Indian teenager a real shot at financial independence.
        </p>
      </section>

      <section className="team-grid-section" style={{ padding: '100px 5%' }}>
        <div className="text-center fade-in">
          <span className="section-tag">Core Team</span>
          <h2 className="section-title">Passionate People,<br /><span>Bold Mission</span></h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div className="team-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div
                className="team-card-header"
                style={{ background: 'linear-gradient(135deg, ' + member.cardColor + ', ' + member.cardColor + '99)' }}
              >
                <div className="team-avatar">{member.emoji}</div>
              </div>
              <div className="team-card-body">
                <div className="team-name">{member.name}</div>
                <div className="team-role" style={{ color: member.cardColor }}>{member.role}</div>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <div className="social-btn" title="LinkedIn">in</div>
                  <div className="social-btn" title="Twitter">tw</div>
                  <div className="social-btn" title="Email">@</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="text-center fade-in">
          <span className="section-tag">Our Beliefs</span>
          <h2 className="section-title">What We Stand <span style={{ color: '#FF6B35' }}>For</span></h2>
          <p className="section-subtitle">
            These are not just company values on a wall. They are the principles that guide
            every decision we make for our Teenlancers.
          </p>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className="value-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="value-icon">{v.emoji}</div>
              <div className="value-title">{v.title}</div>
              <p className="value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <span className="section-tag fade-in">We are Hiring</span>
        <h2 className="section-title fade-in" style={{ transitionDelay: '0.1s' }}>
          Want to Change<br />Young Lives?
        </h2>
        <p className="section-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
          Join our team of passionate builders and help us create India's most impactful
          youth platform. We are growing fast and looking for extraordinary people.
        </p>
        <div className="cta-actions fade-in" style={{ transitionDelay: '0.3s' }}>
          <a href="/about" className="btn btn-primary">View Open Roles</a>
          <a href="/about" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
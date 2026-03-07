import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skillsData = [
  {
    icon: '🛡️',
    cat: 'BLUE TEAM / SOC',
    tags: [
      { label: 'Trend Micro', hot: true },
      { label: 'SentinelOne', hot: true },
      { label: 'Sophos' },
      { label: 'Azure Sentinel', hot: true },
      { label: 'Incident Response' },
      { label: 'Threat Hunting' },
      { label: 'SIEM' },
      { label: 'XDR' },
    ],
  },
  {
    icon: '⚔️',
    cat: 'OFFENSIVE / PENTEST',
    tags: [
      { label: 'Web App Pentest', hot: true },
      { label: 'Firewall Pentest' },
      { label: 'CTF' },
      { label: 'OWASP Top 10' },
      { label: 'Ethical Hacking', hot: true },
      { label: 'Red Team Labs' },
    ],
  },
  {
    icon: '🔍',
    cat: 'OSINT & INTELIGÊNCIA',
    tags: [
      { label: 'OSINT', hot: true },
      { label: 'Investigação Digital' },
      { label: 'Análise de IOCs' },
      { label: 'AXUR', hot: true },
      { label: 'Threat Intelligence' },
      { label: 'Análise de Metadados' },
      { label: 'Perícia Digital', hot: true },
    ],
  },
  {
    icon: '🔒',
    cat: 'VULNERABILIDADES',
    tags: [
      { label: 'Qualys', hot: true },
      { label: 'Nessus', hot: true },
      { label: 'Imperva WAF' },
      { label: 'API Security' },
      { label: 'CloudFlare', hot: true },
      { label: 'Anti-Bot / ABP' },
      { label: 'Firewall Analysis' },
    ],
  },
  {
    icon: '☁️',
    cat: 'CLOUD',
    tags: [
      { label: 'AWS' },
      { label: 'Azure', hot: true },
      { label: 'Oracle Cloud' },
      { label: 'Huawei Cloud' },
      { label: 'VMware' },
      { label: 'Cloud Security' },
    ],
  },
  {
    icon: '💻',
    cat: 'DESENVOLVIMENTO',
    tags: [
      { label: 'Python', hot: true },
      { label: 'Shell Script', hot: true },
      { label: 'Automação' },
      { label: 'React.js' },
      { label: 'JavaScript' },
      { label: 'HTML5 / CSS3' },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2>HABILIDADES</h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {skillsData.map((card, i) => (
            <div
              key={i}
              className="skill-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__cat">
                <span className="skill-card__icon">{card.icon}</span>
                {card.cat}
              </div>
              <div className="skill-card__tags">
                {card.tags.map((t, j) => (
                  <span key={j} className={`skill-tag ${t.hot ? 'skill-tag--hot' : ''}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

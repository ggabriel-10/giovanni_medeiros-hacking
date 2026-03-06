import React, { useEffect, useRef } from 'react';
import './Formacao.css';

/* ── SVG university logos ── */
const EstacioLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#003087"/>
    <text x="50" y="58" textAnchor="middle" fontSize="38" fontWeight="bold" fill="white" fontFamily="serif">E</text>
  </svg>
);

const UniCidadeLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#006400"/>
    <text x="50" y="62" textAnchor="middle" fontSize="34" fontWeight="bold" fill="white" fontFamily="serif">UC</text>
  </svg>
);

const educacao = [
  {
    Logo: EstacioLogo,
    color: '#003087',
    degree: 'Análise e Desenvolvimento de Sistemas',
    uni: 'Universidade Estácio de Sá',
    period: '2021 — 2024',
  },
  {
    Logo: UniCidadeLogo,
    color: '#006400',
    degree: 'Redes de Computadores',
    uni: 'Universidade Cidade de São Paulo',
    period: '2019 — 2021',
  },
];

const Formacao = () => {
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
    <section id="formacao" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">06</span>
          <h2>FORMAÇÃO</h2>
          <div className="section-line" />
        </div>

        <div className="formacao-grid">
          {educacao.map((edu, i) => (
            <div
              key={i}
              className="edu-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="edu-card__logo" style={{ '--logo-glow': edu.color }}>
                <edu.Logo />
              </div>
              <div>
                <div className="edu-card__degree">{edu.degree}</div>
                <div className="edu-card__uni">{edu.uni}</div>
                <div className="edu-card__period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacao;

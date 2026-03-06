import React, { useEffect, useRef } from 'react';
import './Formacao.css';
import estacioImg from '../image/estacio.png';
import unicidImg  from '../image/unicid.png';

const educacao = [
  {
    logoSrc: estacioImg,
    logoAlt: 'Estácio de Sá',
    color: '#1565C0',
    degree: 'Análise e Desenvolvimento de Sistemas',
    uni: 'Universidade Estácio de Sá',
    period: '2021 — 2024',
  },
  {
    logoSrc: unicidImg,
    logoAlt: 'Uni Cidade SP',
    color: '#00897B',
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
                <img src={edu.logoSrc} alt={edu.logoAlt} style={{ width: 36, height: 36, objectFit: 'contain' }} />
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

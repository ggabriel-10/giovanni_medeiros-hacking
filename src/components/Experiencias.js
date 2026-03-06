import React, { useEffect, useRef } from 'react';
import './Experiencias.css';

/* ── Company Logos ── */
const SecurewayLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#0a1a26"/>
    <path d="M50 15 L78 30 L78 55 C78 70 65 82 50 88 C35 82 22 70 22 55 L22 30 Z" fill="none" stroke="#00d4ff" strokeWidth="5"/>
    <path d="M38 50 L46 58 L63 41" fill="none" stroke="#00ff9d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SkyoneLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#0d1b2e"/>
    <circle cx="50" cy="38" r="18" fill="none" stroke="#4fa3e0" strokeWidth="5"/>
    <path d="M32 65 Q50 55 68 65 Q50 80 32 65Z" fill="#4fa3e0"/>
  </svg>
);

const DemetraLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#1a1a2e"/>
    <rect x="18" y="30" width="64" height="10" rx="2" fill="#7b68ee"/>
    <rect x="18" y="48" width="45" height="10" rx="2" fill="#7b68ee"/>
    <rect x="18" y="66" width="28" height="10" rx="2" fill="#7b68ee"/>
  </svg>
);

const VendonLogo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="8" fill="#1a2e1a"/>
    <polygon points="50,18 82,75 18,75" fill="none" stroke="#28c840" strokeWidth="5"/>
    <circle cx="50" cy="54" r="8" fill="#28c840"/>
  </svg>
);

const jobs = [
  {
    Logo: SecurewayLogo,
    logoColor: '#00d4ff',
    role: 'Cyber Security Analyst',
    company: 'Secureway',
    period: 'FEB 2024 — PRESENT',
    current: true,
    tasks: [
      'Administração das soluções Trend Micro e Sophos',
      'Gestão de vulnerabilidades com Qualys e Nessus',
      'Resposta a incidentes e análise de riscos cibernéticos',
      'Investigação de vazamentos de credenciais e phishing',
      'Detecção e mitigação de fraudes de domínio via AXUR',
      'Automações com Python e Shell Script',
      'Pentests em aplicações web e firewalls',
      'OSINT para análise de ameaças, IOCs e domínios',
    ],
  },
  {
    Logo: SkyoneLogo,
    logoColor: '#4fa3e0',
    role: 'Cyber Security Analyst',
    company: 'Skyone Solutions',
    period: 'MAY 2023 — MAY 2024',
    current: false,
    tasks: [
      'Resposta e análise de incidentes (Trend Micro, SentinelOne)',
      'Criação e atualização de playbooks no Confluence',
      'Análise de logs de firewall e WAF',
      'Monitoramento com SIEM Azure Sentinel',
      'Análise de vulnerabilidades em ambientes cloud',
      'Scripts em Shell Script para investigação de dados',
    ],
  },
  {
    Logo: DemetraLogo,
    logoColor: '#7b68ee',
    role: 'Infrastructure Analyst',
    company: 'Demetra Tecnologia',
    period: 'MAY 2022 — APR 2023',
    current: false,
    tasks: [
      'Monitoramento de servidores com Netwall',
      'Virtualização em Oracle, VMware, Huawei, AWS',
      'Criação de ambientes Windows e Linux virtualizados',
      'Automação de rotinas de backup',
      'Troubleshooting e suporte em servidores',
    ],
  },
  {
    Logo: VendonLogo,
    logoColor: '#28c840',
    role: 'Front-end Developer',
    company: 'Vendon Tecnologia',
    period: 'OCT 2021 — MAY 2022',
    current: false,
    tasks: [
      'Criação de landing pages de produtos e serviços',
      'Formulários responsivos para coleta de dados',
      'Websites responsivos para múltiplos dispositivos',
      'Stack: JavaScript, HTML5, CSS3, React.js, Python',
    ],
  },
];

const Experiencias = () => {
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
    <section id="experiencia" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2>EXPERIÊNCIA</h2>
          <div className="section-line" />
        </div>

        <div className="exp-grid">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`exp-card animate-on-scroll ${job.current ? 'exp-card--current' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="exp-card__top">
                <span className="exp-card__role">{job.role}</span>
                <span className="exp-card__period">{job.period}</span>
              </div>
              <div className="exp-card__company-row">
                <div className="exp-card__logo" style={{ '--logo-glow': job.logoColor }}>
                  <job.Logo />
                </div>
                <div className="exp-card__company">
                  {job.company}
                  {job.current && <span className="exp-card__badge">● CURRENT</span>}
                </div>
              </div>
              <ul className="exp-card__list">
                {job.tasks.map((task, j) => (
                  <li key={j}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencias;

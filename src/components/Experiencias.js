import React, { useEffect, useRef } from 'react';
import './Experiencias.css';

const jobs = [
  {
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
              <div className="exp-card__company">
                {job.company}
                {job.current && <span className="exp-card__badge">● CURRENT</span>}
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

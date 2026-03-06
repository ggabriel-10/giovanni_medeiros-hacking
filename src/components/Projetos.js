import React, { useEffect, useRef } from 'react';
import './Projetos.css';

const projetos = [
  {
    label: '// FORENSE DIGITAL · 2025',
    title: 'Perícia Técnica — Laudo Pericial Extrajudicial',
    desc:
      'Validação técnica de arquivos digitais em processo envolvendo a Federação Paulista de Futebol (FPF). Incluiu análise de metadados, verificação de datas de criação/modificação, validação de integridade por hash, análise de consistência temporal e elaboração de parecer técnico para suporte jurídico.',
  },
  {
    label: '// OSINT · CONTÍNUO',
    title: 'Investigação OSINT — Exposição Digital Corporativa',
    desc:
      'Análise e mapeamento de exposição digital de empresas. Identificação de ativos expostos, coleta de informações sensíveis em fontes abertas, detecção de vulnerabilidades e elaboração de relatórios técnicos com recomendações de mitigação.',
  },
  {
    label: '// API SECURITY · CONTÍNUO',
    title: 'Anti-Fraude e API Security — Imperva',
    desc:
      'Gestão de vulnerabilidades em aplicações via plataforma Imperva (OWASP Top 10), análise de requisições suspeitas, detecção e bloqueio de bots maliciosos, com elaboração e envio de relatórios técnicos detalhados.',
  },
];

const Projetos = () => {
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
    <section id="projetos" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2>PROJETOS</h2>
          <div className="section-line" />
        </div>

        <div className="projetos-grid">
          {projetos.map((p, i) => (
            <div
              key={i}
              className="proj-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="proj-card__label">{p.label}</div>
              <div className="proj-card__title">{p.title}</div>
              <p className="proj-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;

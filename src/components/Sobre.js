import React, { useEffect, useRef } from 'react';
import './Sobre.css';

const langData = [
  { name: 'Português', level: 'NATIVO',             pct: 100 },
  { name: 'Inglês',    level: 'B1 — INTERMEDIÁRIO', pct: 55  },
  { name: 'Espanhol',  level: 'B2 — INTER. ALTO',  pct: 70  },
];

const Sobre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2>SOBRE MIM</h2>
          <div className="section-line" />
        </div>

        <div className="sobre__grid">
          {/* LEFT TEXT */}
          <div className="sobre__text animate-on-scroll">
            <p>
              Profissional de Cyber Security com foco em Blue Team, investigação de ameaças e análise
              técnica de vulnerabilidades. Possuo experiência na identificação e mitigação de riscos
              cibernéticos, atuando com análise de incidentes, investigação de atividades suspeitas,
              gestão de vulnerabilidades e fortalecimento da postura de segurança de ambientes corporativos.
            </p>
            <p>
              Tenho forte atuação em{' '}
              <strong className="sobre__accent">OSINT (Open-Source Intelligence)</strong>, realizando
              investigações digitais, análise de exposição de ativos, coleta e correlação de dados em
              fontes abertas, identificação de ameaças e análise de indicadores de comprometimento (IOCs).
            </p>
            <p>
              Também desenvolvo continuamente habilidades em{' '}
              <strong className="sobre__accent2">hacking ético e pentest</strong>, com foco em exploração
              de vulnerabilidades, enumeração de sistemas, análise de aplicações web, técnicas de
              privilege escalation e investigação de superfícies de ataque.
            </p>
            <p>
              Minha abordagem combina análise técnica, investigação e inteligência de ameaças para
              identificar riscos, compreender comportamentos maliciosos e fortalecer estratégias de
              defesa e prevenção em segurança da informação.
            </p>
          </div>

          {/* RIGHT: STATS + LANGS */}
          <div className="sobre__right animate-on-scroll">
            <div className="terminal sobre__stats">
              <div className="terminal-header">
                <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
                <span className="terminal-title">stats.json</span>
              </div>
              <div className="terminal-body sobre__stats-body">
                <div><span className="t-out">"experiência":</span> <span className="t-val">"3+ anos"</span></div>
                <div><span className="t-out">"foco":</span> <span className="t-val2">"Blue + Red Team"</span></div>
                <div><span className="t-out">"certs":</span> <span className="t-val">"6 certificações"</span></div>
                <div><span className="t-out">"idiomas":</span> <span className="t-val2">"PT · EN · ES"</span></div>
                <div><span className="t-out">"status":</span> <span className="sobre__online">"disponível"</span></div>
              </div>
            </div>

            <div className="sobre__langs">
              {langData.map(({ name, level, pct }) => (
                <div className="lang-item" key={name}>
                  <div className="lang-top">
                    <span className="lang-name">{name}</span>
                    <span className="lang-level">{level}</span>
                  </div>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

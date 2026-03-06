import React from 'react';
import './Hero.css';
import fotoGiovanni from '../image/gm-foto.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow" />
      <div className="container">
        <div className="hero__grid">

          {/* LEFT CONTENT */}
          <div className="hero__content">
            <div className="hero__tag fade-in">Ethical Hacking</div>

            <h1 className="hero__name fade-in delay-1">
              Giovanni<br /><span className="hero__highlight">Medeiros</span>
            </h1>

            <div className="hero__role fade-in delay-2">
              <span>root@gm-security:~$</span>
              <span className="hero__cursor">▌</span>
            </div>

            <p className="hero__desc fade-in delay-2">
              Cyber Security Analyst focused on Threat Hunting, OSINT and Ethical Hacking.
              Specialized in vulnerability analysis, digital investigation and offensive security techniques.
            </p>

            <div className="hero__badges fade-in delay-3">
              <span className="badge green">BLUE TEAM</span>
              <span className="badge">SOC ANALYST</span>
              <span className="badge">THREAT HUNTING</span>
              <span className="badge red">RED TEAM / CTF</span>
              <span className="badge">OSINT</span>
              <span className="badge">PENTEST</span>
              <span className="badge green">XDR / SIEM</span>
              <span className="badge">INCIDENT RESPONSE</span>
            </div>

            <div className="hero__cta fade-in delay-4">
              <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                [ ENTRAR EM CONTATO ]
              </a>
              <a href="#experiencia" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' }); }}>
                [ VER EXPERIÊNCIA ]
              </a>
            </div>
          </div>

          {/* RIGHT: PHOTO + TERMINAL */}
          <div className="hero__right fade-in delay-2">

            {/* PHOTO */}
            <div className="hero__photo-wrapper">
              <div className="hero__photo-ring" />
              <div className="hero__photo-bg" />
              <img
                src={fotoGiovanni}
                alt="Giovanni Medeiros"
                className="hero__photo"
              />
              <div className="hero__photo-status" />
            </div>

            {/* TERMINAL */}
            <div className="terminal">
              <div className="terminal-header">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
                <span className="terminal-title">profile.sh</span>
              </div>
              <div className="terminal-body">
                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">whoami</span></div>
                <div className="t-out"><span className="t-val">giovanni_medeiros</span></div>

                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">cat location.txt</span></div>
                <div className="t-out"><span className="t-val2">Suzano, São Paulo — BR</span></div>

                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">cat focus.txt</span></div>
                <div className="t-out"><span className="t-val">Blue Team · Red Team · OSINT</span></div>
                <div className="t-out"><span className="t-val">Incident Response · Pentest</span></div>

                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">cat current_role.txt</span></div>
                <div className="t-out"><span className="t-val3">Cyber Security Analyst</span></div>
                <div className="t-out"><span className="t-val2">@ Stefanini Cyber [ACTIVE]</span></div>

                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">ls certifications/</span></div>
                <div className="t-out"><span className="t-val">AZ-900  FCF  FCA  OCI  TM-XDR</span></div>

                <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd">ping status</span></div>
                <div className="t-out"><span className="t-val2">ONLINE ● disponível para oportunidades</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

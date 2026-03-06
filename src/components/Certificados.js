import React, { useEffect, useRef } from 'react';
import './Certificados.css';

const certs = [
  { icon: '☁️', name: 'AZ-900',                              issuer: 'MICROSOFT CERTIFIED' },
  { icon: '🔐', name: 'Fortinet Certified Fundamentals',     issuer: 'FORTINET — FCF' },
  { icon: '🛡️', name: 'Fortinet Certified Associate',        issuer: 'FORTINET — FCA' },
  { icon: '☁️', name: 'Oracle Cloud Infrastructure Foundations', issuer: 'ORACLE CERTIFIED' },
  { icon: '⚡', name: 'Trend Vision One XDR Advanced',       issuer: 'TREND MICRO CERTIFIED' },
  { icon: '⚡', name: 'Trend Vision One Platform Advanced',  issuer: 'TREND MICRO CERTIFIED' },
];

const Certificados = () => {
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
    <section id="certs" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-num">04</span>
          <h2>CERTIFICAÇÕES</h2>
          <div className="section-line" />
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="cert-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="cert-card__icon">{cert.icon}</div>
              <div>
                <div className="cert-card__name">{cert.name}</div>
                <div className="cert-card__issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificados;

import React, { useEffect, useRef } from 'react';
import './Certificados.css';

/* ── SVG logos inline ── */
const MicrosoftLogo = () => (
  <svg width="28" height="28" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <rect x="1"  y="1"  width="9" height="9" fill="#F25022"/>
    <rect x="11" y="1"  width="9" height="9" fill="#7FBA00"/>
    <rect x="1"  y="11" width="9" height="9" fill="#00A4EF"/>
    <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
  </svg>
);

const FortinetLogo = () => (
  <svg width="30" height="28" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 40,0 40,110 0,110"   fill="#EE3124"/>
    <polygon points="80,0 120,0 120,110 80,110" fill="#EE3124"/>
    <polygon points="40,30 80,30 80,80 40,80"  fill="#EE3124"/>
  </svg>
);

const OracleLogo = () => (
  <svg width="36" height="24" viewBox="0 0 100 36" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="18" rx="50" ry="18" fill="#F80000"/>
    <ellipse cx="50" cy="18" rx="32" ry="12" fill="#0A0A0A"/>
  </svg>
);

const TrendMicroLogo = () => (
  <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#D71920"/>
    <path d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z" fill="none" stroke="white" strokeWidth="6"/>
    <circle cx="50" cy="50" r="10" fill="white"/>
  </svg>
);

const certs = [
  { Logo: MicrosoftLogo, name: 'AZ-900',                              issuer: 'MICROSOFT CERTIFIED',   color: '#00A4EF' },
  { Logo: FortinetLogo,  name: 'Fortinet Certified Fundamentals',     issuer: 'FORTINET — FCF',        color: '#EE3124' },
  { Logo: FortinetLogo,  name: 'Fortinet Certified Associate',        issuer: 'FORTINET — FCA',        color: '#EE3124' },
  { Logo: OracleLogo,    name: 'Oracle Cloud Infrastructure Foundations', issuer: 'ORACLE CERTIFIED',  color: '#F80000' },
  { Logo: TrendMicroLogo,name: 'Trend Vision One XDR Advanced',       issuer: 'TREND MICRO CERTIFIED', color: '#D71920' },
  { Logo: TrendMicroLogo,name: 'Trend Vision One Platform Advanced',  issuer: 'TREND MICRO CERTIFIED', color: '#D71920' },
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
              <div className="cert-card__logo" style={{ '--logo-glow': cert.color }}>
                <cert.Logo />
              </div>
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

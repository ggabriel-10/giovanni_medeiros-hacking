import React, { useEffect, useRef } from 'react';
import './Certificados.css';
import fortinetImg   from '../image/fortinet.png';
import oracleImg     from '../image/oracle.jpg';
import trendImg      from '../image/trendmicro.svg';

const ImgLogo = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: 32, height: 32, objectFit: 'contain' }} />
);

const MicrosoftLogo = () => (
  <svg width="30" height="30" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <rect x="0"  y="0"  width="10" height="10" fill="#F25022"/>
    <rect x="11" y="0"  width="10" height="10" fill="#7FBA00"/>
    <rect x="0"  y="11" width="10" height="10" fill="#00A4EF"/>
    <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
  </svg>
);

const certs = [
  { logo: <MicrosoftLogo />,                                name: 'AZ-900',                               issuer: 'MICROSOFT CERTIFIED',   color: '#00A4EF' },
  { logo: <ImgLogo src={fortinetImg}  alt="Fortinet"  />,  name: 'Fortinet Certified Fundamentals',      issuer: 'FORTINET — FCF',        color: '#EE3124' },
  { logo: <ImgLogo src={fortinetImg}  alt="Fortinet"  />,  name: 'Fortinet Certified Associate',         issuer: 'FORTINET — FCA',        color: '#EE3124' },
  { logo: <ImgLogo src={oracleImg}    alt="Oracle"    />,  name: 'Oracle Cloud Infrastructure Foundations', issuer: 'ORACLE CERTIFIED',   color: '#C74634' },
  { logo: <ImgLogo src={trendImg}     alt="Trend Micro"/>, name: 'Trend Vision One XDR Advanced',        issuer: 'TREND MICRO CERTIFIED', color: '#D71920' },
  { logo: <ImgLogo src={trendImg}     alt="Trend Micro"/>, name: 'Trend Vision One Platform Advanced',   issuer: 'TREND MICRO CERTIFIED', color: '#D71920' },
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
                {cert.logo}
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

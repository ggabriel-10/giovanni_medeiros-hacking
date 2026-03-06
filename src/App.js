import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Experiencias from './components/Experiencias';
import Skills from './components/Skills';
import Certificados from './components/Certificados';
import Projetos from './components/Projetos';
import Formacao from './components/Formacao';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <Experiencias />
      <Skills />
      <Certificados />
      <Projetos />
      <Formacao />
      <Contato />
      <footer>
        <div className="container">
          <p className="footer-text">
            <span>Giovanni Medeiros</span> · Cyber Security Analyst · Suzano, SP — 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

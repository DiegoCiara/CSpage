import logo from './logo.png';
import './App.css';
import { Card } from './components/Card';
import { labels } from './labels';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="title">
          <p className="description">
            Aqui você encontra tudo o que precisa para ter sucesso em nossas
            ferramentas
          </p>
        </div>
        <div className="grid cards">
          {labels.map((cardObj) => (
            <Card
              title={cardObj.titulo}
              descricao={cardObj.descricao}
              link={cardObj.link}
            />
          ))}
        </div>
        <div className="footerOptions">
          <button className="ButtonFooterOptions">Novidades do produto</button>
          <button className="ButtonFooterOptions">Perguntas frequentes</button>
        </div>
        <footer className="footer"></footer>
        {/* <Routes /> */}
      </div>
    </div>
  );
}

export default App;

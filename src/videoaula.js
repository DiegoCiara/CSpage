import logo from './logo.png';
import './App.css';
import { Card } from './components/Card';
import { labels } from './labels';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="title">
          <p className="description">essa é a página de videoaulas</p>
        </div>
        <div className="gridCards">
          {labels.map((cardObj) => (
            <Card
              title={cardObj.titulo}
              descricao={cardObj.descricao}
              link={cardObj.link}
            />
          ))}
        </div>
        <div className="footerOptions">
          <button className="ButtonFooterOptions">Atualizações</button>
          <button className="ButtonFooterOptions">Perguntas frequentes</button>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;

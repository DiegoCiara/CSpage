import logo from './logo.png';
import image from './image.png';
import './App.css';
import { MiniCard } from './components/Minicard';
import { Card } from './components/Card';
import { labels, talkUs } from './labels';
import { EptaCs, Eventos } from './components/Extracard';
import { FaAccessibleIcon } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header"></div>
      </header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img src={image} className="App-logo" alt="image" />
      <div className="container">
        <div className="title">
          <h1 className="subtitle">Expreriência completa de ponta a ponta</h1>
          <p className="description">
            Abaixo você encontra tudo o que precisa para otimizar seu
            aprendizado sobre o Naboo, dividido por categorias
          </p>
        </div>
        <div className="grid cards">
          {labels.map((cardObj) => (
            <Card
              title={cardObj.titulo}
              descricao={cardObj.descricao}
              link={cardObj.link}
              icon={cardObj.icon}
            />
          ))}
        </div>
      </div>
      <div className="container second">
      <div className="grid extracards">

        <EptaCs/>
        <Eventos/>
      </div>
      </div>

      <div className="container third">
        <div className="title">
          <h1 className="subtitle third">Precisa falar conosco?</h1>
        </div>
        <div className="grid minicards">
          {talkUs.map((cardObj) => (
            <MiniCard
              title={cardObj.titulo}
              descricao={cardObj.descricao}
              link={cardObj.link}
            />
          ))}
        </div>
      </div>
      <div className="container third">
        <div className="title">
          <h1 className="subtitle third">Accordion</h1>
        </div>
        <div className="grid minicards">
          {/* {talkUs.map((cardObj) => (
            <MiniCard
              title={cardObj.titulo}
              descricao={cardObj.descricao}
              link={cardObj.link}
            />
          ))} */}
        </div>

      </div>
        {/* <div className="footerOptions">
          <button className="ButtonFooterOptions">Novidades do produto</button>
          <button className="ButtonFooterOptions">Perguntas frequentes</button>
        </div>
        <footer className="footer"></footer> */}
        {/* <Routes /> */}
    </div>
  );
}

export default App;

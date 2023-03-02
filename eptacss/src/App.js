import logo from './logo.png';
import image from './image.png';
import './App.css';
import { MiniCard } from './components/Minicard';
import { Card } from './components/Card';
import { labels, talkUs } from './labels';
import { EptaCs, Eventos } from './components/Extracard';
import { FaAccessibleIcon } from 'react-icons/fa';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="menu">
            <p href=""> O que é o Naboo?</p>
            <p href=""> Como funciona?</p>
            <p href=""> Aprenda mais</p>
            <p href=""> Fale conosco</p>
          </div>
        </div>
      </header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <img src={image} className="App-logo" alt="image" />
      <SearchBar />
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
          <EptaCs />
          <Eventos />
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
      <div className="container fourth">
        <div className="title">
          {/* teste do Accordion */}

          <h1 className="subtitle third">Dúvidas frequentes</h1>
          <div class="accordions">
            <div class="accordion-item">
              <input
                type="radio"
                name="accordion"
                checked="checked"
                id="accordion-1"
              />
              <label for="accordion-1">Como entro em contato com a EPTA?</label>
              <div class="accordion-content">Minha Empresa</div>
            </div>
            <div class="accordion-item">
              <input type="radio" name="accordion" id="accordion-2" />
              <label for="accordion-2">Como saber quais Treinamentos devo realizar?</label>
              <div class="accordion-content">
                Como saber quais Treinamentos devo realizar?
              </div>
            </div>
            <div class="accordion-item">
              <input type="radio" name="accordion" id="accordion-3" />
              <label for="accordion-3">Como conversar com o Sucesso do Cliente pelo chat?</label>
              <div class="accordion-content">
                Como conversar com o Sucesso do Cliente pelo chat?
              </div>
            </div>
            <div class="accordion-item">
              <input type="radio" name="accordion" id="accordion-3" />
              <label for="accordion-3">Como criar acesso ao DashBoard para outras pessoas da minha organização?</label>
              <div class="accordion-content">
                Como conversar com o Sucesso do Cliente pelo chat?
              </div>
            </div>
          </div>
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

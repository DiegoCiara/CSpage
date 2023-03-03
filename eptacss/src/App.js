import logo from './logo.png';
import image from './image.png';
import './App.css';
import { MiniCard } from './components/Minicard';
import { Card } from './components/Card';
import { labels, talkUs } from './labels';
import { EptaCs, Eventos } from './components/Extracard';
import { FaAccessibleIcon } from 'react-icons/fa';
import { SearchBar } from './components/SearchBar';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Accordion from 'react-bootstrap/Accordion';

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
        <h1 className="subtitle third">Dúvidas frequentes</h1>

        <div className="accordion">
          <div className="item">
            <input type="checkbox" id="check1" />
            <label className="titleacordion" for="check1">
              Como faço para utilizar o Naboo?
            </label>
            <ul>
              <p href="www">
                <div className="infoacordion">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni laborum harum atque nemo quas omnis molestiae ex sequi
                  velit. Maiores minima inventore aliquid officia quidem rerum
                  eos perspiciatis labore sint!
                </div>
              </p>
            </ul>
          </div>
          <div className="item">
            <input type="checkbox" id="check2" />
            <label className="contenttitleacordion" for="check2">
              <div className="titleacordion">
                Como saber qual treinamento devo agendar?
              </div>
              <FaAccessibleIcon />
            </label>
            <ul>
              <p href="www">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                laborum harum atque nemo quas omnis molestiae ex sequi velit.
                Maiores minima inventore aliquid officia quidem rerum eos
                perspiciatis labore sint!
              </p>
            </ul>
          </div>
          <div className="item">
            <input type="checkbox" id="check3" />
            <label className="titleacordion" for="check3">
              Menu
            </label>
            <ul>
              <p href="www">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                laborum harum atque nemo quas omnis molestiae ex sequi velit.
                Maiores minima inventore aliquid officia quidem rerum eos
                perspiciatis labore sint!
              </p>
            </ul>
          </div>
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

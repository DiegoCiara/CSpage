import logo from './logo.png';
import image from './image.png';
import './App.css';
import { MiniCard } from './components/Minicard';
import { Card } from './components/Card';
import { labels, talkUs } from './labels';
import { EptaCs, Eventos } from './components/Extracard';
import {
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="menu">
          <p className='link Naboo' href=""> O que é o Naboo?</p>
          <p  className='link Funciona' href=""> Como funciona?</p>
          <p className='link Aprenda' href=""> Aprenda mais</p>
          <p className='link Fale' href=""> Fale conosco</p>
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
            <label for="check1">
              <div className="titleacordion">
                Como saber qual treinamento devo agendar?
              </div>
              <FaAngleDown />
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
            <input className="contentacordion" type="checkbox" id="check2" />
            <label for="check2">
              <div className="titleacordion">
                Como saber qual treinamento devo agendar?
              </div>
              <FaAngleDown />
            </label>
            <ul>
              <p href="www">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                laborum harum atque nemo quas omnis molestiae ex sequi velit.
                Maiores minima inventore aliquid officia quidem rerum eos
                perspiciatis labore sint!Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Magni laborum harum atque nemo quas omnis
                molestiae ex sequi velit. Maiores minima inventore aliquid
                officia quidem rerum eos perspiciatis labore sint!Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Magni laborum
                harum atque nemo quas omnis molestiae ex sequi velit. Maiores
                minima inventore aliquid officia quidem rerum eos perspiciatis
                labore sint!
              </p>
            </ul>
          </div>
          <div className="item">
            <input type="checkbox" id="check3" />
            <label for="check3">
              <div className="titleacordion">
                Como saber qual treinamento devo agendar?
              </div>
              <FaAngleDown />
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
      <footer className="footer">
        <div className="copy">
          © EPTA Tecnologia 2021 - Todos os Direitos Reservados
        </div>
        <div className="socialLinks">
          <a href="https://www.facebook.com/eptatecnologia?mibextid=LQQJ4d">
            {' '}
            <FaFacebook className="icone1 insta" />
          </a>
          <a href="https://instagram.com/eptatecnologia?igshid=MDM4ZDc5MmU=">
            {' '}
            <FaInstagram className="icone1 insta" />
          </a>
          <a href="https://www.linkedin.com/company/epta-tecnologia/">
            {' '}
            <FaLinkedin className="icone1 insta" />
          </a>
        </div>
      </footer>
      {/* <Routes /> */}
    </div>
  );
}

export default App;

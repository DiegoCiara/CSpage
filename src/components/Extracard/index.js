import { FaRegCalendarAlt, FaRocket } from 'react-icons/fa'
import { events } from '../../labels';
import { Infocard } from '../Infocard';
import './index.css';

export const EptaCs = ({ title, descricao, link }) => {
  return (
    <div className="card epta">
      <FaRocket className='icone1 epta'></FaRocket>
      
      <div className="content epta">
        <h2 className="cardTitle epta">EPTA CS</h2>
        <p className="cardSubtitle epta">
          Área dedicada a nossos clientes, aqui você tocará sua jornda com
          autonomia e liberdade, implante a gestão da sua associação de forma
          prática e rápida
        </p>
        <button className="accessButton epta" onClick={() => console.log(link)}>
          Começe já
        </button>
      </div>
    </div>
  );
};

export const Eventos = ({ dia, mes, title, descricao }) => {
  return (
    <div>
      <div className="card eventos">
        <FaRegCalendarAlt className='icone1 eventos'></FaRegCalendarAlt>
        <div className="content eventos">
        <p className="cardSubtitle eventos">
            Próximos eventos
          </p>

          <h2 className="cardTitle eventos">FEVEREIRO, 2023</h2>
          {events.map((cardObj) => (
            <Infocard
              dia={cardObj.dia}
              mes={cardObj.mes}
              title={cardObj.titulo}
              descricao={cardObj.descricao}
            />
          ))}

          <button className="accessButton eventos" 
          // onClick={() => console.log(link)}
          >
            Veja todos os eventos
          </button>
        </div>
      </div>
    </div>
  );
};

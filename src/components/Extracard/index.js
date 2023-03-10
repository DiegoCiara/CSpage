import { FaRegCalendarAlt, FaRocket } from 'react-icons/fa'
import { events } from '../../labels';
import { Infocard } from '../Infocard';
import './index.css';

export const EptaCs = ({ title, descricao, link }) => {
  return (
    <div className="card extra">
      <FaRocket className='icone1 extra'></FaRocket>
      
      <div className="content extra">
        <h2 className="cardTitle extra">EPTA CS</h2>
        <p className="cardSubtitle extra">
          Área dedicada a nossos clientes, aqui você tocará sua jornda com
          autonomia e liberdade, implante a gestão da sua associação de forma
          prática e rápida
        </p>
        <button className="accessButton extra" onClick={() => console.log(link)}>
          Começe já
        </button>
      </div>
    </div>
  );
};

export const Eventos = ({ dia, mes, title, descricao }) => {
  return (
    <div>
      <div className="card extra">
        <FaRegCalendarAlt className='icone1 extra'></FaRegCalendarAlt>
        <div className="content extra">
        <p className="cardSubtitle extra">
            Próximos eventos
          </p>

          <h2 className="cardTitle extra">FEVEREIRO, 2023</h2>
          {events.map((cardObj) => (
            <Infocard
              dia={cardObj.dia}
              mes={cardObj.mes}
              title={cardObj.titulo}
              descricao={cardObj.descricao}
            />
          ))}

          <button className="accessButton extra" 
          // onClick={() => console.log(link)}
          >
            Veja todos os eventos
          </button>
        </div>
      </div>
    </div>
  );
};

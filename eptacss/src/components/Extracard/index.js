import { FaRegCalendarAlt, FaRocket } from 'react-icons/fa'
import './index.css';

export const EptaCs = ({ title, descricao, link }) => {
  return (
    <div className="card epta">
      <FaRocket></FaRocket>
      <div className="content epta">
        <h2 className="cardTitle epta">EPTA CS</h2>
        <p className="cardSubtitle epta">
          Área dedicada a nossos clientes, aqui você tocará sua jornda com
          autonomia e liberdade, implante a gestão da sua associação de forma
          prática e rápida
        </p>
        <button className="accessButton epta" onClick={() => console.log(link)}>
          Saber mais
        </button>
      </div>
    </div>
  );
};

export const Eventos = ({ title, descricao, link }) => {
  return (
    <div>
      <div className="card eventos">
        <FaRegCalendarAlt/>
        <div className="content eventos">
          <h2 className="cardTitle eventos">Próximos Eventos</h2>
          <p className="cardSubtitle eventos">
            Área dedicada a nossos clientes, aqui você tocará sua jornda com
            autonomia e liberdade, implante a gestão da sua associação de forma
            prática e rápida
          </p>
          <button className="accessButton epta" onClick={() => console.log(link)}>
            Saber mais
          </button>
        </div>
      </div>
    </div>
  );
};

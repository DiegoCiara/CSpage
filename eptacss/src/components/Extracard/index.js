import { FaRegHandPointer } from 'react-icons/fa';
import './index.css';

export const EptaCs = ({ title, descricao, link }) => {
  return (
    <div className="card epta">
      <div className="content">
        <h2 className="cardTitle">Epta CS</h2>
        <p className="cardSubtitle">
          Área dedicada a nossos clientes, aqui você tocará sua jornda com
          autonomia e liberdade, implante a gestão da sua associação de forma
          prática e rápida
        </p>
        <button className="accessButton" onClick={() => console.log(link)}>
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
        <div className="content">
          <h2 className="cardTitle">Próximos Eventos</h2>
          <p className="cardSubtitle">
            Área dedicada a nossos clientes, aqui você tocará sua jornda com
            autonomia e liberdade, implante a gestão da sua associação de forma
            prática e rápida
          </p>
          <button className="accessButton" onClick={() => console.log(link)}>
            Saber mais
          </button>
        </div>
      </div>
    </div>
  );
};

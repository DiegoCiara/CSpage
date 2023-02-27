import './index.css';

export const Card = ({ title, descricao, link }) => {
  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      <p className="cardSubtitle">{descricao}</p>
      <button className="accessButton" onClick={() => console.log(link)}>
        ACESSAR
      </button>
    </div>
  );
};

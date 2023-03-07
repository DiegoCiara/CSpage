import './index.css';

export const Infocard = ({ title, dia, mes , descricao }) => {
  return (
    <div className="card info">
      <div className="data info">
        <div className='day'>{dia}</div>
        {mes}
      </div>
      <div className="content info">
        <h2 className="cardTitle info">{title}</h2>
        <h2 className="cardSubtitle info">{descricao}</h2>
      </div>
    </div>
  );
};

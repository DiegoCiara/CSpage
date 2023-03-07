import { FaInfoCircle, FaRegHandPointer } from 'react-icons/fa';
import './index.css';

export const MiniCard = ({ title, descricao, link }) => {
  return (
    <div className="card mini">
      <div className="content mini">
      <FaInfoCircle className="iconsCard mini"></FaInfoCircle>
        <h2 className="cardTitle mini">{title}</h2>
        <button className="accessButton mini" onClick={() => console.log(link)}>
          Saber mais
        </button>
      </div>
    </div>
  );
};

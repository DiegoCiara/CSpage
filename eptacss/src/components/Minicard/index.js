import {  FaRegHandPointer } from 'react-icons/fa';
import './index.css';

export const MiniCard = ({ title, descricao, link }) => {
  return (
    
    <div className="card">
      <div className='content'>
        <h2 className="cardTitle">{title}</h2>
        <button className="accessButton" onClick={() => console.log(link)}>
          Saber mais
        </button>
        </div>
    </div>
  );
};

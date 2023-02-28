import {  FaRegHandPointer } from 'react-icons/fa';
import './index.css';

export const Card = ({ title, descricao, link }) => {
  return (
    
    <div className="card">
      <div className='iconsCard'> <FaRegHandPointer className='icone1'></FaRegHandPointer> </div>
      <div className='content'>
        <h2 className="cardTitle">{title}</h2>
        <p className="cardSubtitle">{descricao}</p>
        <button className="accessButton" onClick={() => console.log(link)}>
          Saber mais
        </button>
        </div>
    </div>
  );
};

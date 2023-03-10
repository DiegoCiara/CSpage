import {  FaRegHandPointer } from 'react-icons/fa';
import './index.css';


export const Card = ({ title, descricao, link }) => {
  return (
    
    <div className="card main">
      <div className='iconsCard main'> <FaRegHandPointer className='icone1'></FaRegHandPointer> </div>
      <div className='content main'>
        <h2 className="cardTitle main">{title}</h2>
        <p className="cardSubtitle main">{descricao}</p>
        <button className="accessButton main" onClick={() => console.log(link)}>
          Saber mais
        </button>
        </div>
    </div>
  );
};

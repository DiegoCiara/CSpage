import './index.css';

export  function  SearchBar() {
  return (
    <div className="content search">
      <input className='bar'
      label='text'
      placeholder='Busque aqui o tópico do seu interesse'
      ></input>
      <button className='searchButton'>Pesquisar</button>
    </div>
  );
};

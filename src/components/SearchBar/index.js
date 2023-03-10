import './index.css';
import { useState } from 'react';
// import { TextField, LIstItemT } from '@material-ui/core';

// const [data, setData] = useState;
// const [searchTerm, setSearchTerm] = useState;
// const [searchResults, setSearchResults] = useState;
// const [listVisible, setListVisible] = useState

// const Pages = ['Fale conosco', 'Materiais', 'Falar com um atendente', 'Saiba mais']
// const handleSearchChange = (event) => {
//   setSearchTerm(event.target.value);
//   if (event.target.value) {
//     const results = Pages.filter(
//       (Page) =>
//         Page.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
//         Page.cpf.includes(event.target.value)
//     );
//     setSearchResults(results);
//   } else {
//     setSearchResults([]);
//     setListVisible(true);
//   }
// };

// const handleSelect = (id) => {
//   setData({ ...data, contact: id });
//   setSearchTerm('');
//   setSearchResults([]);
//   setListVisible(false);
// };



export  function  SearchBar() {
  return (
    <div className="content search">
      <input className='bar'
      label='text'
      placeholder='Busque aqui o tópico do seu interesse'
      ></input>
      <button className='searchButton'>Pesquisar</button>
      {/* <input
        label="Pesquisar cliente"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidthAAAAA
        margin="normal"
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((Page) => (
            <li key={Page.id} onClick={() => handleSelect(Page.id)}>
            </li>
          ))}
        </ul>
      )} */}

    </div>
  );
};

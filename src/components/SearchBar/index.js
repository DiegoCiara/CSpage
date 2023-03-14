import './index.css';
import { useState } from 'react';
import { Pages } from '../../labels';
import { FaSearch } from 'react-icons/fa';
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

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async () => {
    try {
      const response = await fetch(`./labels?q=${Pages}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      const results = Pages.filter(
        (pages) =>
          pages.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          pages.link.includes(event.target.value)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="content search">
      <div className='cont search'>
      <input className='inp search' placeholder='Busque aqui o tópico do seu interesse'/>
      <FaSearch className='ico search'/>
      </div>
    </div>
  );
}

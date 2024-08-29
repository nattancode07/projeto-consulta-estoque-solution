import "./Header.css";
import PropTypes from 'prop-types';
import {useEffect, useState } from 'react';
import axios from 'axios';

function Header({setQuery, setFilters}) {

  const [searchVisible, setSearchVisible] = useState(false);
  const [ setProducts] = useState({ name: '', supplier: '', code: '' });

  Header.propTypes = {
    setFilters: PropTypes.func.isRequired,
    setQuery: PropTypes.func.isRequired,
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  }

     // Função para buscar produtos com filtros
     // eslint-disable-next-line react-hooks/exhaustive-deps
     const fetchProducts = async () => {
      try {
          const response = await axios.get('http://localhost:3001/api/products');
          setProducts(response.data);
      } catch (error) {
          console.error('Erro ao buscar produtos:', error);
      }
    };

  // Efeito para buscar produtos quando o componente for montado ou filtros forem alterados
  useEffect(() => {
      fetchProducts();
  }, [fetchProducts]);

  return (
    <header className="header-main">

      <div className="titulo-e-pequisa-div">
        
          <h2 className={searchVisible ? 'hidden' : ''}>
            Tabela de Produtos
          </h2>
        
          <div className={`search--input-div ${searchVisible ? 'visible' : 'hidden'}`}>
            <input type="text" onChange={handleQueryChange} className="input-text-pesquisa" name="campo de pesquisa" id="input-text-pesquisa" placeholder="Digite o nome do produto"/>  
          </div>

        <div className="search-div">
          <svg onClick={toggleSearchVisibility} className="icone-de-pesquisa" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
        </div>

      </div>
      <div className="filtros" >

        <div className="fornecedor-filtro-div">
          <label className="label-filtros" htmlFor="">Fornecedor:</label>
          <input onChange={handleQueryChange} className="input-text-filtro" type="text" id="input-text-pesquisa"/>
        </div>

        <div className="fabricante-filtro-div">
          <label className="label-filtros" htmlFor="">Fabricante:</label>
          <input type="text" name="" id="" className="input-text-filtro" onChange={handleFilterChange}/>
        </div>

        <div className="referencia-filtro-div">
          <label className="label-filtros" htmlFor="">Referência:</label>
          <input type="text" name="" id="" className="input-text-filtro" onChange={handleFilterChange}/>
        </div>
        
        <div className="grupo-filtro-div">
          <label className="label-filtros" htmlFor="">Grupo:</label>
          <input type="text" name="" id="" className="input-text-filtro" onChange={handleFilterChange}/>
        </div>

        <div className="codigo-filtro-div">
          <label className="label-filtros" htmlFor="">Código:</label>
          <input type="text" name="" id="" className="input-text-filtro" onChange={handleFilterChange}/>
        </div>
        
      </div>
    </header>
  )
}

export default Header
import "./Header.css"
import React from 'react';


function Header({setQuery, setFilters}) {

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <header className="header-main">

      <div className="titulo-e-pequisa-div">
        
          <h2>
            Tabela de Produtos
          </h2>
        
        <div className="div-search-and-input">
          <div className= "search-div">
            <input type="text" onChange={handleQueryChange} className="input-text-pesquisa" name="campo de pesquisa" id="input-text-pesquisa" placeholder="Digite o nome do produto"/>  
          </div>
          <svg className="icone-de-pesquisa" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
        </div>

      </div>
      <div className="filtros">

        <div className="fornecedor-filtro-div">
          <label className="label-filtros" htmlFor="">Fornecedor:</label>
          <input type="text" />
        </div>

        <div className="fabricante-filtro-div">
          <label className="label-filtros" htmlFor="">Fabricante:</label>
          <input type="text" name="" id="" />
        </div>

        <div className="referencia-filtro-div">
          <label className="label-filtros" htmlFor="">Referência:</label>
          <input type="text" name="" id="" />
        </div>
          <br />
        <div className="grupo-filtro-div">
          <label className="label-filtros" htmlFor="">Grupo:</label>
          <input type="text" name="" id="" />
        </div>

        <div className="codigo-filtro-div">
          <label className="label-filtros" htmlFor="">Código:</label>
          <input type="text" name="" id="" />
        </div>
        
      </div>
    </header>
  )
}

export default Header
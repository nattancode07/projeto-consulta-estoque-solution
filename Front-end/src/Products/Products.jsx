import "./Products.css"
import { Link } from "react-router-dom"



function Products() {
  return (

    
    <main className= "produto">
      <header className="header-products">
      <Link to="/">
        <button className="button-voltar">
          <img className="img-seta" src="/icons8-duplo-para-a-esquerda-24.png" alt="" />
        </button>
      </Link>
      </header>
    <h1>Nome do Produto </h1>

    <section className="detalhes-produto-section">
      <p>Código do produto: 000000000</p>
      <p>Referência: 12345</p> 
      <p>Grupo: XXXXXXX</p>
      <p>Fornecedor: MMMMMMMM</p>
      <p>Fabricante: Fulano cicrano</p>
      <p>Estoque: 42874</p>
    </section>

  </main>
  
  )
}

export default Products
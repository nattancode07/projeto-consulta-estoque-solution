import "./Products.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function Products() {
  const { id } = useParams(); // Captura o ID do produto a partir da URL
  const [product, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os detalhes do produto
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduto(response.data); // Salva os dados do produto no estado
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError('Erro ao carregar os dados do produto');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  // Se `produto` ainda for null, não tenta renderizar nada
  if (!product) return <div>Nenhum produto encontrado</div>;
  
  return (
    
    <main className= "produto">
      <header className="header-products">
      <Link to="/">
        <button className="button-voltar">
          <img className="img-seta" src="/icons8-duplo-para-a-esquerda-24.png" alt="" />
        </button>
      </Link>
      </header>
    <h1>{product["Mercadoria"]} </h1>

    <section className="detalhes-produto-section">
      <p>Código do produto: {product["Código da Mercadoria"]}</p>
      <p>Referência: 12345</p> 
      <p>Grupo: {product.Grupo}</p>
      <p>Fornecedor: {product["Fornecedor"]}</p>
      <p>Fabricante: {product["Fabricante"]}</p>
      <p>Estoque: {product["Unidades em Estoque"]}</p>
    </section>

  </main>
  
  )
}

export default Products
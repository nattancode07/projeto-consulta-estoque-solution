import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import {Link} from 'react-router-dom'

const socket = io('http://localhost:3001');

function Home() {
    const [products, setProducts] = useState([]);
    

    

    // Efeito para buscar produtos quando o componente for montado ou filtros forem alterados

    // Efeito para receber atualizações em tempo real
    useEffect(() => {
        socket.on('updateProducts', (updatedProducts) => {
            setProducts(updatedProducts);
        });

        return () => {
            socket.off('updateProducts');
        };
    }, []);

  return (

    <main className = "grade-de-produtos">

      <div  className="">

      {products.map((products, index) => (

        
            <div className="produto-div" key={index}>
              <div className="desc-nome-div">
                <p className="nome-produto">{products.Mercadoria}</p>
                <p className="descricao-do-produto">
                {products.Fabricante} <br /> {products.Fornecedor}; <br /> NomeFornecedor <br /> {products["Unidade de Estoque"]}
                </p>
              </div>
              <div className= "div-seta-veja-mais">
                <Link to="/Products">
                    <button className="button-veja-mais">
                      <img src="/icons8-duplo-para-a-direita-24.png" alt="" />
                    </button>
                </Link>
              </div>
            </div>
          ))}

          

      </div>

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 16</p>
          <p className="descricao-do-produto">
            NomeFabricante <br /> NumReferência <br /> NomeFornecedor <br /> Estoque : NumQuantidade
          </p>
        </div>
        <div className= "div-seta-veja-mais">
          <Link to="/Products">
              <button className="button-veja-mais">
                <img src="/icons8-duplo-para-a-direita-24.png" alt="" />
              </button>
          </Link>
        </div>
      </div>
      
      </main>
  )

}

export default Home
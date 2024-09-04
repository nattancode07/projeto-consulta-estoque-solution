import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import {Link} from 'react-router-dom'

const socket = io('http://localhost:3001');

function Home() {
    const [products, setProducts] = useState([]);

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

      {products.map((products) => (

            <div className="produto-div" key={products.id}>
              <div className="desc-nome-div">
                <p className="nome-produto">{products.Mercadoria}</p>
                <p className="descricao-do-produto">
                Fabricante: {products.Fabricante} <br /> 
                Fornecedor: {products.Fornecedor}; <br /> 
                Estoque: {products["Unidades em Estoque"]} <br/>
                id: {products.id}
                </p>
              </div>
              <div className= "div-seta-veja-mais">
                <Link to={`/products/${products.id}`}>
                    <button className="button-veja-mais">
                      <img src="/icons8-duplo-para-a-direita-24.png" alt="" />
                    </button>
                </Link>
              </div>
            </div>
          ))}

      </main>
  )

}

export default Home
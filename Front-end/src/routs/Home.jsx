import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function Home () {

  const socket = io('http://localhost:3000');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    socket.on('update', (data) => {
        setProdutos(data);
    });

    return () => {
        socket.off('update');
    };
}, );

  return (

    <main className = "grade-de-produtos">

        <div>
            {produtos.map(produto => (
                <div key={produto.id}>{produto.nome}</div>
            ))}
        </div>

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 1</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 2</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 3</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 4</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 5</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 6</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 7</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 8</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 9</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 10</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 11</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 12</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 13</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 14</p>
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

      <div className="produto-div">
        <div className="desc-nome-div">
          <p className="nome-produto">Produto 15</p>
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
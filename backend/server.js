// server.js

const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const sql = require('mssql');
var Promise = require('promise');

// Configurações de conexão com o SQL Server
const config = {
    user: 'sa_softcom',
    password: 'qaz@123',
    server: 'TSCRU_CALIFOR',
    database: 'BaseConstrucao91200',
    port: 5433, // Porta descoberta
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

app.use(cors());
app.use(express.json());

// Conectando ao banco de dados
sql.connect(config).then(() => {
    console.log('Conectado ao SQL Server');
}).catch(err => {
    console.error('Erro ao conectar ao SQL Server:', err);
});

app.get('/api/products', async (req, res) => {
  try {
      const pool = await sql.connect(config);
      const result = await pool.request().query('select * from Cadastro_de_mercadorias');
      res.json(result.recordset);
  } catch (err) {
      res.status(500).send('Erro ao consultar produtos');
  }})

// API para obter produtos
app.get('/api/products/:id', async (req, res) => { //:id
    const { id } = req.params;
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query('SELECT * FROM Cadastro_de_mercadorias where id = @id',{id}); //WHERE id = @id
  
      if (result.recordset.length > 0) {
        res.json(result.recordset[0]);
      } else {
        res.status(404).send('Produto não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar produto com ID:', id, error);
      res.status(500).send('Erro ao buscar produto');
    }
  });
  

// Monitorar alterações na tabela
function monitorDatabase() {
    setInterval(async () => {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request().query('select * from Cadastro_de_mercadorias');
            io.emit('updateProducts', result.recordset);
        } catch (err) {
            console.error('Erro ao monitorar o banco de dados:', err);
        }
    }, 3000); // Intervalo para checar alterações
}

monitorDatabase();

server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

/*app.get('/products', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await db.query("SELECT * FROM Cadastro_de_mercadorias ");// WHERE id =${id}
      if (product.length > 0) {
        res.json(product[0]);
      } else {
        res.status(404).send('Produto não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar produto com ID:', id, error);
      res.status(500).send('Erro ao buscar produto');
    }
  });*/
/*
  const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');

// Middleware para permitir CORS
const cors = require('cors');
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Usar as rotas
app.use('/api', productsRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});*/

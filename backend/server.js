// server.js

const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const sql = require('mssql');

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

// API para obter produtos
app.get('/api/products', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('select * from Cadastro_de_mercadorias');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('Erro ao consultar produtos');
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
    }, 5000); // Intervalo para checar alterações
}

monitorDatabase();

server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

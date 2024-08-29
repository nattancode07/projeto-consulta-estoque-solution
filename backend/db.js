const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const sql = require('mssql');

// Configurações de conexão com o SQL Server
const config = {
    user: 'sa_softcom',
    password: 'qaz@123',
    server: 'TSCRU_CALIFOR\\SQLEXPRESS',
    database: 'BaseConstrucao91200',
    port: 5433, // Porta que você descobriu que o SQL Server está usando
    options: {
        encrypt: true, // Usado se o servidor SQL suportar SSL
        trustServerCertificate: true, // Usado para desenvolvimento local
    },
};

const app = express();
const server = http.createServer(app);

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
}));

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('Um usuário se conectou');

    // Exemplo de consulta a uma tabela no SQL Server quando um novo cliente se conecta
    sql.connect(config).then(pool => {
        // Substitua 'nome_da_tabela' pelo nome real da tabela que você quer consultar
        return pool.request()
            .query("select * from Cadastro_de_mercadorias");
    }).then(result => {
        // Envia os dados da tabela para o cliente conectado
        socket.emit('dados_tabela', result.recordset);
    }).catch(err => {
        console.error('Erro ao consultar a tabela:', err);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou');
    });
});

server.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

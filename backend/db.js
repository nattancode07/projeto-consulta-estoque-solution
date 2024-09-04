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
    port: 5433, 
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    },
};

/*const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado ao SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Falha na conexão com o SQL Server', err);
        throw err;
    });

module.exports = {
    sql, 
    poolPromise
};
*/
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

    sql.connect(config).then(pool => {
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

server.listen(3023, () => {
    console.log('Servidor rodando na porta 3023');
});

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado ao SQL Server');
        return pool;
    })
    .catch(err => console.log('Falha ao conectar ao SQL Server', err));

module.exports = {
    sql, poolPromise
};
// /server/server.js

const express = require('express');
const { sql, connectToDb } = require('./db');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 3000;

// Conectar ao banco de dados
connectToDb();

// Criar servidor HTTP e conectar ao Socket.IO
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Novo cliente conectado');

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Rota para buscar os produtos
app.get('/api/produtos', async (req, res) => {
    try {
        const result = await sql.query('SELECT TOP 10 * FROM dbo.Bairros'); 
        res.json(result.recordset);
    } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).send('Erro ao buscar produtos');
    }
});

// Monitorar o banco de dados para atualizações
async function watchDatabase() {
    const query = 'SELECT * FROM dbo.Bairros'; // Substitua pela sua lógica de monitoramento
    setInterval(async () => {
        try {
            const result = await sql.query(query);
            io.emit('update', result.recordset);
        } catch (err) {
            console.error('Erro ao monitorar o banco de dados:', err);
        }
    }, 5000); // Verifica o banco a cada 5 segundos
}

watchDatabase();

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

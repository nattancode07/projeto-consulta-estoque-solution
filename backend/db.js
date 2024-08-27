const sql = require('mssql');

// Configurações da conexão
const config = {
    user: 'sa_softcom', // substitua pelo seu usuário do SQL Server
    password: 'qaz@123', // substitua pela sua senha do SQL Server
    server: 'TSCRU_CALIFOR', // substitua pelo servidor do SQL Server
    database: 'BaseConstrucao91200', // substitua pelo nome do seu banco de dados
    options: {
        encrypt: true, // Use esta opção se estiver usando o Azure
        trustServerCertificate: true // Use esta opção se o SQL Server estiver em um servidor local
    },
    port: 5433,
};

// Conexão com o banco de dados
async function connectToDb() {
    try {
        await sql.connect(config);
        console.log('Conectado ao SQL Server');
    } catch (err) {
        console.error('Erro ao conectar ao SQL Server:', err);
    }
}

module.exports = { sql, connectToDb };

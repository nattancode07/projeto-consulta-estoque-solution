const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { poolPromise } = require('../db');

// Rota para obter todos os produtos
router.get('/products', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM [dbo].[Cadastro_de_mercadorias]');
        res.json(result.recordset);
    } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
});

// Rota para obter um produto por ID
router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM [dbo].[Cadastro_de_mercadorias] WHERE ID = @id');
        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (err) {
        console.error(`Erro ao buscar produto com ID: ${req.params.id}`, err);
        res.status(500).json({ message: `Erro ao buscar produto com ID: ${req.params.id}` });
    }
});

module.exports = router;

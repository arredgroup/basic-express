const express = require('express');
const pokeService = require('../services/PokeService');

const router = express.Router();

router.get('/all', async (req, res) => {
    const pokemons = await pokeService.getAllPokemons();
    res.json({
        code: 200,
        body: pokemons
    });
})

module.exports = router;
const express = require('express');
const { DB } = require('../db/DB');
const router = express.Router();

router.get('/all', (req, res) => {
    const db = DB.getInstance();
    return [];
})

module.exports = router;
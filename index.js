const express = require('express');
const { validateNumberParams } = require('./middlewares/index');
const app = express();

app.use(express.json());

app.get('/productos/:id', validateNumberParams, (req, res) => {
    console.log("Paso el middleware y estoy en la ruta");
    const id = req.params.id;
    //petición a la DB para traer la data del ID
    res.send({
        code: "200",
        message: "ID Encontradoa",
        body: {
            id: id,
            nombre: "brocha",
        }
    });
});


app.post('/', (req, res) => {
    console.log("ESTOY EN POST");
    res.send({
        code: 200,
        message: "POST OK",
        body: req.body
    });
});

app.listen(8000);
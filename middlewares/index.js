const validateNumberParams = (req, res, next) => {
    console.log("dentro de validateNumberParams");
    const id = req.params.id;
    if(!id){
        res.send({
            code: 401,
            message: "ID must be required"
        });
        return;
    }
    if(!Number.isInteger(+id)){
        res.send({
            code: 401,
            message: "ID must be integer"
        });
        return;
    }
    console.log("finalizado middleware");
    next();
}

module.exports = {
    validateNumberParams
}
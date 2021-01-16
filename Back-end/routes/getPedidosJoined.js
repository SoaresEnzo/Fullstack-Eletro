module.exports = (app) => {

    app.get('/getpedidosjoined', (req, res) => {

        var connection = app.config.database();

        var query = app.models.conteudoModels;

        query.getPedidosJoined(connection,(error,results,fields)=>{
            res.json(results)
        })


    })
}
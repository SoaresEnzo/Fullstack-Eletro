module.exports = (app) => {

    app.post('/insertcomment', (req, res) => {
        
        var connection = app.config.database();

        var query = app.models.conteudoModels;

        query.registerComentarios(req.body, connection, (error, results, fields) => {
            res.json(results)
        })
    })
}
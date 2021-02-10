module.exports = (app) => {

    app.get('/getprodutos', (req, res) => {

        var connection = app.config.database();

        var query = app.models.conteudoModels;

            query.getProdutos(connection, (error, results, fields) => {
                res.json(results)
            })



    })
}
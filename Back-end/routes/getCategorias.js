module.exports = (app) => {

    app.get('/getcategorias', (req, res) => {

        var connection = app.config.database();

        var query = app.models.conteudoModels;

        query.getCategorias(connection,(error,results,fields)=>{
            res.json(results)
        })


    })
}
module.exports = (app) => {

    app.get('/getcomentarios', (req, res) => {

        var connection = app.config.database();

        var query = app.models.conteudoModels;

        query.getComentarios(connection,(error,results,fields)=>{
            res.json(results)
        })


    })
}
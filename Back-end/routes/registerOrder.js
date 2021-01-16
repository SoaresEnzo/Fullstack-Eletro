module.exports = (app) => {

    app.post('/registerorder', (req, res) => {

        var connection = app.config.database();

        var query = app.models.conteudoModels;

        query.registerOrder(req.body,connection,(error,results,fields)=>{
            console.log(error)
            res.json(results)
        })
    })
}
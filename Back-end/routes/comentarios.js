const { model } = require('mongoose');
const ComentarioSchema = require('../models/Comentarios')
const Comentarios = model("comentarios", ComentarioSchema)

module.exports = (app) => {
    app.get('/comentarios', async (req, res) => {
        const resultado = await Comentarios.find();
        res.json(resultado)
    })

    app.post('/comentarios', async (req, res) => {
        const { nome, comentario } = req.body;

        if (nome.length===0) {
            res.json({ erro: "Você deve digitar seu nome" })
        } else if (comentario.length===0) {
            res.json({ erro: "Você deve digitar um comentario" })
        } else {
            const resultado = await Comentarios.create({ nome, comentario })
            res.json(resultado)
        }
    })
}
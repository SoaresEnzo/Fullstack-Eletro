const { Schema } = require('mongoose');
const ComentarioSchema = new Schema({
    nome: {
        type: String
    },
    comentario: {
        type: String
    },
    data_registro: {
        type: Date,
        default: Date.now()
    }
})

module.exports = ComentarioSchema;
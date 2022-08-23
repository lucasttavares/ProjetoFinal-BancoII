const { Schema, model } = require('mongoose');

const mongoSchema = new Schema({

    titulo: {
        type: String,
        required: true},

    descricao: {type: String},

    data: {type: String},

    tipo: {type: String}
});

module.exports = model('Note', mongoSchema);
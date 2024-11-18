const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    patente: {
        type: String,
        required: true,
        unique: true,
    },
    marca: {
        type: String,
        required: true,
    },
    cilindrada: {
        type: String,
        required: true,
    },
    multa: {
        type: Number,
        required: true,
        min: 0,
    },
});

const Moto = mongoose.model('Moto', userSchema);

module.exports = Moto;

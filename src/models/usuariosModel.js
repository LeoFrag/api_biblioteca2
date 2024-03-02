const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    edad: Number
}, {collection: 'usuarios'});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
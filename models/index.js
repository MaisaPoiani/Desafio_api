const mongoose = require('mongoose');
var  Schema = mongoose.Schema;

const index = new Schema({
    sexo: {
        type: String,
        require: true
    }, 
    idade: {
        type: String,
        require: true
    },
    localização: {
        type: String, //string por ser em longitude e latitude, pode conter números e pontos
        require: true 
    },
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    contatos: {
        type: Array,
        require: false
    },
    fone: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    redes: {
        type: String,
        require: false
    }
},
{
    timestamps: true,
}
);

mongoose.model('Index', index);
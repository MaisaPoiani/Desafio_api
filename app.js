const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/index');
const Index = mongoose.model('Index');

const app = express()

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    app.use(cors());
    next();
})

mongoose.connect('mongodb://localhost/desafiomaisa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso")
}).catch((erro) => {
    console.log("Erro na conexão." + erro)
});

app.get("/index", (req, res) =>{
    Index.findOne({}).then((home) => {
        return res.json(index);
    }).catch((err) => {
        return res.json({
            error: true,
            mensage: "Nenhum registro encontrado"
        });
    })   
});

app.post("/index", (req, res) =>{
    Index.create(req,body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            mensage: "Erro no cadastramento do conteúdo da página"
        })
    })

    return res.json({
        error: false,
        mensage: "Conteúdo da página cadastrado com sucesso"
    });
});

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080")
});
const express = require('express');
const app = express();

//permitir receber dadosem JSON
app.use(express.json());

//simula um "banco de dados" em memória
let produtos =[
    {id: 1, nome:"mouse"},
    {id: 2, nome:"teclado"}
];

//GET - lista todos os produtos
app.get('/api/produtos',(req,res)=>{

});
//post 
app.post('/api/produtos',(req,res)=>{
    const novoProduto ={
        id:produtos.length +1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})
//put
//delete

//rota principal
app.get('/', (req, res) =>{
    res.send('olá, este é o servidor com express');
})

//rota "sobre"
app.get('/sobre',(req,res)=>{
    res.send('página sobre');
});

//rota "produtos"
app.get('/produtos', (rq,res)=>{
    res.send('lista de produtos');

});
//rota que retorna JSON (simula uma API)
app.get('/api/produtos', (req,res)=>{
    const produtos = [
        {id: 1,nome:'mouse'},
        {id: 2,nome:'teclado'}

    ];
    res.json(produtos);
})

//inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log('servidor rodando http://localhost:3000');
});
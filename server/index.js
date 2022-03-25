const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pokemonRouters = require('./route/pokemon')
const app = express()

mongoose.connect('mongodb+srv://leticiapcb:pokedex@cluster0.qnksi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(pokemonRouters)

app.listen(3000, () => {
    console.log('Server is running')
});
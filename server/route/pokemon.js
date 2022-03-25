const {Router} = require('express');
const { reset } = require('nodemon');

const Pokemon = require('../models/pokemon')

const route = Router();

route.post('/pokemon', async (req, res) => {
    const {
        name,
        hp,
        attack,
        power
    } = req.body;

    try {
        const createPokemon = await Pokemon.create ({
            name,
            hp,
            attack,
            power
        })

        return res.status(200).send(createPokemon)
    } catch(error) {
        return reset.status(400).send(error)
    }
})

route.get('/pokemons', async (req, res) => {
    try {
        const allPokemons = await Pokemon.find();
        return res.status(200).send(allPokemons);
    } catch (error) {
        return res.status(400).send(error)
    }
});

route.post('/update/:pokemon_id', async (req, res) => {
    try {
        const{
            name,
            hp,
            attack,
            power
        } = req.body;

        const{pokemon_id} = req.params;
        const pokemonNewData = {
            name,
            hp,
            attack,
            power
        }

        const pokemonUpdate = await Pokemon.updateOne({_id: pokemon_id}, pokemonNewData);

        return res.status(200).send(pokemonUpdate)
    } catch (error) {
        return res.status(400).send(error)
    }
});

route.delete('/delete/:pokemon_id', async (req, res) => {
    try {
        const {pokemon_id} = req.params;
        const deletePokemon = await Pokemon.findByIdAndDelete(pokemon_id);
        return res.status(200).send(deletePokemon)
        
    } catch (erros) {
        return res.status(400).send(error)
    }
})
module.exports = route;
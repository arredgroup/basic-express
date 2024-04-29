const axios = require('axios');
const getAllPokemons = async () => {
    let next = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemons = [];
    do {
        const response = await axios.get(next);
        next = response.data.next;
        pokemons.push(...response.data.results);
    }while(next!=null);
    //TODO get all data for every pokemon
    return await Promise.all(pokemons.map(async (pokemon) => {
        const extraData = await getAbilitiesAndTypes(pokemon.url);
        return {
            name: pokemon.name,
            ...extraData,
        };
    }));
};

const getAbilitiesAndTypes = async (url) => {
    const response = await axios.get(url);
    const abilities = response.data.abilities.map(ab => ab.ability.name);
    const types = response.data.types.map(t => t.type.name);
    return {
        abilities,
        types,
    };
}

module.exports = {
    getAllPokemons,
}
const pokemons = [];

module.exports = {
  addPokem: (data) => {
    pokemons.push(data);
  },
  retrivePokemons: () => {
    return pokemons;
  }
};
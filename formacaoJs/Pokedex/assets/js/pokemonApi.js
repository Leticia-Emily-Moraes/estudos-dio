const PokeApi = {
}


function ConvertToModel(PokeDetails) {
    const pokemon = new Pokemon()
    pokemon.number = PokeDetails.id
    pokemon.name = PokeDetails.name
    const types = PokeDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = PokeDetails.sprites.other.dream_world.front_default

    return pokemon
}

PokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url) // nova busca na url do pokemon
        .then((response) => response.json()) // e converte a resposta em json
        .then(ConvertToModel) // e converte em modelo
}

PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset= ${offset} &limit= ${limit}' // url da api`

    return fetch(url) // busca na url, se der certo, retorna um response
        .then((Response) => Response.json()) //transforma o response em json
        .then((jsonBody) => jsonBody.results) //resultados do json
        .then((pokemons) => pokemons.map((PokeApi.getPokemonsDetails))) // mapeia os pokemons e retorna os detalhes
        .then((detailRequests) => Promise.all(detailRequests)) // a lista de requisições de detalhes, espera todas derem certo para retornar
        .then((PokemonDetails) => PokemonDetails) //faz um lista de detalhes dos pokemons
}
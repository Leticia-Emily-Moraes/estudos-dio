const PokemomList = document.getElementById('PokemomList')
const LoadMoreButton = document.getElementById('LoadMoreButton');
// let pokemonCardArray = document.querySelectorAll('.pokemon-card')
const maxRecord = 11
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const Newhtml = pokemons.map((pokemon) => `
        <li class="pokemon-card ${pokemon.type}">
        <article>
            <p>${pokemon.name}</p>
            <p class="number">#${pokemon.number}</p>
        </article>
        <article>
            <span class="types">
                ${pokemon.types.map((type) => `<p class=" type ${type}">${type}</p>`).join('')}
            </span>
            <img src="${pokemon.photo}"
                alt="${pokemon.name}">
        </article>
        </li>`).join('')

        PokemomList.innerHTML += Newhtml
    })
}

loadPokemonItens()

LoadMoreButton.addEventListener('click', () => {
    debugger
    offset += limit
    // qtdRecord = offset + limit
    // if(qtdRecord >= maxRecord){
    //     newLimit = maxRecord - qtdRecord
    //     loadPokemonItens(offset, newLimit)
    //     LoadMoreButton.style.display = 'none' //ou LoadMoreButton.parentElement.removeChild(LoadMoreButton)
    // }else{
        loadPokemonItens(offset, limit)
    // }
    // console.log(pokemonCardArray.length)
})

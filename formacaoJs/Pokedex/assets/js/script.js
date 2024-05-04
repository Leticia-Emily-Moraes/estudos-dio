const PokemomList = document.getElementById('PokemomList')
const LoadMoreButton = document.getElementById('LoadMoreButton');

const maxRecord = 151
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

    offset += limit
    const qtdRecord = offset + limit

    if(qtdRecord >= maxRecord){

        const newLimit = maxRecord - offset

        loadPokemonItens(offset, newLimit)
        LoadMoreButton.style.display = 'none' //ou LoadMoreButton.parentElement.removeChild(LoadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})

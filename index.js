const mainContainer = document.getElementById("main-container");

//API call for the pokemn data:

/*fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((res) => {
    if (!res.ok) {
      throw Error("Opps something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data.results);
    console.log(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png` --per le immagini
    );
  })
  .catch((error) => console.log(error));*/

async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
    if (!response.ok) {
      throw Error("Opps something went wrong");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// function to work with the data

getPokemonData().then((data) => {
  const allPokemondata = data.results;
  console.log(allPokemondata);
  const pokemonHtml = allPokemondata
    .map((pokemon, index) => {
      return `
    <div class="pokemon-card">
         <img
         src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
           index + 1
         }.png"
          alt="${pokemon.name}"
         />

        <p>${pokemon.name}</p>
  </div>
    `;
    })
    .join("");
  console.log(pokemonHtml);

  mainContainer.innerHTML = pokemonHtml;
});

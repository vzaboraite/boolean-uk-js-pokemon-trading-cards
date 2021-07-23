// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// console.log(data);

// 1.0 Create the bridge using <ul class="cards"></ul>

// 2.0 createPokemonCard(pokemon)
// - create an <h2>
//    - text comes from pokemon.name
// - create an <img>
//    - src comes from sprites.other["official-artwork"].front_default
// - run createStatsList() and append
//
// input: an object that represents a pokemon
// output: <li> element that looks like the the card template
//
// How could I test this on the page rather than a console.log?

// 2.1 createStatsList(stats)
// - The list of stats
// - For loop to create each stat from a "stats" array
//
// input: an array of stats from a pokemon object
// output: <ul> element with various <li> elements

// 2.2 renderPokemonCards(data)
// - A for loop on the array of pokemon
//   - run createPokemonCard()
//   - append to the element from Step 1.0
// - input: an array of objects that represent pokemon (data)
// - output: -

// 1.0 bridge between index.js and index.html
const cardsElem = document.querySelector(".cards");

//  2.0
function createPokemonCard(pokemon) {
  const pokemonCardElem = document.createElement("li");
  pokemonCardElem.setAttribute("class", "card");

  /* DONE: 
      - pokemonName should start with capital letter
  */
  const pokemonNameElem = document.createElement("h2");
  pokemonNameElem.setAttribute("class", "card--title");
  pokemonNameElem.innerText =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonCardElem.append(pokemonNameElem);

  const imgElem = document.createElement("img");
  const pokemonImage = pokemon.sprites.other["official-artwork"].front_default;
  imgElem.setAttribute("class", "card--img");
  imgElem.setAttribute("width", "256");
  imgElem.setAttribute("src", pokemonImage);
  pokemonCardElem.append(imgElem);

  const pokemonStatsElem = createStatsList(pokemon.stats);
  pokemonCardElem.append(pokemonStatsElem);

  return pokemonCardElem;
}

// 2.1
function createStatsList(stats) {
  const cardTextElem = document.createElement("ul");
  cardTextElem.setAttribute("class", "card--text");

  /* DONE: 
      - statName should be uppercased
      - gaps between liElem
  */
  for (let i = 0; i < stats.length; i++) {
    const liElem = document.createElement("li");
    const statName = stats[i].stat.name;
    const baseStat = stats[i].base_stat;
    liElem.innerText = `${statName.toUpperCase()}: ${baseStat}`;
    cardTextElem.append(liElem);
  }

  return cardTextElem;
}

function renderPokemonCards(data) {
  for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    // append
    cardsElem.append(createPokemonCard(pokemon));
  }
}

renderPokemonCards(data);

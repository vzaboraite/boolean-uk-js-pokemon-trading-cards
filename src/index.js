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

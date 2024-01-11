import React, { useState } from "react";
import "./App.css"
function App() {
  const [randomNumber, setRandomNumber] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  const fetchRandomPokemon = async () => {
    try {
      const newRandomNumber = Math.floor(Math.random() * 100) + 1;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newRandomNumber}`
      );
      const data = await response.json();

      setRandomNumber(newRandomNumber);
      setPokemon(data);
    } catch (error) {
      console.error("Pokemon ma'lumotlarini olishda xato:", error);
    }
  };

  return (
    <div className="mainof ">
      <div className="main_order">
      <h2>Pokemon Ma'lumotlari</h2>
     
     {pokemon && (
       <div className="mainof">
         <img className="site_img" src={pokemon.sprites.front_default} alt="Pokemon" />
        <div className="mainon"> <div> <p className="main_title" >{pokemon.stats[1].base_stat}</p>Attack  </div>
         <div><p className="main_title"> {pokemon.stats[2].base_stat}</p>Defense</div>
         <div><p className="main_title"> {pokemon.stats[5].base_stat}</p>Speed</div>
         </div>
       </div>
     )}
      </div>
       <button onClick={fetchRandomPokemon}>Tasodifiy Pokemonni Olish</button>
    </div>
  );
}

export default App;

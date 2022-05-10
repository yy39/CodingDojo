import './App.css';
import Button from './components/Button';
import PokemonList from './components/PokemonList';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const handleFetch = (pokemon) => {
    setPokemon(pokemon);
  }

  return (
    <div className="App">
      <Button fetchAction={handleFetch} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;

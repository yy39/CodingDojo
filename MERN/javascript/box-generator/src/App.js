import './App.css';
import Form from './components/Form';
import Box from './components/Box';
import react, { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState(["red", "green"]);

  const handleNewColor = (newColor) => {
    setBoxes([...boxes, newColor]);
    // since state is immutable we cannot push, using spread operator and adding on new element and setting state with that
  }

  return (
    <div className="App" >
      <Form onNewColor={handleNewColor} />
      <Box boxes={boxes} />
    </div>
  );
}

export default App;

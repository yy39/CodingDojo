import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VarDisplay from './components/VarDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:pathVar" element={<VarDisplay />} />
          <Route path="/:pathVar/:textColor/:bgColor" element={<VarDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

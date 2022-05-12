import './App.css';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planet from './views/Planet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>GOT WALKER</h1>
      <HeaderForm />

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

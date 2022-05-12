import './App.css';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planet from './views/Planet';
import Error from './views/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h1>GOT WALKER</h1>
        <HeaderForm />

        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  Router, 
  Navigate
} from 'react-router-dom'

//Paginas
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
     <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;

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
import Navbar from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Bpm01 from './pages/Estacao/BPM01/Bpm01';
import Bpm02 from './pages/Estacao/BPM02/Bpm02';
import Bpm03 from './pages/Estacao/BPM03/Bpm03';
import Bobinagem from './pages/Processo/Bobinagem/Bobinagem';
import MontagemFinal from './pages/Processo/MontagemFinal/MontagemFinal';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css' ;


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
      {/*Validar as páginas, "Routes"*/}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/estacao/bpm01" element={<Bpm01 />} />
          <Route path="/estacao/bpm02" element={<Bpm02 />} />
          <Route path="/estacao/bpm03" element={<Bpm03 />} />
          <Route path="/processo/bobinagem" element={<Bobinagem />} />
          <Route path="/processo/montagemfinal" element={<MontagemFinal />} />
        </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;

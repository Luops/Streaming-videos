import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  Router, 
  Navigate
} from 'react-router-dom'

//Componentes
import Navbar from './components/Navbar/Header';
import Footer from './components/Footer/Footer';

//Paginas
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Bob09 from './pages/Estacao/BOB09/Bob09';
import Bob17 from './pages/Estacao/BOB17/Bob17';
import Bob15 from './pages/Estacao/BOB15/Bob15';
import Bobinagem from './pages/Processo/Bobinagem/Bobinagem';
import MontagemFinal from './pages/Processo/MontagemFinal/MontagemFinal';
import Mf02 from './pages/Estacao/MF02/Mf02';
import Mf03 from './pages/Estacao/MF03/Mf03';
import Mf05 from './pages/Estacao/MF05/Mf05';

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
          <Route path="/estacao/bob09" element={<Bob09 />} />
          <Route path="/estacao/bob15" element={<Bob15 />} />
          <Route path="/estacao/bob17" element={<Bob17 />} />
          <Route path="/estacao/mf02" element={<Mf02 />} />
          <Route path="/estacao/mf03" element={<Mf03 />} />
          <Route path="/estacao/mf05" element={<Mf05 />} />
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

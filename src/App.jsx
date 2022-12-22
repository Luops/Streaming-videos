import { 
  BrowserRouter, 
  Routes, 
  Route,
  Router, 
  Navigate
} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';


//hooks
import React, {useState, useEffect} from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Context
import { AuthProvider } from './context/AuthContext';

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
import AdicionarVideo from './pages/Adicionar/AdicionarConteudo/Video';
import AdicionarDestaque from './pages/Adicionar/AdicionarDestaque/Video';
import Search from './pages/Search/Search';
import Conteudo from './pages/Conteudo/Conteudo';
import Destaque from './pages/Destaque/Destaque';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
} from 'react-bootstrap';

import './App.css'


function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();
  const [isHome, setIsHome] = useState(false)

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando</p>
  }

  

  return (
    <div className='FundoAzul'>
     <AuthProvider value={{user}}>
      <BrowserRouter>
        {/*
        {user ? <Navbar/> : ""}
        Validar as páginas, "Routes"
        <div className='FundoAzul'>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/estacao/bob09" element={user ? <Bob09 /> : <Navigate to="/login"/>} />
            <Route path="/conteudo/:id" element={user ? <Conteudo /> : <Navigate to="/login"/>} />
            <Route path="/destaque/:id" element={user ? <Destaque /> : <Navigate to="/login"/>} />
            <Route path="/estacao/bob15" element={user ? <Bob15 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/bob17" element={user ? <Bob17 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf02" element={user ? <Mf02 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf03" element={user ? <Mf03 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf05" element={user ? <Mf05 /> : <Navigate to="/login"/>} />
            <Route path="/processo/bobinagem" element={user ? <Bobinagem /> : <Navigate to="/login"/> } />
            <Route path="/processo/montagemfinal" element={user ? <MontagemFinal /> : <Navigate to="/login"/>} />
            <Route path="/adicionar/adicionarConteudo" element={user ? <AdicionarVideo /> : <Navigate to="/login"/>} />
            <Route path="/adicionar/adicionarDestaque" element={user ? <AdicionarDestaque /> : <Navigate to="/login"/>} />
          </Routes>
        </div>
        */}
        {/*{user ? <Footer/> : ""}*/}
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

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

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
} from 'react-bootstrap';


function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

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
    <div>
     <AuthProvider value={{user}}>
      <BrowserRouter>
        {user ? <Navbar/> : ""}
        {/*Validar as páginas, "Routes"*/}
        <div>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
            <Route path="/estacao/bob09" element={user ? <Bob09 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/bob15" element={user ? <Bob15 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/bob17" element={user ? <Bob17 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf02" element={user ? <Mf02 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf03" element={user ? <Mf03 /> : <Navigate to="/login"/>} />
            <Route path="/estacao/mf05" element={user ? <Mf05 /> : <Navigate to="/login"/>} />
            <Route path="/processo/bobinagem" element={user ? <Bobinagem /> : <Navigate to="/login"/> } />
            <Route path="/processo/montagemfinal" element={user ? <MontagemFinal /> : <Navigate to="/login"/>} />
          </Routes>
        </div>
        {user ? <Footer/> : ""}
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

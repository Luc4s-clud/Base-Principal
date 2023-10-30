import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Bolsas from './components/pages/Bolsas';
import Perfil from './components/pages/Perfil';
import Atividades from './components/pages/Atividades';
import Demandas from './components/pages/Demandas';
import Certificados from './components/pages/Certificados';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </BrowserRouter>
    );
}

function ProtectedRoutes() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/bolsas" element={<Bolsas />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/atividades" element={<Atividades />} />
                <Route path="/demandas" element={<Demandas />} />
                <Route path="/certificados" element={<Certificados />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

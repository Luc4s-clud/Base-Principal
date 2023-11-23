import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Bolsas from './components/pages/Bolsas';
import Perfil from './components/pages/Perfil';
import Atividades from './components/pages/Atividades';
import Demandas from './components/pages/Demandas';
import Certificados from './components/pages/Certificados';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CriarDemanda from './components/pages/CriarDemanda';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        // Simulação de lógica de login bem-sucedida
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        // Simulação de lógica de logout
        setIsAuthenticated(false);
    };
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route
                    path="/*"
                    element={
                        isAuthenticated ? (
                            <ProtectedRoutes onLogout={handleLogout} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function ProtectedRoutes({ onLogout }) {
    return (
        <>
            <NavBar onLogout={onLogout} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/bolsas" element={<Bolsas />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/atividades" element={<Atividades />} />
                <Route path="/demandas" element={<Demandas />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/criar-demanda" element={<CriarDemanda />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

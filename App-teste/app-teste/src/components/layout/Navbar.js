import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo-site-branco.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className="navbar">
            <img src={logo} alt='logo' className="logo" />
            <div className="link-container">
                <ul className="link-list">
                    <li className="item"><Link to="/home">Home</Link></li>
                    <li className="item"><Link to="/bolsas">Cadastro de Bolsas</Link></li>
                    <li className="item"><Link to="/perfil">Meu Perfil</Link></li>
                    <li className="item"><Link to="/atividades">Atividades</Link></li>
                    <li className="item"><Link to="/demandas">Demandas</Link></li>
                    <li className="item"><Link to="/certificados">Certificados</Link></li>
                </ul>
            </div>
            <button onClick={handleLogout} className="logout-button">Sair</button>
        </nav>
    );
}

export default NavBar;

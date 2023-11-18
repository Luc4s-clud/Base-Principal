// Importe o arquivo SVG no componente
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo-site-branco.png';
import userLogo from '../images/user-foto-branco.png'; // Importe o SVG

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className="logo" />
      <div className="link-container">
        <ul className="link-list">
          <li className="item"><Link to="/home">Home</Link></li>
          <li className="item"><Link to="/bolsas">Cadastro de Bolsas</Link></li>
          <li className="item"><Link to="/demandas">Demandas</Link></li>
          <li className="item"><Link to="/atividades">Atividades</Link></li>
          <li className="item"><Link to="/certificados">Certificados</Link></li>
          <li className="item2">
            <Link to="/perfil">
              <img src={userLogo} alt="Perfil" className="logo" />
              <div>Meu Perfil</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

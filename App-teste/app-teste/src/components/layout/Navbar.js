import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo-site-branco.png';
import userLogoBranco from '../images/user-foto-branco.png';
import userLogoLaranja from '../images/user-foto-laranja.png';

function NavBar() {
  const trocarParaImagemLaranja = () => {
    const imagem = document.getElementById('user-logo');
    if (imagem) {
      imagem.src = userLogoLaranja;
    }
  };

  const restaurarImagemOriginal = () => {
    const imagem = document.getElementById('user-logo');
    if (imagem) {
      imagem.src = userLogoBranco;
    }
  };

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
              <img
                src={userLogoBranco}
                alt="Perfil"
                className="logo"
                id="user-logo"
                onMouseOver={trocarParaImagemLaranja}
                onMouseOut={restaurarImagemOriginal}
              />
              <div>Meu Perfil</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

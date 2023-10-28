import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../images/logo500.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
  
    return (
      <nav className="navbar">
        <img src={logo} alt='logo' className="logo" />
        <div className="link-container"> {/* Contêiner flex para centralizar a lista */}
          <ul className="link-list">
            <li className="link-item"><Link to="/bolsas">Cadastro de Bolsas</Link></li>
            <li className="link-item"><Link to="/perfil">Meu Perfil</Link></li>
          </ul>
        </div>
        <button onClick={handleLogout} className='logout-button'>Sair</button>
      </nav>
    );
  }
  
export default NavBar;
  
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo-site-branco.png';
import userLogoBranco from '../images/user-foto-branco.png';
import userLogoLaranja from '../images/user-foto-laranja.png';



function NavBar() {
  const [textHovered, setTextHovered] = useState(false);
  const [userRole, setUserRole] = useState(''); 

  useEffect(() => {
    // Supondo que o papel do usuário está armazenado com a chave 'role' no localStorage
    const role = localStorage.getItem('role');
    setUserRole(role);
  }, []);

  const trocarParaImagemLaranja = () => {
    const imagem = document.getElementById('user-logo');
    if (imagem) {
      imagem.src = userLogoLaranja;
    }
    setTextHovered(true);
  };

  const restaurarImagemOriginal = () => {
    const imagem = document.getElementById('user-logo');
    if (imagem) {
      imagem.src = userLogoBranco;
    }
    setTextHovered(false);
  };
  useEffect(() => {
    const role = localStorage.getItem('role');
    console.log('Papel do usuário:', role); // Isto mostrará o papel no console
    setUserRole(role);
  }, []);
  
  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className="logo" />
      <div className="link-container">
        <ul className="link-list">
          {/* Itens comuns a todos os usuários */}
          <li className="item"><Link to="/home">Home</Link></li>
          
          {/* Renderização condicional com base no papel do usuário */}
          {userRole === '1' && (
            <>
              <li className="item"><Link to="/bolsas">Cadastro de Bolsas</Link></li>
              <li className="item"><Link to="/criar-demanda">Criar Demanda</Link></li>
              <li className="item"><Link to="/demandas">Demandas</Link></li>
              <li className="item"><Link to="/atividades">Atividades</Link></li>
              <li className="item"><Link to="/certificados">Certificados</Link></li>
            </>
          )}
          {userRole === '3' && (
            <>
              <li className="item"><Link to="/chamada">Chamada</Link></li>
              <li className="item"><Link to="/chamada">Minha Demanda</Link></li>
              {/* Inclua outros links específicos para professores aqui */}
            </>
          )}
          {userRole === '2' && (
            <>
              <li className="item"><Link to="/demandas">Demandas</Link></li>
              <li className="item"><Link to="/certificados">Certificados</Link></li>
              <li className="item"><Link to="/atividades">Atividades</Link></li>
              <li className="item"><Link to="/bolsas">Cadastro de Bolsas</Link></li>
              {/* Inclua outros links específicos para alunos aqui */}
            </>
          )}

          {/* Perfil é comum a todos, mas poderia ser condicional também */}
          <li className="item2" onMouseOver={trocarParaImagemLaranja} onMouseOut={restaurarImagemOriginal}>
            <Link to="/perfil">
              <img src={userLogoBranco} alt="Perfil" className="logo" id="user-logo" />
              <div className={`image-caption ${textHovered ? 'text-hovered' : ''}`}>Meu Perfil</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
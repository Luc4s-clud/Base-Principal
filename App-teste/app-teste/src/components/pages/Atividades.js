import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Atividades() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redireciona o usuário para a página de login se não houver token.
    }
  }, [navigate]);

  return (
    <div>
      <p>Atividades</p>
      {/* Restante do conteúdo da página Atividades */}
    </div>
  );
}

export default Atividades;
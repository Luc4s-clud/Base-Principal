import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importe o axios

function Perfil() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nm_usuario: '',
    nr_cpf: '',
    ds_email: '',
    nr_ddd: '',
    nr_telefone: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
  
    console.log('UserId armazenado:', userId);
  
    if (!token) {
      navigate('/login');
    } else {
      axios.get(`http://localhost:3050/user:id/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log('Erro ao buscar dados do usuário:', error);
          
        });
    }
  }, [navigate]);
  


  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <div className="perfil-card">
        <h2>{user.nome}</h2>
        <p><strong>Email:</strong> {user.ds_email}</p>
        <p><strong>Telefone:</strong> {user.nr_telefone}</p>
        <p><strong>CPF:</strong> {user.nr_cpf}</p>
      </div>
    </div>
  );
}

export default Perfil;

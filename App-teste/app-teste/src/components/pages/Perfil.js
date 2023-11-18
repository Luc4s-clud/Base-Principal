import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PerfilView from './PerfilView'; // Importando o componente de apresentação

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
  
    if (!token) {
      navigate('/login');
    } else {
      axios.get(`http://localhost:3050/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          if (response.data) {
            setUser(response.data);
          }
        })
        .catch((error) => {
          console.log('Erro ao buscar dados do usuário:', error);
        });
    }
  }, [navigate]);


 return <PerfilView user={user} />; // Renderizando o componente de apresentação
 
}

export default Perfil;




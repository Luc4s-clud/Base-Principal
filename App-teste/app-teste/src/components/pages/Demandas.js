import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DemandasView from './DemandasView';
import { useNavigate } from 'react-router-dom';
import './Demandas.css';

function Demandas() {
  const [demandas, setDemandas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  
  useEffect(() => {
    axios.get('http://localhost:3050/demandas')
      .then(response => {
        console.log('Dados recebidos:', response.data); // Verifique se os dados estão sendo recebidos
        setDemandas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar demandas:', error); // Isso ajudará a identificar erros
      });
  }, []);

  return (
    <div>
      <h1>Demandas</h1>
      <DemandasView demandas={demandas} />;
    </div>
  );
}

export default Demandas;

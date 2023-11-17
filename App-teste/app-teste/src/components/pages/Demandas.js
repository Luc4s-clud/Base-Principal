import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DemandasView from './DemandasView';

function Demandas() {
  const [demandas, setDemandas] = useState([]);

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

  return <DemandasView demandas={demandas} />;
}

export default Demandas;

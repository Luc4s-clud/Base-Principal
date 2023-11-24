// Arquivo CriarDemanda.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DemandaForm from './DemandaForm';
import './CriarDemanda.css';

function CriarDemanda() {
    const [demanda, setDemanda] = useState({
        nm_demanda: '',
        ds_descricao: '',
        qt_horas: '',
        qt_vagas: '',
        dt_inicio: '',
        dt_fim: '',
        cd_imagem: '', // Este campo será tratado separadamente para upload de arquivo
        cd_localizacao: '', // Inicialmente vazio, será preenchido com a seleção do usuário
    });

    const [localizacoes, setLocalizacoes] = useState([]); // Estado para armazenar localizações
    const navigate = useNavigate();

    // Carrega localizações ao inicializar o componente
    useEffect(() => {
        const fetchLocalizacoes = async () => {
            // Substitua pela sua URL de API real
            const response = await axios.get('http://localhost:3050/localizacoes');
            setLocalizacoes(response.data);
        };
        fetchLocalizacoes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Aqui você precisará manipular o envio do campo de imagem se necessário
        // ...

        try {
            const response = await axios.post('http://localhost:3050/demandas', demanda);
            console.log('Demanda criada:', response.data);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao criar demanda:', error);
        }
    };

    return (
        <DemandaForm
            demanda={demanda}
            setDemanda={setDemanda}
            localizacoes={localizacoes}
            handleSubmit={handleSubmit}
        />
    );
}

export default CriarDemanda;

// CriarDemanda.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CriarDemanda.css'

function CriarDemanda() {
    const [demanda, setDemanda] = useState({
        nm_demanda: '',
        ds_descricao: '',
        // Adicione estados para todos os outros campos
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDemanda({ ...demanda, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3050/demandas', demanda);
            console.log('Demanda criada:', response.data);
            navigate('/home'); // Ou para a página de sucesso
        } catch (error) {
            console.error('Erro ao criar demanda:', error);
        }
    };

    return (
        <div>
            <h2>Criar Nova Demanda</h2>
            <form onSubmit={handleSubmit}>
                <input name="nm_demanda" type="text" value={demanda.nm_demanda} onChange={handleChange} placeholder="Nome da Demanda" required />
                <textarea name="ds_descricao" value={demanda.ds_descricao} onChange={handleChange} placeholder="Descrição da Demanda" required />
                {/* Repita para os outros campos */}
                <button type="submit">Criar</button>
            </form>
        </div>
    );
}

export default CriarDemanda;

// CriarDemanda.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CriarDemanda.css';

function CriarDemanda() {
    const [demanda, setDemanda] = useState({
        nm_demanda: '',
        ds_descricao: '',
        qt_horas: 0,
        qt_vagas: 0,
        dt_inicio: '',
        dt_fim: '',
        dt_fim_inscricao: '',
        // Certifique-se de adicionar estados para todos os outros campos
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
                <label>
                    Nome da Demanda:
                    <input name="nm_demanda" className="nav-item" type="text" value={demanda.nm_demanda} onChange={handleChange} required />
                </label>

                <label>
                    Descrição da Demanda:
                    <textarea name="ds_descricao" className="nav-item" value={demanda.ds_descricao} onChange={handleChange} required />
                </label>

                <label>
                    Quantidade de Horas:
                    <input name="qt_horas" className="nav-item" type="number" value={demanda.qt_horas} onChange={handleChange} required />
                </label>

                <label>
                    Quantidade de Vagas:
                    <input name="qt_vagas" className="nav-item" type="number" value={demanda.qt_vagas} onChange={handleChange} required />
                </label>

                <label>
                    Data de Início:
                    <input name="dt_inicio" className="nav-item" type="date" value={demanda.dt_inicio} onChange={handleChange} required />
                </label>

                <label>
                    Data de Fim:
                    <input name="dt_fim" className="nav-item" type="date" value={demanda.dt_fim} onChange={handleChange} required />
                </label>

                <label>
                    Data de Fim da Inscrição:
                    <input name="dt_fim_inscricao" className="nav-item" type="date" value={demanda.dt_fim_inscricao} onChange={handleChange} required />
                </label>

                {/* Adicione campos para os outros estados */}
                <button type="submit" className='create-demand-button'>Criar</button>
            </form>
        </div>
    );
}

export default CriarDemanda;

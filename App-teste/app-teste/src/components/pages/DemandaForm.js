// Arquivo DemandaForm.js
import React from 'react';
import '../pages/CriarDemanda.css'

const DemandaForm = ({ demanda, setDemanda, localizacoes, handleSubmit }) => {
  const handleChange = (e) => {
    setDemanda({ ...demanda, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Criar Nova Demanda</h2>
      <form onSubmit={handleSubmit}>
        {/* Nome da Demanda */}
        <label>Nome da Demanda:</label>
        <input
          name="nm_demanda"
          type="text"
          value={demanda.nm_demanda}
          onChange={handleChange}
          required
        />

        {/* Descrição da Demanda */}
        <label>Descrição:</label>
        <textarea
          name="ds_descricao"
          value={demanda.ds_descricao}
          onChange={handleChange}
          required
        />

        {/* Quantidade de Horas */}
        <label>Quantidade de Horas:</label>
        <input
          name="qt_horas"
          type="number"
          value={demanda.qt_horas}
          onChange={handleChange}
          required
        />

        {/* Quantidade de Vagas */}
        <label>Quantidade de Vagas:</label>
        <input
          name="qt_vagas"
          type="number"
          value={demanda.qt_vagas}
          onChange={handleChange}
          required
        />

        {/* Data de Início */}
        <label>Data de Início:</label>
        <input
          name="dt_inicio"
          type="date"
          value={demanda.dt_inicio}
          onChange={handleChange}
          required
        />

        {/* Data de Fim */}
        <label>Data de Fim:</label>
        <input
          name="dt_fim"
          type="date"
          value={demanda.dt_fim}
          onChange={handleChange}
          required
        />

        {/* Imagem da Demanda */}
        {/* Implementar lógica de upload de arquivos no back-end e no front-end */}
        
        {/* Localização */}
        <label>Localização:</label>
        <select name="cd_localizacao" value={demanda.cd_localizacao} onChange={handleChange} required>
            {Array.isArray(localizacoes) && localizacoes.map(loc => (
                <option key={loc.cd_localizacao} value={loc.cd_localizacao}>
                    {loc.ds_localizacao}
                </option>
            ))}
        </select>

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default DemandaForm;

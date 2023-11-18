import React from 'react';
import './DemandasView.css'; // Certifique-se de criar este arquivo CSS para estilizar seu componente

function DemandasView({ demandas }) {
  return (
    <div className="demandas-container">
      {demandas.map((demanda) => (
        <div key={demanda.cd_demanda} className="demanda-card">
          <div className="demanda-titulo">{demanda.nm_demanda}</div>
          <div className="demanda-descricao">{demanda.ds_descricao}</div>
          <button className="demanda-inscrever">Inscrever-se</button>
        </div>
      ))}
    </div>
  );
}

export default DemandasView;

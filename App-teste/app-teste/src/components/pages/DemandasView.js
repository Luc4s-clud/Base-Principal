import React from 'react';

function DemandasView({ demandas }) {
  // Se demandas for null ou indefinido, renderize uma mensagem ou um loader
  if (!demandas) {
    return <div>Carregando demandas...</div>;
  }

  // Se não houver demandas, renderize uma mensagem apropriada
  if (demandas.length === 0) {
    return <div>Nenhuma demanda encontrada.</div>;
  }

  // Renderize a lista de demandas
  return (
    <div className="demandas-container">
      <h1>Demandas</h1>
      {demandas.map((demanda) => (
        <div key={demanda.cd_demanda} className="demanda">
          <h2>{demanda.nm_demanda}</h2>
          <p>{demanda.ds_descricao}</p>
          {/* Inclua outros campos conforme necessário */}
        </div>
      ))}
    </div>
  );
}

export default DemandasView;

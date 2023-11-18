import React from 'react';

function PerfilView({ user }) {
  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <div className="perfil-card">
        <p><strong>Nome:</strong>{user.nm_usuario}</p>
        <p><strong>Email:</strong> {user.ds_email}</p>
        <p><strong>Telefone:</strong> {user.nr_telefone}</p>
        <p><strong>CPF:</strong> {user.nr_cpf}</p>
      </div>
    </div>
  );
}

export default PerfilView;

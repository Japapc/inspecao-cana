
// Usuários simulados (idealmente viriam de backend ou IndexedDB)
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {
  admin: { senha: 'admin123', tipo: 'admin' }
};

// Salvar no localStorage caso não exista
localStorage.setItem('usuarios', JSON.stringify(usuarios));

// Login
function login() {
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const erro = document.getElementById('erro');

  if (usuarios[usuario] && usuarios[usuario].senha === senha) {
    localStorage.setItem('usuarioLogado', usuario);
    window.location.href = 'index.html';
  } else {
    erro.textContent = "Usuário ou senha inválidos.";
  }
}

// Logout
function logout() {
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'login.html';
}

// Exibe o nome do usuário no cabeçalho do sistema
window.addEventListener('DOMContentLoaded', () => {
  const nome = localStorage.getItem('usuarioLogado');
  const span = document.getElementById('usuarioNome');
  if (span && nome) span.textContent = `Usuário: ${nome}`;
});

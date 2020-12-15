const submeter = (e) => {
  e.preventDefault();
  let nome = obterValorPorId("nome");
  let email = obterValorPorId("email");
  let telefone = obterValorPorId("telefone");
  let mensagem = obterValorPorId("mensagem-texto");
  validarElementos(nome, email, telefone, mensagem);
};

const obterValorPorId = (id) => {
  let elemento = document.getElementById(id);
  return elemento.value;
};

const validarElementos = (nome, email, telefone, mensagem) => {
  limparMensagens();
  limparBordas();
  campoMensagem = document.getElementById("mensagem-texto")
  let validou = false;
  if ((nome = null || nome == "")) {
    validou = validarCampo("nome", "red", "nome", "valida-nome");
  } else {
    validarCampo("nome", "green", "nome", "valida-nome");
    document.getElementById("valida-nome").style.display = "none";
  }
  if ((email = null || email == "")) {
    validou = validarCampo("email", "red", "email", "valida-email");
  } else {
    validarCampo("email", "green", "email", "valida-email");
    document.getElementById("valida-email").style.display = "none";
  }
  if ((telefone = null || telefone == "")) {
    validou = validarCampo("telefone", "red", "telefone", "valida-telefone");
  } else {
    validarCampo("telefone", "green", "telefone", "valida-telefone");
    document.getElementById("valida-telefone").style.display = "none";
  }
  if ((mensagem = null || mensagem == "")) {
    validou = validarCampo("mensagem-texto", "red", "mensagem", "valida-mensagem");
  } else {
    validarCampo("mensagem-texto", "green", "mensagem", "valida-mensagem");
    document.getElementById("valida-mensagem").style.display = "none";
  }
  if (campoMensagem.value.length > 200) {
    validou = validarQtdChar("mensagem-texto", "red", "mensagem", "valida-qtdchar");
    document.getElementById("mensagem-sucesso").style.display = "none";
    
  }
  if (!validou) {
    let mensagemSucesso = document.getElementById("mensagem-sucesso");
    mensagemSucesso.innerHTML = "Formulário enviado com sucesso!";
    mensagemSucesso.style.display = "block";
    mensagemSucesso.style.color = "green";
  }
};

const validarCampo = (id, cor, nomeCampo, idValidacao) => {
  let elemento = document.getElementById(id);
  elemento.style.borderColor = cor;
  let paragrafoNome = document.getElementById(idValidacao);

  paragrafoNome.innerHTML =
    paragrafoNome.innerHTML + "<br/>O campo " + nomeCampo + " é obrigatório";
  paragrafoNome.style.display = "block"; 
  return true;
};

const validarQtdChar = (id, cor, nomeCampo, idValidacao) => {
  let elemento = document.getElementById(id);
  elemento.style.borderColor = cor;
  let paragrafoNome = document.getElementById(idValidacao);

  paragrafoNome.innerHTML =
    paragrafoNome.innerHTML + "<br/>O campo " + nomeCampo + " deve ter no máximo 200 caracteres.";
  paragrafoNome.style.display = "block"; 
  return true;
};

const limparMensagens = () => {
  let paragrafoNome = document.getElementById("valida-nome");
  let paragrafoEmail = document.getElementById("valida-email");
  let paragrafoTelefone = document.getElementById("valida-telefone");
  let paragrafoMensagem = document.getElementById("valida-mensagem");
  let paragrafoQtdChar= document.getElementById("valida-qtdchar");
  paragrafoNome.innerHTML = "";
  paragrafoEmail.innerHTML = "";
  paragrafoTelefone.innerHTML = "";
  paragrafoMensagem.innerHTML = "";
  paragrafoQtdChar.innerHTML = "";
  paragrafoNome.style.display = "none";
  paragrafoEmail.style.display = "none";
  paragrafoTelefone.style.display = "none";
  paragrafoMensagem.style.display = "none";
  paragrafoQtdChar.style.display = "none";
};

const limparBordas = () => {
  document.getElementById("valida-nome").style.borderColor = "initial";
  document.getElementById("valida-email").style.borderColor = "initial";
  document.getElementById("valida-telefone").style.borderColor = "initial";
  document.getElementById("valida-mensagem").style.borderColor = "initial";
};
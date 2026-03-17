document.getElementById("formContato").addEventListener("submit", function (event) {

  event.preventDefault()

  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value
  let telefone = document.getElementById("telefone").value
  let assunto = document.getElementById("assunto").value
  let mensagem = document.getElementById("mensagem").value
  let termos = document.getElementById("termos").checked

  let erro = document.getElementById("erro")
  let sucesso = document.getElementById("sucesso")

  erro.innerText = ""
  sucesso.innerText = ""


  /* validação nome */
  if (nome === "") {
    erro.innerText = "O nome é obrigatório."
    return
  }

  if (nome.length < 3) {
    erro.innerText = "O nome deve ter pelo menos 3 letras."
    return
  }


  /* validação email simples */
  if (email === "") {
    erro.innerText = "O email é obrigatório."
    return
  }

  if (!email.includes("@") || !email.includes(".")) {
    erro.innerText = "Digite um email válido."
    return
  }


  /* validação telefone */
  if (telefone === "") {
    erro.innerText = "O telefone é obrigatório."
    return
  }

  if (telefone.length < 8) {
    erro.innerText = "Telefone muito curto."
    return
  }


  /* validação assunto */
  if (assunto === "") {
    erro.innerText = "Selecione um assunto."
    return
  }


  /* validação mensagem */
  if (mensagem === "") {
    erro.innerText = "Digite uma mensagem."
    return
  }

  if (mensagem.length < 10) {
    erro.innerText = "A mensagem deve ter pelo menos 10 caracteres."
    return
  }


  /* validação termos */
  if (!termos) {
    erro.innerText = "Você precisa aceitar os termos."
    return
  }


  /* sucesso */
  sucesso.innerText = "Formulário enviado com sucesso!"

})

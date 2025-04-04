function status(request, response) {
  response.status(200).json({ "mensagem": "Deu certo, é show demais" }); //Deu tudo certo
}

export default status;
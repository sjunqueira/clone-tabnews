import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as Soma, 2*4 as Multiplicacao;");
  console.log(result.rows);
  response.status(200).json({ "resultado": result.rows }); //Deu tudo certo
}

export default status;
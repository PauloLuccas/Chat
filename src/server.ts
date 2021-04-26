import express from "express";
import "./database";

const app = express();


/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELET = Deletar
 * PATCH = Alterar alguma informação específica
 */

 app.get("/", (request, response) => {
    return response.json({
        messege: 'Olá, NLW 05'
    })
 });

 app.post("/", (request, response) => {
     return response.json({ messege: 'Usuário salvo com sucesso!'});
 })

app.listen(3333, () => console.log('Server is running on port 3333'));
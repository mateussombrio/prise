import express, { urlencoded } from "express";
import conn from "./db/conn";

const app = express();

// Receber o JSON do formulário
app.use(express.urlencoded({ extended: true }));

// Iniciar o servidor com o banco de dados
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

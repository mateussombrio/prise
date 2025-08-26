import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Cria a conexão com o banco de dados
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

// Tentativa de acesso ao banco de dados
try {
  sequelize.authenticate();
  console.log("Conexão bem-sucedida");
} catch (error) {
  console.log("Não foi possível conectar: ", error);
}

module.exports = sequelize;

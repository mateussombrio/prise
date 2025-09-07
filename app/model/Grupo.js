import { DataTypes } from "sequelize";
import db from "../../db/conn";

const Grupo = db.define("Grupo", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Grupo;

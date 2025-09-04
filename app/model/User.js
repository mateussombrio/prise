import { DataTypes } from "sequelize";
import db from "../../db/conn";

const User = db.define("User", {
  primeiro_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ultimo_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User
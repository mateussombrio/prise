import { DataTypes } from "sequelize";
import db from "../../db/conn";

const Comentarios = db.define("Comentarios", {
  texto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  video: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  data_criacao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  num_upvotes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comentarios;

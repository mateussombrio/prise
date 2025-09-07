import { DataTypes } from "sequelize";
import db from "../../db/conn";

const Post = db.define("Post", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  video: {
    type: DataTypes.BLOB,
    allowNull: true,
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

module.exports = Post;

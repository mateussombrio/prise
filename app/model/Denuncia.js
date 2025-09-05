import { DataTypes } from "sequelize";
import db from "../../db/conn";

const Denuncia = db.define("Denuncia", {
  motivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_denuncia: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status_moderacao: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tipo_denuncia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Denuncia;

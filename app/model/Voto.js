import { DataTypes } from "sequelize";
import db from "../../db/conn";

const Voto = db.define("Voto", {
  valor_voto: {
    type: DataTypes.SMALLINT,
    allownull: false,
  },
  data_voto: {
    type: DataTypes.DATE,
    allownull: false,
  },
});

module.exports = Voto;

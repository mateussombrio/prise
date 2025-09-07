import { DataTypes } from "sequelize";
import db from "../../db/conn";

const InteresseUsuarioGrupo = db.define("interesseUsuarioGrupo", {
  data_inscricao: {
    type: DataTypes.DATE,
  },
});

module.exports = InteresseUsuarioGrupo;

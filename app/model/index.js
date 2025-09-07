import User from "./User"
import Comentario from "./Comentario"
import Grupo from "./Grupo"
import Denuncia from "./Denuncia"
import InteresseUsuarioGrupo from "./Interesse_usuario_grupo"
import Post from "./Post"
import Voto from "./Voto"

User.hasMany(Post)
User.hasMany(Grupo)
Grupo.hasMany(User)

Post.belongsTo(User)

module.exports = db
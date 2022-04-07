const {ObjectId} = require("mongodb");
module.exports = function(app, commentsRepository) {
    app.post('/comments/:song_id', function (req, res){
        if (req.session.user == null){
            res.send("Es necesario iniciar sesión para poder comentar");
        } else {

            let comment = {
                author : req.session.user,
                text : req.body.texto,
                song_id : ObjectId(req.params.song_id)
            }
            if (typeof req.body.texto === 'undefined' || req.body.texto === null || req.body.texto.toString().trim().length ==0){
                res.send("El comentario no puede estar en blanco");
            } else {
                commentsRepository.insertComment(comment, function(id) {
                    if (id == null) {
                        res.send("Error al añadir comentario");
                    } else {
                        res.send("Comentario añadido");
                    }
                });
            }
        }
    });

}
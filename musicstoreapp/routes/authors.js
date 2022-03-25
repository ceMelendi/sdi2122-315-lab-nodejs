module.exports=function (app) {
    app.get('/authors/add', function(req,res) {
        res.render("add.twig");
    });

    app.post('/authors/add', function (req,res){
        let response = "Autor agregado: " + req.body.name + "<br>"
            + " grupo: " + req.body.group + "<br>"
            + " rol: " + req.body.rol;

        res.send(response);
    });
};
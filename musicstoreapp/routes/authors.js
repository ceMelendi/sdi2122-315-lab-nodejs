module.exports=function (app) {

    app.get("/authors", function (req, res) {
        let authors = [{
            "name": "Brian",
            "group": "Day6",
            "rol": "guitar"
        },{
            "name": "Mitch",
            "group": "Pentatonix",
            "rol": "singer"
        },{
            "name": "Joshua",
            "group": "SVT",
            "rol": "bass"
        }];

        let response = {
            authors: authors
        };

        res.render("authors/authors.twig", response);
    });



    app.get('/authors/add', function(req,res) {
        let roles = [{
            "name": "Cantante",
            "value": "singer"
        },{
            "name": "Batería",
            "value": "drum"
        },{
            "name": "Guitarrista",
            "value": "guitar"
        },{
            "name": "Bajista",
            "value": "bass"
        },{
            "name": "Teclista",
            "value": "keyboard"
        }];

        let response = {
            roles: roles
        };

        res.render("authors/add.twig", response);
    });

    app.post('/authors/add', function (req,res){
        let response = "";
        if (req.body.name === null && typeof(req.body.name) == "undefined" || req.body.name.trim().length == 0)
            response = "Nombre de autor no enviado en la petición" + "<br>";
        else
            response = "Autor agregado: " + req.body.name + "<br>";
        if (req.body.group === null && typeof(req.body.group) == "undefined" || req.body.group.trim().length == 0)
            response += "Grupo no enviado en la petición" + "<br>";
        else
            response += "grupo: " + req.body.group + "<br>";
        if (req.body.rol === null && typeof(req.body.rol) == "undefined" || req.body.rol.trim().length == 0)
            response += "Rol no enviado en la petición";
        else
            response += "rol: " + req.body.rol;

        res.send(response);
    });

    app.get('/authors/*', function (req, res){
        res.redirect('/authors');
    });
};
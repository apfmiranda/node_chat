module.exports.iniciaChat = function(app,req, res) {

    var dadosForm = req.body; 
    req.assert('apelido', 'Nome ou apelido é Obrigatório').notEmpty();
    req.assert('apelido', 'Minimo de 3 e maximo de 15 caracteres').len(3,15);

    var erros = req.validationErrors();
    console.log(erros);
    if (erros) {
        res.render('index', {validacao: erros});
        return;
    }   

    res.render('chat');
}
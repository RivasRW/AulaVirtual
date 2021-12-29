// Importación del -- User-model --
const User = require('../models/users')

//  ### FUNCIONES EXPORTADAS PARA SER CAPTURADAS POR EL ROUTER ###

// Función que renderiza la página -- login-page -- 
exports.login = function(req, res) {
    if(req.session.userinfo){
        res.render('login', req.session.userinfo)
    }else {
        res.render('login', {results: req.flash('result')})
    }
}

// Función que renderiza la página del register 
exports.register = function(req, res) {
    res.render('register', {errors: req.flash('error')})
}

// Función que renderiza la página del register 
exports.pregister = function(req, res) {
    let registerinfo = new RegisterInfo(req.body)
    registerinfo.register().then(function(result){
        req.flash('result', result)
        req.session.save(function(){
            res.redirect('/')
        })
    }).catch(function(error){
        req.flash('error', error)
        req.session.save(function(){
            res.redirect('/register')
        })
    })
}

// Función que renderiza la página -- home-page --
exports.home = function(req, res) {
    let user = new User(req.body)
    user.login().then(function(result){
            req.session.userinfo = {
                cedula: user.info.pk_usuario,
                nombre: user.info.nombre, 
                apellido: user.info.apellido,
                email: user.info.correo,
            }
            req.session.save(function(){
                res.redirect('/')
            })
    }).catch(function(err){
        req.flash('result', err)
        req.session.save(function(){
            res.redirect('/')
        })
    })
}

// Función de cerrar sesión
exports.logout = function(req, res){
    req.session.destroy(function(){
        res.redirect('/')
    })
}
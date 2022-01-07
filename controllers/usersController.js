const User = require('../models/users') 
exports.login = function(req,res){
    let user = new User(req.body)
    user.login().then(function(result){
        console.log(result)
    }).catch(function(err){
        console.log(err)
    })
    res.render('login')
}
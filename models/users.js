// Importación de la función de revisión de IP
const { networkInterfaces } = require('os');
const nets = networkInterfaces();

// Importación de la conexión a la base de datos
<<<<<<< HEAD
const userConnection = require('../db').pool
//console.log(userConnection)
=======
const userConnection = require('../db').client
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39

// Importación del mailer
const loginEmail = require('../mailer')

// Inclusion de la libreria validator
const validator = require('validator')

// Inclusion de la libreria bcryptjs
const bcrypt = require('bcryptjs')

// Constructor de usuario
let User = function(data){
    this.info = data
    this.errors = []
}

// Método para verificar tipo de dato y propiedades
User.prototype.clean = function(){
    if(typeof(this.info.email) != "string"){this.info.email = ""}
    if(typeof(this.info.password) != "string"){this.info.password = ""}
    
    this.info = {
        email: this.info.email.trim().toLowerCase(),
        password: this.info.password
    }
}

// Método validation del constructor User
User.prototype.validation = function(){
    if(!validator.isEmail(this.info.email)){this.errors.push("Dirección de correo inválida")}
    if(this.info.password == ""){this.errors.push("Debe ingresar una contraseña")}
    if(this.info.password.length > 0 && this.info.password.length < 8){this.errors.push("La contraseña debe tener al menos 8 caracteres")}
    if(this.info.password.length > 100){this.errors.push("La contraseña debe tener máximo 99 caracteres")}
}

// Método login del constructor User
User.prototype.login = function(){
    return new Promise((resolve, reject)=>{
        this.clean()
        this.validation()
    
        if(!this.errors.length){
            let text = 'SELECT * FROM tbl_usuarios'
            userConnection.query(text, (err, res)=>{
                let emails = []
<<<<<<< HEAD
                //console.log(res.rows)
=======
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39
                res.rows.map(function(obj){
                    emails.push(obj.correo)
                })
                let einfo = {
                    rec: this.info.email,
<<<<<<< HEAD
                    sub: "Inicio de sesión AULANET"
=======
                    sub: "Inicio de sesion seguro AULANET"
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39
                }
                if(emails.includes(this.info.email)) {
                     let usdata = {}
                     res.rows.filter((obj)=>{
                        if(obj.correo == this.info.email){
                            usdata = obj
                        }
                    })
<<<<<<< HEAD
                    if(this.info.password == usdata.password){
                        this.info = usdata
                        resolve('V')
                        // loginEmail.mailTo(einfo, template()).then(function(){
                        //     resolve('V')
                        // }).catch(function(){
                        //     reject(err)
                        // })
=======
                    if(bcrypt.compareSync(this.info.password, usdata.password)){
                        this.info = usdata
                        loginEmail.mailTo(einfo, template()).then(function(){
                            resolve('V')
                        }).catch(function(){
                            reject(err)
                        })
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39
                    } else {
                        reject('Contraseña incorrecta')
                    }

                } else {
                    reject('Dirección de correo no registrada')
                }
            })
        } else {
            reject(this.errors[0])
        }
    })

}

<<<<<<< HEAD
 let datetime = new Date();
 let ip = {}
=======
let datetime = new Date();
let ip = {}
>>>>>>> e95aa6e6a52e8d0449b71554854582f184cefd39

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!ip[name]) {
                ip[name] = [];
            }

            ip[name].push(net.address);
            console.log(ip)
        }
    }
}

function template() {
    return `
        <h3>Inicio de sesión detectado en AULANET</h3>
        <p>
            Estimad@ usuario(a) se ha detectado un inicio de sesión en su cuenta el ${datetime},
            de la siguiente dirección ip: ${ip.wlp3s0[0]}.
        </p>
    `
}

// Exportando el constructor User
module.exports = User
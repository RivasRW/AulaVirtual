// Importando variables de ambiente
const dotenv = require('dotenv')
dotenv.config()
const dbu = process.env.PGUSER
const h = process.env.HOST
const db = process.env.DATABASE
const pa = process.env.PASSWORD
const po = process.env.PORT

// creando connection pool
const {Pool, Client} = require('pg')
const pool = new Pool({
    user: dbu,
    host: h,
    database: db,
    password: pa,
    port: po,
})

// Exportando cliente conectado para ser usado por otros archivos
pool.connect( function(err, client, done){
    module.exports.client = client
    const app = require('./aulanet_App')
    app.listen(8080, function(){console.log('aulanet_App listen on port: 8080!')})
})

module.exports.pool = pool
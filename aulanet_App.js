// Declaración de variables de condición inicial
const express = require('express')
const session = require('express-session')
const PgSession = require('connect-pg-simple')(session)
const flash = require('connect-flash')
const router = require('./router')
const app = express()
const pooldata = require('./db').pool
let sessionOptions = session({
    secret: "another day on the paradise",
    store: new PgSession({
        pool: pooldata,
        tablename: 'session'
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 3600 * 24, httpOnly: true}
})

// Permiso de uso de sesión
app.use(sessionOptions)

// Permiso de uso de flash messages
app.use(flash())

// Permiso de acceso al contenido de la carpeta public, img y src
app.use(express.static('public'))
app.use(express.static('public/img'))
app.use(express.static('public/sass'))
app.use(express.static('public/css'))
app.use(express.static('src'))

// Permisos de envio de datos por POST y JSON
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Configuración de acceso y lectura de las vistas
app.set('views', 'views')
app.set('view engine', 'ejs')

// Carga de página principal -- login-page --
app.use('/', router)

// Carga de home -- home-page --
app.use('/home', router)

// Exportando la app --
module.exports = app
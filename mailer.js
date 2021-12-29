// Importando variables de ambiente
const dotenv = require('dotenv')
dotenv.config()

// Inclusión del módulo de envio de correos outlook
const mailer = require('nodejs-nodemailer-outlook')

exports.mailTo = function(mailInfo, ht){
    return new Promise ((resolve, reject) => {
        let info = mailInfo
        let template = ht
        mailer.sendEmail({
            auth: {
                user: process.env.OEMAIL,
                pass: process.env.OEPASS
            },
            from: process.env.OEMAIL,
            to: info.rec,
            cc: info.rec2,
            cc: info.rec3,
            subject: info.sub,
            html: template,
            replyTo: process.env.OEMAIL,
    
            onError: (e) => {console.log(e); reject()},
            onSuccess: (i) => {console.log(i); resolve()}
        })
    })
}
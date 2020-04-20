// Configurando Nodemailer e criando o transporter
const nodemailer = require('nodemailer');

// Transporter usando um servidor
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ashly32@ethereal.email',
        pass: 'AeZ2rCDPyQ6uaaJgPw'
    }
});

// Transporter usando o serviço Gmail
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'youremail@email.com',
//         pass: 'yourpassword'
//     }
// });

module.exports = transporter;
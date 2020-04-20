const transporter = require('../transporter');

module.exports = (req, res) => {
    const { name, email, message } = req.body;

    // Configuração do email
    const mailOptions = {
        from: email,
        to: 'email@email.com',
        subject: 'Mensagem do nosso site',

        html: `
            <head>
                <meta charset="utf-8">
                <style>
                    section {
                        width: 90%;
                        margin: 0 auto;
                    }
                </style>
            </head>
            <body>
                <section>
                    <h3>Olá, meu nome é ${ name } e gostaria de dizer algo</h3>
                    <p>${ message }</p>
                </section>
            </body>
        `
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.json({ message: "erro na requisição." });
        } else {
            console.log(info.response);
            return res.json({ message: 'E-mail enviado com sucesso!' });
        }
    });
}
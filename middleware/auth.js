const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');

    if(authHeader) {
        //Obtener el Token
        const token = authHeader.split(' ')[1];

        //Comprobar el JWT
        if(token){
            try {
                const usuario = jwt.verify(token, process.env.SECRETA);
                req.usuario = usuario;
            } catch (error) {
                console.log(error);
                console.log('JWT No valido')
            }
        }
    };

    return next();
};
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config()


module.exports={


authenticateJWT:(req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token =  req.headers.authorization

        jwt.verify(token, process.env.SECRETKEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            next();
        });
    } else {
        res.sendStatus(401);
    }
}



}






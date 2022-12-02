const signUpTemplateCopy = require('../models/signupmodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



module.exports = {


    dologin: async (req, res) => {
        let user = await signUpTemplateCopy.findOne({ email: req.body.email })
        if (user) {
            let id = user.id;
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                const token = jwt.sign({ id }, process.env.SECRETKEY, { expiresIn: 36000 })
                return res.status(200).json({ message: "valid Email or Password", token: token, uid: id, declined: false })


            } else {


                return res.send({ message: "invalid Password", declined: true })

            }


        } else {

            return res.send({ message: "invalid user", declined: true })

        }

    },






    dosignup: async (req, res) => {
        

        let usermail = await signUpTemplateCopy.findOne({ email: req.body.email })
        if (!usermail) {
            let userphone = await signUpTemplateCopy.findOne({ phone: req.body.phone })

            if (!userphone) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)



                const signedUpUser = await new signUpTemplateCopy({
                    firstname: req.body.firstname,
                    middlename: req.body.middlename,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: hashedPassword,
                    company: req.body.company,
                    occupation: req.body.occupation,
                    date: req.body.date


                })
                await signedUpUser.save().then((data) => {
                    res.json(data)
                }).catch((err) => {
                    res.json(err)
                })





            } else {
                res.json({ phoneexists: true })

            }

        } else {
            res.json({ userexists: true })

        }



    }












}
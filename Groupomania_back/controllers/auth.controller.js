const UserModel = require('../models/user.model')

module.exports.signUp = async (req, res) => {
    //console.log(req.body)
    const { pseudo, email, password } = req.body //"déstructuré" càd pseudo= req.body.pseudo ; email = req.body.email ; etc...

    try {
        const user = await UserModel.create({ pseudo, email, password })  //Lorsqu'on veut créer un utilisateur, ces trois éléments obligatoires doivent être présents, sinon ça passe au catch en dessous.
        res.status(201).json({ user: user._id })
    }
    catch (err) {
        res.status(200).send({ err })
    }
}
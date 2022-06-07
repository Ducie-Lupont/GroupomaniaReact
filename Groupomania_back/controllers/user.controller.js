const UserModel = require('../models/user.model')
const ObjectID = require('mongoose').Types.ObjectId

//Obtenir les données de tous les utilisateurs
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password')
    res.status(200).json(users)
}

//Obtenir les données d'un seul utilisateur
module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))                               //Si l'id de la requête n'est pas valide, je m'arrête là, et je réponds avec une erreur
        return res.status(400).send('ID unknown : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {                  //Si l'id de la requête est valide je récupère les données de l'utilisateur concerné, sauf le mot de passe, que je dois veiller à ne jamais envoyer dans le front.
        if (!err) res.send(docs)
        else console.log('ID unknown : ' + err)
    }).select('-password')
}
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

//Updater le profil d'un utilisateur
module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs)
                if (err) return res.status(500).send({ message: err })
            }
        )
    } catch (err) {
        return
    }
}

//Supprimer un utilisateur
module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        await UserModel.remove({ _id: req.params.id }).exec()
        res.status(200).json({ message: "Utilisateur Supprimé." })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

//Follow un utilisateur
module.exports.follow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        //add to following list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow } },
            { new: true, upsert: true },
        )
        // add to followers list
        await UserModel.findByIdAndUpdate(
            req.body.idToFollow,
            { $addToSet: { followers: req.params.id } },
            { new: true, upsert: true },
        )
        res.status(201).end()
    } catch (err) {
        return
    }
}

//Unfollow un utilisateur
module.exports.unfollow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToUnfollow))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        //remove from following list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { following: req.body.idToUnfollow } },
            { new: true, upsert: true },
        )
        //remove from followers list
        await UserModel.findByIdAndUpdate(
            req.body.idToUnfollow,
            { $pull: { followers: req.params.id } },
            { new: true, upsert: true },
        )
        res.status(201).end()
    } catch (err) {
        return
    }
}
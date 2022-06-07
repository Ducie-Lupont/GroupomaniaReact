const mongoose = require("mongoose")

mongoose
    .connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PW}@${process.env.DB_NAME}.ijtyhpa.mongodb.net/Groupomania`)
    .then(() => console.log('Connexion to MongoDB: Succes!'))
    .catch((err) => console.log('Connexion to MongoDB: !!Failed!!', err))
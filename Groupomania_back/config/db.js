const mongoose = require("mongoose")

mongoose
    .connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PW}@${process.env.DB_NAME}.ijtyhpa.mongodb.net/Groupomania`)
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.log('La connexion à mongoDB à échoué', err))
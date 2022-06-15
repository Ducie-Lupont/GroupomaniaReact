const UserModel = require('../models/user.model')
const fs = require('fs')
const { promisify } = require('util')
const { uploadErrors } = require('../utils/errors.utils')
const pipeline = promisify(require('stream').pipeline)

module.exports.uploadProfil = async (req, res) => {
    try {
        if (req.file.detectedMimeType !== 'image/jpg' && req.file.detectedMimeType !== 'image/png' && req.file.detectedMimeType !== 'image/jpeg')
            throw Error('invalid file')

        if (req.file.size > 5000000) throw Error('max size')
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(201).json({ errors })
    }

    const filename = req.body.name + '.jpg'

    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${_dirname}/../client/public/uploads/profil/${fileName}`
        )
    )
}
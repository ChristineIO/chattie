const express = require('express')
let database = require('../connections/connect.js')
let userRoutes = express.Router()

userRoutes.route('/api/users').get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection('users').find({}).toArray()
    res.json(data)
})

module.exports = userRoutes;
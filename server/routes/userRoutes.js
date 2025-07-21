const express = require('express')
let database = require('../connections/connect.js')
let userRoutes = express.Router()

// Get Users
userRoutes.route('/api/users').get(async (req, res) => {
    let db = database.getDb();
    let data = await db.collection('users').find({}).toArray()
    res.json(data)
})

// Create User
userRoutes.route('/api/users').post(async (req, res) => {
    let db = database.getDb()
    let userObject = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        createdAt: new Date()
    }
    try {
        let data = await db.collection('users').insertOne(userObject)
        res.json({message: 'success'})
    } catch {
        console.error('failed')
    }
})

module.exports = userRoutes;
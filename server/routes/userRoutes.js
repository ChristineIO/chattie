const express = require('express')
const bcrypt = require('bcrypt')
const saltRounds = 10
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

    let takenUsername = db.collection('users').findOne({ username: req.body.username })
    let takenEmail = db.collection('users').findOne({ email: req.body.email })
    if (req.body.username === takenUsername) {
        res.json({ message: "matching username" })
    } else if (req.body.email === takenEmail) {
        res.json({ message: "matching email" })
    } else {
        let hash = await bcrypt.hash(req.body.password, saltRounds)

        let userObject = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hash,
            bio: req.body.bio,
            createdAt: new Date()
        }

        try {
            let data = await db.collection('users').insertOne(userObject)
            res.json({ message: 'success', data })
        } catch {
            console.error('failed')
        }
    }
})

// Login - Compare request to dB
userRoutes.route('/api/users/login').post(async (req, res) => {
    let db = database.getDb()

    try {
        let data = await db.collection('users').findOne({ email: req.body.email })
        if (data) {
            let compare = await bcrypt.compare(req.body.password, data.password)
            if (compare) {
                console.log(compare)
                res.json({ message: "matching credentials", success: true })
            }
        }
    } catch {
        console.error('failed')
    }
})

module.exports = userRoutes;
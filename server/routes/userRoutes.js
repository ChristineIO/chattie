const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10
const cookieAge = 24 * 60 * 60 * 10

let cookies = require('cookie-parser')

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
            const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "12h" })
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: cookieAge,
                path: "/"
            })
            res.json({ message: "matching credentials", success: true, data, token })

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
                const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "12h" })
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: cookieAge,
                    path: "/"
                })
                res.json({ message: "matching credentials", success: true, token })
            }
        }
    } catch {
        console.error('failed')
    }
})

// Check for token
userRoutes.route('/api/users/auth').get(async (req, res) => {
    let token = req.cookies.token

    try {
        if (token) {
            res.json({ message: "token exists", success: true, token })
        } else {
            res.json({ message: "no token", success: false })
        }
    } catch {
        console.error('failed')
    }
})

module.exports = userRoutes;
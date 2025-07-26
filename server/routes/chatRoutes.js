const express = require('express')

let database = require('../connections/connect.js')
let chatRoutes = express.Router()

// Get Users
chatRoutes.route('/chats/threads').post(async (req, res) => {
    let db = database.getDb()

    let chats = await db.collection("chat_threads").find({ participants: { $all: [req.body.userId, req.body.otherUserId] } }).toArray()
    try {
        if (chats.length > 0) {
            res.json({ message: "exists" })
        }  else {
            let chatObject = {
                participants: [req.body.userId, req.body.otherUserId],
                createdAt: new Date(),
                messages: []
            }
            let data = await db.collection("chat_threads").insertOne(chatObject)
            res.json({ message: "created", success: true, data })
        }
    } catch (error) {
        console.error(error)
    }
})

module.exports = chatRoutes;
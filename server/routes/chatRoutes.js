const express = require('express')
const ObjectId = require('mongodb').ObjectId

let database = require('../connections/connect.js')
let chatRoutes = express.Router()

// Get or Create Threads
chatRoutes.route('/api/chats/threads').post(async (req, res) => {
    let db = database.getDb()

    let chats = await db.collection("chat_threads").find({ participants: { $all: [req.body.userId, req.body.otherUserId] } }).toArray()
    try {
        if (chats.length > 0) {
            res.json({ message: "exists", success: true, data: chats[0] })
        } else {
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

// Get The Threads
chatRoutes.route('/api/chats/threads/:id').get(async (req, res) => {
    let db = database.getDb()
    const query = {
        _id: ObjectId.isValid(req.params.id)
            ? new ObjectId(req.params.id)
            : req.params.id
    };

    let chats = await db.collection("chat_threads").findOne(query)

    try {
        res.json({ chatId: chats._id, chats })
    } catch {
        console.error("failed")
    }
})

// Post to Thread
chatRoutes.route('/api/chats/threads/message/:id').post(async (req, res) => {
    let db = database.getDb()
    const query = { _id: new ObjectId(req.params.id) };


    let chats = await db.collection("chat_threads").findOne(query)
    console.log(req.params.id);

    try {
        if (chats) {
            let messageObject = {
                _id: new ObjectId(),
                content: req.body.content || "hi",
                sender: req.body.sender || "unknown",
                timestamp: new Date(),
                chatId: query._id,
                edited: false,
                deleted: false,
                reactions: [],
                attachments: [],
                replyTo: req.body.replyTo || null,
                reactionsSummary: {
                    like: [],
                    heart: [],
                    laugh: [],
                }
            }
            let data = await db.collection("chat_threads").updateOne({ _id: query._id },
                { $push: { messages: messageObject } })
            if (data.modifiedCount > 0) {
                res.json({ data, chats, success: true })
            } else {
                console.log(query._id);

                res.json({ success: false })
            }
        }
    } catch {
        console.error("failed to post message")
    }
})

module.exports = chatRoutes;
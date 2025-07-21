const express = require("express")
require('dotenv').config()
const { connectToServer } = require('./connect.js')
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const mongo_url = process.env.MONGO_URL
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(mongo_url).then(() => {
    console.log("db connected")
})

app.get('/', (req, res) => {
    res.json({ message: "Welcome to my server!" })
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
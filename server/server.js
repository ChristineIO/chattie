const express = require("express")
require('dotenv').config()
const { connectToServer } = require('./connections/connect.js')
const userRoutes = require('./routes/userRoutes.js')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const chatRoutes = require("./routes/chatRoutes.js")
const mongo_url = process.env.MONGO_URL
const client_url = process.env.CLIENT_URL
const port = process.env.PORT || 5000


const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:5000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}

const app = express()

app.use(cookieParser())

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', userRoutes)
app.use('/', chatRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



mongoose.connect(mongo_url).then(() => {
    console.log("db connected")
})

app.get('/', (req, res) => {
    res.json({ message: "Welcome to my server!" })
})

app.listen(port, () => {
    connectToServer()
    console.log(`Server is up and running on port ${port}`);
});
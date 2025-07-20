const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: "Welcome to my server!" })
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
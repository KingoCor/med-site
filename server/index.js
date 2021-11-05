const express = require("express")
const mongoose = require("mongoose")

const config = require("config")

const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

const articleMethods = require("./routes/article_metdos.routes")

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/article-methods", articleMethods)

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT, () => console.log('Server started on port ', PORT))

    } catch (e) {
        console.log(e)
    }
}

start()

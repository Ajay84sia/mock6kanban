const express = require('express');
const { connection } = require("./db");
const cors = require('cors');
const app = express();
require("dotenv").config()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Basic API Endpoint")
})




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the database server")

    } catch (error) {
        console.log(error)
        console.log("Cann't connected to the database server")
    }

    console.log(`Server is running at port ${process.env.port}`)
})
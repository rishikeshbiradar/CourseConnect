const express = require("express")
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000
require("dotenv").config();
const ConnectToDatabase = require("./db/connect")
app.use(cors());
const Course_Router = require("./routes/course")


app.get("/", (req, res) =>
{
    res.send("Hi I am Rushikesh Biradar")
})


app.use("/api/courses", Course_Router);

const start =async () =>
{
    try {
        ConnectToDatabase(process.env.MONGODB_URL);
        app.listen(PORT, () =>
        {
            console.log(`Server is Started on PORT ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

start()
const express = require("express")
const booksRoutes = require("./routes/books")
// db connection
const mongoose = require("mongoose")



const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())


//dbconnection
const DB_CONNECTION_STRING = "mongodb+srv://db:LupWs0yutoMry8Ft@cluster0.cyszjmp.mongodb.net/abc_full_Stack?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})


//app.use("/books", booksRoutes)
app.use("/api/v1/", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
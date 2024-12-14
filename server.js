const express = require('express')
const app =  express()
const bodyParser = require('body-parser')
const cors = require("cors")
const eventRoutes = require("./routes/eventRoutes");
const authRoutes = require("./routes/authRoutes");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

const PORT = 3000

app.use("/api/events", eventRoutes);

app.use("/api/auth", authRoutes);

app.get("/",(req, res)=>{
    res.send("welcome to Kofi's server")
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost${PORT}`)
})
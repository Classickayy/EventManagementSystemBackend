const {Pool} = require("pg")

const connectionString = "postgresql://kofi:7BTmxdkWx8XWI8g7M2NukgtJ72bCO2KQ@dpg-ctb3i3d6l47c73brpffg-a.oregon-postgres.render.com/event_management_site"
const pool = new Pool({
    connectionString:connectionString,
    ssl:{
        rejectUnauthorized:false
    }
})

pool.connect().then(()=>console.log("Connected to Database")).catch(err=>console.log("Error",err))

module.exports = pool 
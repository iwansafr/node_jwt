import express from "express"
import db from "./config/Database.js"
// import Users from "./migration/create_users_table.js"
import router from "./routes/index.js"

const app = express()

try {
    await db.authenticate()
    console.log("Database Connected ...")
    // await Users.sync()
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use(router)

const port = 3000
app.listen(port, ()=>{
    console.log('server running at port '+port)
})
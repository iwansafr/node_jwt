import express from "express"
import db from "./config/Database.js"
// import Users from "./models/User.js"
import router from "./routes/index.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import Categories from "./models/Category.js"

dotenv.config()

const app = express()

try {
    await db.authenticate()
    console.log("Database Connected ...")
    // await Users.sync()
    // await Categories.sync();
} catch (error) {
    console.log(error)
}

const port = 4000

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))
app.use(cookieParser())
app.use(express.json())
app.use(router)


app.listen(port, ()=>{
    console.log('server running at port '+port)
})
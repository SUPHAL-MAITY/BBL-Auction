import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()




app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    origin:  'http://localhost:5173',
    credentials: true
}))



app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import authRouter from  "./routes/authRoutes.js"
import playerRouter from  "./routes/playerRoutes.js"

app.use("/api/user",authRouter)
app.use("/api/user",playerRouter)



app.get("/",(req,res)=>{
    res.send("Hello world")
})


export { app }
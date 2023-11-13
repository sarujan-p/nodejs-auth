import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/user.js"
import hotelsRoute from "./routes/hotel.js"
import roomsRoute from "./routes/room.js"
import cookieParser from "cookie-parser"
import dbconnect from "./config/db-connection.js"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT}.`)
    dbconnect()
})

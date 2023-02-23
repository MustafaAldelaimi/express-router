const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

// Express Routes

const userRoutes = require("./routes/users")
const fruitsRoutes = require("./routes/fruits")

app.use("/users", userRoutes)
app.use("/fruits", fruitsRoutes)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

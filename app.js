const express = require("express")
const adminMiddleware = require("./middlewares/admin")
const productsRouter = require("./routes/products")

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/productos",  adminMiddleware, productsRouter)

app.listen(PORT, () => console.log("🚀 Server has started"))
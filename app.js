const express = require("express")
const app = express();
const productsRouter = require("./routes/products")
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/productos", productsRouter)

app.listen(PORT, () => console.log("🚀 Server has started"))
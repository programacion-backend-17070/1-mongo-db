const express = require("express")
const mongoose = require("mongoose")
const { schema, hostname, user, password, database, options } = require("./config")
const adminMiddleware = require("./middlewares/admin")
const productsRouter = require("./routes/products")

const app = express();
const PORT = process.env.PORT || 8080

mongoose.connect(`${schema}://${user}:${password}@${hostname}/${database}?${options}`).then(() => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use("/api/productos", adminMiddleware, productsRouter)

  app.listen(PORT, () => console.log("🚀 Server has started"))

}).catch(err => console.log("error with mongo atlas", err))



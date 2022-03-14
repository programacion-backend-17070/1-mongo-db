const express = require("express")
const mongoose = require("mongoose")

const { HOSTNAME, SCHEMA, DATABASE, USER, PASSWORD, OPTIONS } = require("./config")
const adminMiddleware = require("./middlewares/admin")
const productsRouter = require("./routes/products")

const app = express();
const PORT = process.env.PORT || 8080

// conectarse a mongo

// ${SCHEMA}://{HOSTNAME}:${PORT}/${DATABASE} -> LOCAL mongodb://localhost:27017/ecommerce
// ${SCHEMA}://${USER}:${PASSWORD}@${HOSTNAME}/${DATABASE}?${OPTIONS} -> CLOUD
mongoose.connect(`${SCHEMA}://${USER}:${PASSWORD}@${HOSTNAME}/${DATABASE}?${OPTIONS}`).then(() => {
  // middleware del body
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // ruta de productos
  app.use("/api/productos",  adminMiddleware, productsRouter)


  // listen
  app.listen(PORT, () => console.log("🚀 Server has started"))
}).catch((err) => console.log("error on mongo", err))
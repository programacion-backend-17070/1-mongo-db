const mongoose = require("mongoose")

class Product {
  constructor() {
    const schema = new mongoose.Schema({
      nombre: String,
      descripcion: String,
      codigo: String,
      url: String,
      precio: Number,
      stock: Number,
      timestamp: { type: Number, default: Date.now() }
    })

    this.model = mongoose.model("product", schema)
  }

  async getAll() {
    const products = await this.model.find()
    return products
  }

  getById() {

  }

  update() {

  }

  async create(obj) {
    const product = await this.model.create(obj)
    console.log("----------------------------")
    console.log("Mongo: ")
    console.log(JSON.stringify(product, null, 2))
  }

  delete() {

  }
}

module.exports = new Product()
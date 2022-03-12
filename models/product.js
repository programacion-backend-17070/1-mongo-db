const mongoose = require("mongoose")

class Product {
  constructor() {
    schema = new mongoose.Schema({
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

  getAll() {

  }

  getById() {

  }

  update() {

  }

  async create(obj) {
    const product = await this.model.create(obj)
    console.log(JSON.stringify(product, null, 2))
  }

  delete() {

  }
}
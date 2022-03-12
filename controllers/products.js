const productModel = require("../models/product")

module.exports = {
  get: async (req, res) => {
    try {
      const data = await productModel.getAll()
      res.send(data)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  getById: (req, res) => res.send("OK"),
  put: (req, res) => res.send("OK"),
  post: async (req, res) => {
    const { body } = req
    // console.log(JSON.stringify(body, null, 2))
    try {
      await productModel.create(body)
      res.sendStatus(201)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
  delete: (req, res) => res.send("OK")
}
const controller = require("../controllers/products")
const router = require("express").Router()


router.get("", controller.get)
router.get("", controller.getById)
router.post("", controller.post)
router.put("", controller.put)
router.delete("", controller.delete)

module.exports = router
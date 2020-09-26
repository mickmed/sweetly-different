const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

router.get('/products', controllers.getProducts)
router.get('products/:id', controllers.getProduct)
router.get('/products', controllers.createProduct)
router.put('/products/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)

module.exports = router

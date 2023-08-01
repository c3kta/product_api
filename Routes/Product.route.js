const express = require('express');

const router = express.Router();
const ProductController = require('../Controllers/Product.conroller');

// ************************
// Выборка продуктов
// ************************
router.get('/', ProductController.getAllProducts);

router.post('/', ProductController.pushProduct);

router.patch('/', ProductController.updateProduct);


// ************************
// Выборка продуктов по ID
// ************************
router.get('/:id', ProductController.getProductById);

router.delete('/:id', ProductController.deleteProduct);

module.exports = router;
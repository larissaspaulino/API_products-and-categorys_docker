import { Router } from 'express'
import ProductsController from '../controllers/products.controller'

const productsController = new ProductsController()

const router = Router()

router.post('/', productsController.store)
router.get('/', productsController.index)
router.get('/:id', productsController.show)
router.patch('/:id', productsController.update)
router.delete('/:id', productsController.delete)

/* 
router.get('/category/:category_id', productsController.showOneCategory)

*/


export default router
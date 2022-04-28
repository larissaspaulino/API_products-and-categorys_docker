import { Router } from 'express'
import CategoriesController from '../controllers/categories.controller'

const categoriesController = new CategoriesController()

const router = Router()

router.post('', categoriesController.store)
/* 
router.get('/', categoriesController.index)
router.get('/:id', categoriesController.show)
router.patch('/:id', categoriesController.update)
router.delete('/:id', categoriesController.delete)

*/


export default router
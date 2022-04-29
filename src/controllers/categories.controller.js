import createCategoryService from "../services/categories/createCategory.service"
import deleteCategoryService from "../services/categories/deleteCategory.service"
import listCategoriesService from "../services/categories/listCategories.service"
import selectCategoryService from "../services/categories/selectCategory.service"
import updateCategoryService from "../services/categories/updateCategory.service"

export default class CategoriesController {
async store(request, response) {
   
    const { name } = request.body

    try {
        const category = await createCategoryService({ name })
        return response.status(201).json(category)
    } catch (err) {
        return response.status(500).json(err.message)
    }
}
async index(request, response) {
    try {
        const categories = await listCategoriesService()
        return response.status(200).json(categories)
    } catch (err) {
        return response.status(500).json(err.message)
    }
}
async show(request, response) {
    const { id: category_id } = request.params
    
    try {
        const category = await selectCategoryService({ category_id })
        return response.status(200).json(category)

    } catch (err) {
  
        return response.status(500).json(err.message)
        
    }
}
async update(request, response) {
    const { id } = request.params
    const { name } = request.body

    try {
        const category = await updateCategoryService({ category_id: id, name })
        return response.status(200).json({ message: 'Category updated', categoria: category})

    } catch (err) {
        return response.status(500).json(err.message)
        
    }

}
async delete(request, response) {
    const { id: category_id } = request.params

    try {
        await deleteCategoryService({ category_id })
        return response.status(204).json('ok')

    } catch (err) {
        return response.status(500).json(err.message)
        
    }

}
}
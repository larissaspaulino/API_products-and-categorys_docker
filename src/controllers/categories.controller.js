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
        return response.status(400).json({ message: 'It was not possible to create a category. Try again'})
    }
}
async index(request, response) {
    try {
        const categories = await listCategoriesService()
        return response.status(200).json(categories)
    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to list categories. Try again'})
    }
}
async show(request, response) {
    const { id: category_id } = request.params
    
    try {
        const category = await selectCategoryService({ category_id })
        return response.status(200).json(category)

    } catch (err) {
  
        return response.status(400).json({ message: 'It was not possible to find this category. Try again'})
        
    }
}
async update(request, response) {
    const { id } = request.params
    const { name } = request.body

    try {
        const category = await updateCategoryService({ category_id: id, name })
        return response.status(200).json({ message: 'Category updated', category: { name: `${category.name} Atualizado`, ...category }})

    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to update this category. Try again'})
        
    }

}
async delete(request, response) {
    const { id: category_id } = request.params

    try {
        await deleteCategoryService({ category_id })
        return response.status(200).json({ message: 'Category deleted' })

    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to delete this categpry. Try again'})
        
    }

}
}
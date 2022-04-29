import createProductService from "../services/products/createProduct.service"
import listProductsService from "../services/products/listProducts.service"
import selectProductService from "../services/products/selectProduct.service"
import updateProductService from "../services/products/updateProduct.service"
import deleteProductService from "../services/products/deleteProduct.service"
import showOneCategoryProductService from "../services/products/showOneCategoryProduct.service"

export default class ProductsController {
async store(request, response) {
      
    const { name, price, category_id } = request.body

    try {
        const product = await createProductService({ name, price, category_id })
        return response.status(201).json(product)
    } catch (err) {
        return response.status(500).json(err.message)
    }
}
async index(request, response) {
    try {
        const products = await listProductsService()
        return response.status(200).json(products)
    } catch (err) {
        return response.status(500).json(err.message)
    }
}
async show(request, response) {
    const { id } = request.params

    try {
        const product = await selectProductService({ product_id: id  })
        return response.status(200).json({ message: 'Product updated', product: product})

    } catch (err) {
        return response.status(500).json(err.message)
        
    }
}
async update(request, response) {
    const { id } = request.params
    const { name, price, category_id} = request.body
    
    try {
        const product = await updateProductService({ product_id: id, name, price, category_id })
        return response.status(200).json(product)
        
    } catch (err) {
        return response.status(500).json(err.message)
        
    }
}
async delete(request, response) {

    const { id } = request.params
    
    try {
        const product = await deleteProductService({ product_id: id  })
        return response.status(200).json('ok')

    } catch (err) {
        return response.status(500).json(err.message)
        
    }
}
async showOneCategory(request, response) {
    const { id } = request.params
    
    try {
        const product = await showOneCategoryProductService({ category_id: id })
        return response.status(200).json(product)
        
    } catch (err) {
        return response.status(500).json(err.message)
        
    }
}
}
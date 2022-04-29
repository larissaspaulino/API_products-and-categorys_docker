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
        return response.status(201).json({ message: 'Product created', product: { name: product.name, id: product.id, category_id }})
    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to create this product. Try again'})
    }
}
async index(request, response) {
    try {
        const products = await listProductsService()
        return response.status(200).json(products)
    } catch (err) {
        return response.status(400).json(err.message)
    }
}
async show(request, response) {
    const { id } = request.params

    try {
        const product = await selectProductService({ product_id: id  })
        return response.status(200).json({ ...product })

    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to find this product. Try again'})
        
    }
}
async update(request, response) {
    const { id } = request.params
    const { name, price, category_id } = request.body
    
    try {
        const product = await updateProductService({ product_id: id, name, price, category_id } )
        return response.status(200).json({ message: 'Product updated', product: { name: `${product.name} Atualizado`, ...product } })
        
    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to update this product. Try again'})
        
    }
}
async delete(request, response) {

    const { id } = request.params
    
    try {
        const product = await deleteProductService({ product_id: id  })
        return response.status(200).json({ message: 'Product deleted'})

    } catch (err) {
        return response.status(400).json({ message: 'It was not possible to delete this product. Try again'})
        
    }
}
async showOneCategory(request, response) {
    const { category_id } = request.params
    
    try {
        const product = await showOneCategoryProductService({ category_id })
        return response.status(200).json(product)
        
    } catch (err) {
        return response.status(400).json(err.message)
        
    }
}
}
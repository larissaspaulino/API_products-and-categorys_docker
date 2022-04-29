import database from '../../database'

const updateProductService = async ({
  product_id,
  name = '',
  price = '',
  category_id = '' 
}) => {
  try {
    const res = await database.query('SELECT * FROM products WHERE id = $1', [
      product_id,
    ])

    if (!res.rows.length) {
      throw new Error('Not found any course with this id')
    }

    const [product] = res.rows

    name ? (product.name = name) : product.name
    price ? (product.price = price) : product.price
    category_id ? (product.category_id = category_id) : product.category_id

    const updatedProduct = await database.query(
      'UPDATE products SET name = $1, price = $2, category_id = $3 WHERE id = $4 RETURNING *',
      [product.name, product.price, product.category_id, product_id]
    )

    return updatedProduct.rows
  } catch (err) {
    throw new Error(err.message)
  }
}

export default updateProductService

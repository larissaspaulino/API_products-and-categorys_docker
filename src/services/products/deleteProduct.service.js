import database from '../../database'

const deleteProductService = async ({ product_id }) => {
    try {
        const res = await database.query(
            "SELECT * FROM products WHERE id = $1",
            [product_id]
        )

        if (!res.rows.length) {
            throw new Error("Not found any course with this id");
          }

        await database.query(
            "DELETE FROM products WHERE id = $1",
            [product_id]
        )


        
    } catch (err) {
        throw new Error(err.message)
        
    }
}

export default deleteProductService
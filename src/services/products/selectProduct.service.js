import database from '../../database'


const selectProductService = async ({ product_id }) => {
    
    try {
        const res = await database.query(
            "SELECT * FROM products WHERE id = $1",
            [product_id]
        )

        if (!res.rows.length) {
            throw new Error("Not found any course with this id");
          }
        
        return res.rows[0]
    } catch (err) {
        throw new Error(err.message)
        
    }
}

export default selectProductService
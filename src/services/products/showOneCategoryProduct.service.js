import database from "../../database";

const showOneCategoryProductService = async ({ category_id}) => {
    try {
        const res = await database.query(
            "SELECT * FROM products WHERE id = $1",
            [products_id]
        )

        if (!res.rows.length) {
            throw new Error("Not found any course with this id");
          }
        
        return res.rows
    } catch (err) {
        throw new Error(err.message)
    }
}

export default showOneCategoryProductService
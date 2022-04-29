import database from '../../database'

const updateCategoryService = async ({ category_id, name }) => {
    try {
        const res = await database.query(
            "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
            [name, category_id]
        )

        if (!res.rows.length) {
            throw new Error("Not found any course with this id");
          }
        
        return res.rows
    } catch (err) {
        throw new Error(err.message)
        
    }
}

export default updateCategoryService
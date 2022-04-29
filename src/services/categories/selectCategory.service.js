import database from '../../database'


const selectCategoryService = async ({ category_id }) => {

    try {
        const res = await database.query(
            "SELECT * FROM categories WHERE id = $1",
            [category_id]
        )

        if (!res.rows.length) {
            throw new Error("Not found any course with this id");
          }
          
        return { name: res.rows[0].name }
    } catch (err) {
        throw new Error(err.message)
        
    }
}

export default selectCategoryService
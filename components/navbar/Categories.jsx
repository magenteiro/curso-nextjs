export default async function Categories() {
    const categories = await getCategories()
    
    return (
        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
            {
                categories.data.categoryList.map((item, idx) => (
                    <li key={idx} className="text-gray-600 hover:text-gray-900">
                        <a href={"/" + item.url_path}>
                            {item.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

async function getCategories() {
    const query = `query CategoryList($filters: CategoryFilterInput) {
  categoryList(filters: $filters) {
    name
    url_key
    url_path
    path_in_store
  }
}`;
    const variables = {
        "filters": {
            "parent_id": {
                "eq": process.env.ROOT_CATEGORY_ID
            }
        }
    }

    const req = await fetch(process.env.GRAPHQL_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query, variables})
    })
    
    const resp = await req.json()
        .catch((error) => console.log(error))
    
    return resp
    
}
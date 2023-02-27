import fetcher from "../../helpers/fetcher";
import ProductList from "../../components/categoria/ProductList";

export default async function Categoria({params}) {
    const produtos = await getCategProds(params.categoria)
    const detalhesCateg = await getCategData(params.categoria)
    return <>
        <h1 className="text-3xl text-blue-900">{detalhesCateg.name}</h1>
        <h2>{detalhesCateg.meta_description}</h2>
        <ProductList products={produtos} categPath={params.categoria}/>
    </>
}

export async function generateStaticParams() {
    const queryCategorias = `query CategoryList($filters: CategoryFilterInput) {
                              categoryList(filters: $filters) {
                                url_path
                              }
                            }`

    const variaveisCategs = {
        "filters": {
            "parent_id": {
                "eq": process.env.ROOT_CATEGORY_ID
            }
        }
    }
    const categorias = await fetcher(queryCategorias, variaveisCategs, [], 'force-cache', {revalidate: 900})
    return categorias.data.categoryList.map((categ) => ({
        categoria: categ.url_path
    }));
}

export async function getCategProds(categ) {
    
    const categ_uid = await getCategUid(categ)
    const query = `query Products($filter: ProductAttributeFilterInput) {
          products(filter: $filter) {
            items {
              name
              sku
              url_key
              price_range {
                maximum_price {
                  final_price {
                    currency
                    value
                  }
                  regular_price {
                    currency
                    value
                  }
                }
              }
              image {
                disabled
                label
                position
                url
              }
            }
          }
        }`
    const variables = {
        "filter": {
            "category_uid": {
                "eq": categ_uid 
            }
        }
    }
    
    const produtos = await fetcher(query, variables, [], 'force-cache', {revalidate: 900})
    
    return produtos.data.products.items
}


export async function getCategUid(categ_url_key){
    const query = `query Categories($filters: CategoryFilterInput) {
                      categories(filters: $filters) {
                        items {
                          uid
                        }
                      }
                    }`
    
    const variables = {
        "filters": {
            "url_key": {
                "eq": categ_url_key
            }
        }
    }
    
    const uid = await fetcher(query, variables, [], 'force-cache', {revalidate: 900})
    
    return uid.data.categories.items[0].uid
}
export async function getCategData(categ_url_key){
    const query = `query Categories($filters: CategoryFilterInput) {
      categories(filters: $filters) {
        items {
          meta_description
          meta_keywords
          meta_title
          name
        }
      }
    }`
    
    const variables = {
        "filters": {
            "url_key": {
                "eq": categ_url_key
            }
        }
    }
    
    const uid = await fetcher(query, variables, [], 'force-cache', {revalidate: 900})
    
    return uid.data.categories.items[0]
}

export async function generateMetadata({params}){
    const categData = await getCategData(params.categoria)
    return {
        title: categData.meta_title ?? categData.name,
        description: categData.meta_description,
        keywords: categData.meta_keywords
    }
}

import fetcher from "../../../helpers/fetcher";
import Detalhes from "../../../components/produto/detalhes";
import Image from "next/image";

export default async function Produto({params}){
    
    const productData = await getProductData(params.produto)
    
    return <>
      {/*This component uses @tailwindcss/typography
    
      yarn add @tailwindcss/typography
      npm install @tailwindcss/typography
    
      plugins: [require('@tailwindcss/typography')]*/}
        
        <Detalhes productData={productData}/>
    </>
}

async function getProductData(product_url_key){
    
    const query = `query Products($filter: ProductAttributeFilterInput) {
  products(filter: $filter) {
    items {
      canonical_url
      image {
        disabled
        label
        position
        url
      }
      name
      meta_title
      meta_keyword
      meta_description
      media_gallery {
        disabled
        label
        position
        url
      }
      sku
      price_range {
        minimum_price {
          discount {
            amount_off
            percent_off
          }
        }
        maximum_price {
          discount {
            amount_off
            percent_off
          }
        }
      }
      short_description {
        html
      }
      __typename
      price {
        regularPrice {
          amount {
            currency
            value
          }
        }
      }
      uid
      description {
        html
      }
      ... on ConfigurableProduct {
        variants {
          attributes {
            code
            label
            uid
            value_index
          }
        }
      }
    }
  }
}`
    
    const variables = {
        "filter": {
            "url_key": {
                "eq": product_url_key
            }
        }
    }
    
    const prodData = await fetcher(query, variables, [], 'force-cache', {revalidate: 900})
    
    return prodData.data.products.items[0]
}


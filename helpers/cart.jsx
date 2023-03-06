import fetcher from "./fetcher";
import {getCookie, setCookie} from "cookies-next";

export async function addProductsToCart(cartItems, cartId = undefined) {
    // const nextCookies = cookies()
    if (getCookie('cartId') == undefined) {
        const cart = await createEmptyCart()
        setCookie('cartId', cart)
    }
    const query = `mutation AddProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
                      addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
                        cart {
                          email
                          id
                          total_quantity
                          prices {
                            applied_taxes {
                              amount {
                                currency
                                value
                              }
                              label
                            }
                            discounts {
                              amount {
                                currency
                                value
                              }
                              label
                            }
                            grand_total {
                              currency
                              value
                            }
                            
                          }
                          items {
                            product {
                              thumbnail {
                                disabled
                                url
                                label
                                position
                              }
                              name
                              sku
                            }
                          }
                        }
                        user_errors {
                          code
                          message
                        }
                      }
                    }`
    const variables = {
        "cartId": getCookie('cartId'),
        "cartItems": cartItems
    }

    const added = await fetcher(query, variables, [], 'no-cache')
    return added.data.addProductsToCart
}

export async function createEmptyCart() {
    const query = `mutation CreateEmptyCart {
  createEmptyCart
}`

    const cart = await fetcher(query, {}, [], 'no-cache')
    return cart.data.createEmptyCart
}
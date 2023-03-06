//Componente importado de https://tailwindui.com/components/ecommerce/components/product-lists#component-230be426f17b26e949896d17c505e0d3
//Tivemos que instalar o @tailwindcss/aspect-ratio com o comando "npm i @tailwindcss/aspect-ratio" e adicioná-lo ao tailwind.config.js conforme mostrado abaixo
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
  
  export default function ProductList({products}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.sku} href={"/p/" +product.url_key} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.image.url}
                    alt={product.image.label}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900"><small>R$</small> {product.price_range.maximum_price.regular_price.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
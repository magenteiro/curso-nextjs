import HeroHome from "../components/HeroHome"
import ProductList from "../components/ProductList"
import Layout from "../components/layouts/UmaColuna"

export default function Index(){
  return (
    <Layout>
      <HeroHome/>
      <ProductList/>
    </Layout>
  )
}
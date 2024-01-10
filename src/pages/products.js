import Layout from "@/layout/Layout"
import Hero from "@/components/product/Hero"
import ToolBar from "@/components/product/ToolBar"
import List from "@/components/product/List"

const products = () => {
  return (
    <Layout>
        <Hero />
        <div className="container pb-5 mb-2 mb-md-4">
            <ToolBar />
            <List />
        </div>
    </Layout>
  )
}

export default products
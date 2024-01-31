import Layout from "@/layout/Layout";
import Cart from "@/components/home/cart";
const cart = () => {
  return (
    <Layout>
      <div className="container pb-5 mb-2 mb-md-4">
        <Cart />
      </div>
    </Layout>
  );
};

export default cart;

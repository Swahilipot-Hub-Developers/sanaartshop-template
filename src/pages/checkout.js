import Layout from "@/layout/Layout";
import Checkout from "@/components/home/checkout";

const check = () => {
  return (
    <Layout>
      <div className="container pb-5 mb-2 mb-md-4">
        <Checkout />
      </div>
    </Layout>
  );
};

export default check;

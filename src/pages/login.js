import Layout from "@/layout/Layout";
import Auth from "@/layout/Authentication";
import Login from "@/components/home/login";

const login = () => {
  return (
    <Layout>
      <div className="container pb-5 mb-2 mb-md-4">
        <Login />
      </div>
    </Layout>
  );
};

export default login;

import Profile from "@/components/home/profile";
import Layout from "@/layout/Layout";
const profileView = () => {
  return (
    <Layout>
      <div className="container pb-5 mb-2 mb-md-4">
        <Profile />
      </div>
    </Layout>
  );
};

export default profileView;

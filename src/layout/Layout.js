//import Authentication from "./Authentication";
import Header from "./Header";
import Toolbar from "./Toolbar";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/*<Authentication />*/}
      <Header />
      <main className="page-wrapper">{children}</main>
      <Footer />
      <Toolbar />
      <BackToTop />
    </>
  );
};

export default Layout;

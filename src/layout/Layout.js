import Authentication from "./Authentication";
import Header from "./Header";
import Toolbar from "./Toolbar";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <body className="handheld-toolbar-enabled">
      <Authentication />
      <main className="page-wrapper">
        <Header />
        {children}
        <Footer />
        <Toolbar />
        <BackToTop />
      </main>
    </body>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="min-h-screen  px-4 py-6 bgColor">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
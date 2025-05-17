import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
  return (
    <div className="flex justify-center py-4 lg:py-8 items-center bgColor">
      <div className="container max-w-screen min-w-md mx-auto px-4 shadow-lg">
        <div className="sticky top-0 z-50 bgColor">
          <Header />
        </div>
        <main className="min-h-screen px-4 py-6 mt-20">
          {/* <div className="flex justify-center py-4 lg:py-8 items-center bgColor shadow-md"> */}
          {/* <div className="container max-w-7xl mx-auto px-4 "> */}
          <Outlet />
          {/* </div> */}
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
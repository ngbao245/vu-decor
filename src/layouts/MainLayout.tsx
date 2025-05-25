import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import clsx from "clsx";

const MainLayout = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="relative container w-screen max-w-8xl min-w-[300px] shadow-lg bgColor">
        <div
          className={clsx(
            "absolute w-full top-0 z-50 transition-all duration-1000 ease-in-out",
            isSticky ? "sticky bg-white shadow-md" : "bg-transparent"
          )}
        >
          <Header isSticky={isSticky} />
        </div>

        <main className="min-h-screen ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

import logoImage from "../../assets/logoImage.png";
import asm from "../../assets/asm.png";
import asmLight from "../../assets/asm-light.png";
import { Link, useNavigate } from "react-router-dom";
import { RxTextAlignJustify } from "react-icons/rx";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Dự Án", href: "/projects" },
  { label: "Thiết Kế", href: "/styles" },
  { label: "Dịch Vụ", href: "/services" },
  // { label: "Bài Viết", href: "/news" },
  { label: "Về Chúng Tôi", href: "/ourStory" },
  { label: "Liên Hệ", href: "/contact" },
];

interface HeaderProps {
  isSticky: boolean;
}

const Header = ({ isSticky }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (
    path: string,
    shouldToggleMenu: boolean = false
  ) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (shouldToggleMenu) {
      toggleMenu();
    }
  };

  const getStart = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header
      className={clsx(
        "w-full grid grid-cols-2 lg:grid-cols-4 px-4 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-1000",
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className="w-full h-16 col-span-1 cursor-pointer"
        onClick={() => handleNavigation("/#")}
      >
        <div className="h-full flex items-center">
          <img
            src={logoImage}
            className="aspect-square h-[50px] md:h-[75px] md:ml-3 py-3 object-contain transition-all duration-300"
            alt="Layers logo"
          />
          <img
            src={isSticky ? asm : asmLight}
            className="h-[40px] md:h-[50px] sm:h-[30px] py-3 object-contain ml-[-20px] transition-all duration-300"
            alt="Layers logo"
          />
        </div>
      </div>
      <div className="lg:flex lg:col-span-2 h-full  justify-center items-center hidden">
        <nav className="flex gap-10 px-3 h-full font-medium items-center ">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavigation(link.href, false)}
                className={`relative group transition-colors duration-300 ${
                  isSticky
                    ? "text-navbar text-[#2f2f2f]"
                    : "text-[#F5F5F3] text-navbar"
                } hover:text-primary`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4">
        <div
          className={`relative ${
            isSticky ? "text-[#2f2f2f]" : "text-[#F5F5F3]"
          }`}
        >
          <button
            onClick={getStart}
            className={`hidden md:flex items-center group active:scale-90 transition-transform ${
              isSticky ? "text-[#2f2f2f]" : "text-[#F5F5F3]"
            }`}
          >
            <span className="relative overflow-hidden pr-3 border-r-2 border-current">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0 absolute top-0 left-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
            <span className="pl-3 font-light text-lg tracking-[0.2em] relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]">
                LIÊN HỆ
              </span>
              <span className="absolute top-0 left-3 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0">
                TƯ VẤN
              </span>
            </span>
          </button>
        </div>
        <RxTextAlignJustify
          onClick={toggleMenu}
          size={25}
          className={`feather feather-menu md:hidden ${
            isSticky ? "text-[#2f2f2f]" : "text-[#F5F5F3]"
          }`}
          // style={{ marginRight: '20px' }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 transition-opacity duration-300"
          onClick={toggleMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
          }}
        />

        {/* Menu content */}
        <div
          className={`fixed right-0 top-0 h-[100vh] w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ position: "fixed" }}
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-4 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavigation(link.href, true)}
                  className={`block py-3 px-4 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:translate-x-2 hover:text-primary active:scale-95 border-l-4 border-transparent hover:border-primary text-gray-700`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

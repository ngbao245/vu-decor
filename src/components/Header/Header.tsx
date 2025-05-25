import logoImage from "../../assets/logoImage.png";
import asm from "../../assets/asm.png";
import asmLight from "../../assets/asm-light.png";
import { Link, useNavigate } from "react-router-dom";
import { RxTextAlignJustify } from "react-icons/rx";
import { MessageSquare, Send } from "lucide-react";
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

  const getContact = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const getContactMobile = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form-mobile");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header
      className={clsx(
        "select-none w-full grid grid-cols-2 md:grid-cols-12 px-4 items-center sticky top-0 left-0 right-0 z-50 transition-all duration-1000",
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className="w-full h-16 col-span-1 md:col-span-2 cursor-pointer"
        onClick={() => handleNavigation("/#")}
      >
        <div className="h-full flex items-center">
          <img
            src={logoImage}
            className="aspect-square h-[50px] md:h-[60px] lg:h-[75px] md:ml-3 py-3 object-contain transition-all duration-300"
            alt="Layers logo"
          />
          <img
            src={isSticky ? asm : asmLight}
            className="h-[40px] md:h-[45px] lg:h-[50px] sm:h-[30px] py-3 object-contain ml-[-20px] transition-all duration-300"
            alt="Layers logo"
          />
        </div>
      </div>
      <div className="md:flex md:col-span-8 h-full justify-center items-center hidden">
        <nav className="flex gap-3 md:gap-6 lg:gap-12 xl:gap-16 px-2 md:px-3 h-full font-medium items-center">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => handleNavigation(link.href, false)}
                className={`relative group transition-colors duration-300 text-sm md:text-[12px] lg:text-[14px] xl:text-base ${
                  isSticky
                    ? "text-navbar text-[#2f2f2f]"
                    : "text-[#F5F5F3] text-navbar"
                } hover:text-primary whitespace-nowrap`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4 col-span-1 md:col-span-2">
        <div
          className={`relative ${
            isSticky ? "text-[#2f2f2f]" : "text-[#F5F5F3]"
          }`}
        >
          <button
            onClick={getContact}
            className={`hidden md:flex items-center group active:scale-90 transition-transform ${
              isSticky ? "text-[#2f2f2f]" : "text-[#F5F5F3]"
            }`}
          >
            <span className="relative overflow-hidden pr-2 md:pr-3 border-r-2 border-current">
              <Send
                className="h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]"
                strokeWidth={1.5}
              />
              <MessageSquare
                className="h-5 w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0 absolute top-0 left-0"
                strokeWidth={1.5}
              />
            </span>
            <span className="pl-2 md:pl-3 font-light text-sm md:text-sm lg:text-lg tracking-[0.2em] relative overflow-hidden">
              <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]">
                LIÊN HỆ
              </span>
              <span className="absolute top-0 left-2 md:left-3 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0">
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
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-semibold text-[#D6B26D]">
                Vu Decor
              </h3>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
              >
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-[#D6B26D] transition-colors"
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
            <nav className=" px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavigation(link.href, true)}
                  className="block py-3 px-4 mb-2 rounded-lg transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#D6B26D]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-between">
                    <span className="text-[#2f2f2f] group-hover:text-[#D6B26D] transition-colors">
                      {link.label}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-[#D6B26D] transform group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Contact button */}
            <div className="p-10 border-t">
              <button
                onClick={getContactMobile}
                className="group relative inline-flex items-center justify-center w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#404040] via-[#1a1a1a] to-[#404040] px-6 py-4 font-medium tracking-[0.2em] text-white transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-lg"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-96"></span>
                <div className="flex items-center gap-3">
                  <span className="relative overflow-hidden pr-3 border-r border-white/30">
                    <Send
                      className="h-6 w-6 transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]"
                      strokeWidth={1.5}
                    />
                    <MessageSquare
                      className="h-6 w-6 absolute top-0 left-0 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="relative overflow-hidden">
                    <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]">
                      LIÊN HỆ
                    </span>
                    <span className="absolute top-0 left-0 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0">
                      TƯ VẤN
                    </span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

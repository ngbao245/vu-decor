import Button from "../Button/Button";
import logoImage from "../../assets/logoImage.png";
import asm from "../../assets/asm.png";
import { Link } from "react-router-dom";
import { RxTextAlignJustify } from "react-icons/rx";
import { useState } from "react";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Dự Án", href: "/projects" },
  { label: "Thiết kế", href: "/styles" },
  { label: "Bài Viết", href: "/news" },
  { label: "Về Chúng Tôi", href: "/ourStory" },
  { label: "Liên Hệ", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);




  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <header
      className="w-full grid grid-cols-2 lg:grid-cols-4 px-4 items-center transition-all duration-300 ease-in-out"
      // className={clsx(
      //   'w-full grid grid-cols-2 lg:grid-cols-4 px-4 transition-all duration-300',
      //   isSticky
      //     ? 'sticky top-0 bg-white shadow-md'
      //     : 'bg-transparent'
      // )}

    >
      <div className="w-full h-16 col-span-1">
        <div className="h-full flex items-center">
          <img
            src={logoImage}
            className="aspect-square h-[50px] md:h-[75px] md:ml-3 py-3 object-contain"
            alt="Layers logo"
          />
          <img
            src={asm}
            className="h-[40px] md:h-[50px] sm:h-[30px] py-3 object-contain ml-[-20px]"
            alt="Layers logo"
          />
        </div>
      </div>
      <div className="lg:flex lg:col-span-2 h-full  justify-center items-center hidden ">
        <nav className="flex gap-10 px-3 h-full font-medium items-center ">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.label}
                to={link.href}
                className="text-navbar relative group hover:text-primary transition-colors duration-300"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4">
        <div className="flex ">
          <Button
            variant="primary"
            className="hidden md:inline-flex items-center"
          >
            Get Start
          </Button>
        </div>
        <RxTextAlignJustify
          onClick={toggleMenu}
          size={25}
          className="feather feather-menu md:hidden"
        // style={{ marginRight: '20px' }}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMenu}
        />

        {/* Menu content */}
        <div
          className={`fixed right-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
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
                  onClick={toggleMenu}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:translate-x-2 hover:text-primary active:scale-95 border-l-4 border-transparent hover:border-primary"
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
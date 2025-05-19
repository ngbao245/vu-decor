import Button from "../Button/Button";
import logoImage from "../../assets/logoImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import vudecorLogo from "../../images/vudecor.svg";

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
    console.log("toggleMenu: ", isOpen);
  };

  return (
    // v2
    <header
      className="w-full grid grid-cols-2 lg:grid-cols-4 border py-2 md:px-6 items-center"
      // style={{ padding: "0 20px" }}
    >
      <div className="w-16 h-16 grid-span-1 ml-5">
        <div className="h-full flex items-center justify-center">
          <img
            src={logoImage}
            className=""
            width={50}
            height={50}
            alt="Layers logo"
          />
        </div>
      </div>
      <div className="lg:flex lg:col-span-2 h-full  justify-center items-center hidden bg-red-400">
        <nav className="flex gap-10 px-3 h-full font-medium items-center ">
          {navLinks.map((link) => {
            return (
              <Link key={link.label} to={link.href} className="text-navbar">
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu mr-2 md:hidden"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>

        <div className="mr-5">
          <Button
            variant="primary"
            className="hidden md:inline-flex items-center"
          >
            Get Start
          </Button>
        </div>
      </div>
    </header>

    // v3
    // <header className="container relative mx-auto p-6">
    //   <div className="flex items-center justify-between space-x-20 my-6 border-4 border-yellow-900">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //       <img
    //         src={logoImage}
    //         className="h-14 w-14 object-contain bg-white rounded-md"
    //         alt="Layers logo"
    //       />
    //       <img
    //         src={vudecorLogo}
    //         alt="VuDecor Logo"
    //         className="h-5 w-auto sm:h-6 md:h-7 lg:h-8 ml-2"
    //       />
    //     </div>

    //     {/* menu item */}
    //     <div className="hidden items-center uppercase md:flex border-4 border-green-900">
    //       {/* Desktop Nav */}
    //       <nav className="flex gap-6 font-medium items-center">
    //         {navLinks.map((link) => (
    //           <Link
    //             key={link.label}
    //             to={link.href}
    //             className="text-navbar hover:text-primary transition"
    //           >
    //             {link.label}
    //           </Link>
    //         ))}
    //       </nav>
    //       {/* <Button
    //         variant="primary"
    //         className="hidden md:inline-flex items-center"
    //       >
    //         Get Start
    //       </Button> */}
    //     </div>
    //   </div>

    //   {/* Mobile Menu Icon */}
    //   <div className="flex justify-end lg:hidden">
    //     <button
    //       onClick={toggleMenu}
    //       type="button"
    //       className="p-2 rounded-md hover:bg-white/10"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="28"
    //         height="28"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         className="feather feather-menu"
    //       >
    //         <line x1="3" y1="12" x2="21" y2="12" />
    //         <line x1="3" y1="6" x2="21" y2="6" />
    //         <line x1="3" y1="18" x2="21" y2="18" />
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Mobile menu */}
    //   {isOpen && (
    //     <div className="container mx-auto lg:hidden px-4 sm:px-6 lg:px-10 py-4 border-t border-white/10">
    //       {navLinks.map((link) => (
    //         <Link
    //           key={link.label}
    //           to={link.href}
    //           className="block py-2 text-navbar hover:text-primary transition"
    //         >
    //           {link.label}
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </header>
  );
};

export default Header;

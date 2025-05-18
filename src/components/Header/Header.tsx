import Button from '../Button/Button';
import logoImage from '../../assets/logoImage.png';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Dự Án", href: "/projects" },
  { label: "Thiết kế", href: "/styles" },
  { label: "Bài Viết", href: "/news" },
  { label: "Về Chúng Tôi", href: "/ourStory" },
  { label: "Liên Hệ", href: "/contact" },
];

const Header = () => {
  return (
    <header className="w-full border-b border-white/15 py-2 bg-white/5 backdrop-blur">
      <div className="grid grid-cols-[auto_1fr] items-center px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoImage}
            className="h-14 w-auto object-contain bg-white rounded-md"
            alt="Layers logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-end items-center gap-8">
          <nav className="flex gap-6 font-medium items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-navbar hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button variant="primary" className="hidden md:inline-flex items-center">
            Get Start
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex justify-end lg:hidden">
          <button type="button" className="p-2 rounded-md hover:bg-white/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

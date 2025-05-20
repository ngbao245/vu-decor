import {
  FaFacebook,
  // FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logoImage.png";
import asm from "../../assets/asm-light.png";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Dự Án", href: "/projects" },
  { label: "Thiết kế", href: "/styles" },
  { label: "Bài Viết", href: "/news" },
  { label: "Về Chúng Tôi", href: "/ourStory" },
  { label: "Liên Hệ", href: "/contact" },
  { label: "Quản trị", href: "/admin-login" },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/vudecor24",
    label: "Facebook",
  },
  // { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: FaYoutube, href: "https://youtube.com/", label: "Youtube" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/vudecor",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sloganRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sloganRef.current) {
      const rect = sloganRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 px-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center">
                <img
                  src={logoImage}
                  className="aspect-square h-[40px] md:h-[50px] object-contain"
                  alt="VuDecor logo"
                />
                <img
                  src={asm}
                  className="h-[30px] md:h-[40px] object-contain ml-[-15px]"
                  alt="ASM logo"
                />
              </div>
              <div
                ref={sloganRef}
                className="relative py-2 group"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              >
                <p className="text-white text-lg font-light tracking-wide relative hidden 2xl:block cursor-default select-none">
                  <span
                    className="font-medium bg-gradient-to-l from-blue-400 via-blue-400 to-transparent bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                    style={{
                      backgroundImage: `linear-gradient(to left, 
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(
                                1,
                                Math.max(0.3, (300 - mousePosition.x) / 150)
                              )
                        }) 0%,
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(
                                1,
                                Math.max(0.3, (300 - mousePosition.x) / 200)
                              )
                        }) 50%,
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(
                                1,
                                Math.max(0.3, (300 - mousePosition.x) / 250)
                              )
                        }) 100%)`,
                    }}
                  >
                    Đa phong cách
                  </span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span
                    className="font-medium bg-gradient-to-r from-blue-400 via-blue-400 to-transparent bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                    style={{
                      backgroundImage: `linear-gradient(to right, 
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(1, Math.max(0.3, mousePosition.x / 150))
                        }) 0%,
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(1, Math.max(0.3, mousePosition.x / 200))
                        }) 50%,
                        rgba(96, 165, 250, ${
                          mousePosition.x === 0
                            ? 0.3
                            : Math.min(1, Math.max(0.3, mousePosition.x / 250))
                        }) 100%)`,
                    }}
                  >
                    trọn không gian
                  </span>
                </p>
                <div
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, 
                      transparent 0%,
                      rgba(96, 165, 250, 0.5) 50%,
                      transparent 100%)`,
                  }}
                ></div>
              </div>
            </div>
            <p className="text-gray-400 text-justify">
              Chúng tôi là Vu Decor, chuyên cung cấp các giải pháp thiết kế và
              thi công nội thất chuyên nghiệp.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4 grid grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.label} className="group">
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 block relative before:content-['→'] before:absolute before:-left-6 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 hover:translate-x-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MdLocationOn size={20} />
                <span className="text-gray-400">
                  Vinhomes Grand Park, đường
                  <br /> Nguyễn Xiển, Phường Long
                  <br /> Thạnh Mỹ, Thủ Đức, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone size={20} />
                <span className="text-gray-400">0965 99 4178</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail size={20} />
                {/* <span className="text-gray-400">vudecor24@gmail.com</span> */}
                <span className="text-gray-400">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vudecor24@gmail.com" target="_blank">
                    vudecor24@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold relative inline-block">
              Contact advice
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for design inspiration and updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <MdSend size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="h-0.5 border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} VuDecor. Giữ bản quyển website này.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

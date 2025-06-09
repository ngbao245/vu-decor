import { SiZalo, SiFacebook, SiGmail } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
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
  // { label: "Quản trị", href: "/admin-login" },
];

const socialLinks = [
  {
    icon: SiFacebook,
    href: "https://www.facebook.com/vudecor24",
    label: "Facebook",
  },
  // { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
  // { icon: SiInstagram, href: "https://instagram.com/", label: "Instagram" },
  // { icon: SiYoutube, href: "https://youtube.com/", label: "Youtube" },
  // {
  //   icon: SiLinkedin,
  //   href: "https://linkedin.com/company/vudecor",
  //   label: "LinkedIn",
  // },
  {
    icon: SiZalo,
    href: "https://zalo.me/0965994178",
    label: "Zalo",
  },
];

const Footer = () => {
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

  return (
    <footer className="w-full h-max bg-[#2f2f2f] text-white text-justify">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 px-8 pt-12">
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
                    className="font-medium bg-gradient-to-l from-red-400 via-red-400 to-transparent bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                    style={{
                      backgroundImage: `linear-gradient(to left, 
                        rgba(96, 165, 250, ${mousePosition.x === 0
                          ? 0.3
                          : Math.min(
                            1,
                            Math.max(0.3, (300 - mousePosition.x) / 150)
                          )
                        }) 0%,
                        rgba(96, 165, 250, ${mousePosition.x === 0
                          ? 0.3
                          : Math.min(
                            1,
                            Math.max(0.3, (300 - mousePosition.x) / 200)
                          )
                        }) 50%,
                        rgba(96, 165, 250, ${mousePosition.x === 0
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
                    className="font-medium bg-gradient-to-r from-red-400 via-red-400 to-transparent bg-clip-text text-transparent transition-all duration-500 ease-in-out"
                    style={{
                      backgroundImage: `linear-gradient(to right, 
                        rgba(96, 165, 250, ${mousePosition.x === 0
                          ? 0.3
                          : Math.min(1, Math.max(0.3, mousePosition.x / 150))
                        }) 0%,
                        rgba(96, 165, 250, ${mousePosition.x === 0
                          ? 0.3
                          : Math.min(1, Math.max(0.3, mousePosition.x / 200))
                        }) 50%,
                        rgba(96, 165, 250, ${mousePosition.x === 0
                          ? 0.3
                          : Math.min(1, Math.max(0.3, mousePosition.x / 250))
                        }) 100%)`,
                    }}
                  >
                    trọn không gian
                  </span>
                </p>
                <div
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, 
                      transparent 0%,
                      rgba(96, 165, 250, 0.5) 50%,
                      transparent 100%)`,
                  }}
                ></div>
              </div>
            </div>
            <p className="text-gray-400">
              Chúng tôi là Vu Decor, chuyên cung cấp các giải pháp thiết kế và
              thi công nội thất chuyên nghiệp.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="hover:text-[#0068ff] transition-colors"
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
              Trang chủ
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#E34225] rounded-full"></span>
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
              Liên hệ
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#E34225] rounded-full"></span>
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
                <span className="text-gray-400">0965 994 178</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail size={20} />
                {/* <span className="text-gray-400">vudecor24@gmail.com</span> */}
                <span className="text-gray-400">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vudecor24@gmail.com&su=Hỗ%20Trợ%20Tư%20Vấn"
                    target="_blank"
                  >
                    vudecor24@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold relative inline-block">
              Hỗ trợ tư vấn
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#E34225] rounded-full"></span>
            </h4>
            <div className="space-y-3">
              <a
                href="https://zalo.me/0965994178"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-[#0068ff] hover:bg-[#0052cc] rounded-lg transition-colors duration-200"
              >
                <SiZalo className="mr-2" size={24} />
                Chat với chúng tôi qua Zalo
              </a>
              <a
                href="tel:0965994178"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-[#E34225] hover:bg-[#c93a20] rounded-lg transition-colors duration-200"
              >
                <MdPhone className="mr-2" size={24} />
                Gọi ngay: 0965 994 178
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vudecor24@gmail.com&su=Hỗ%20Trợ%20Tư%20Vấn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-[#EA4335] bg-white hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors duration-200"
              >
                <SiGmail className="mr-2" size={24} />
                Gửi email cho chúng tôi
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="h-full border-t flex justify-center  bg-[#1f1f1f]  mt-6 py-5 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} VuDecor. Giữ bản quyển website này.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

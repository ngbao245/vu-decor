
import Button from '../Button/Button'
import logoImage from '../../assets/logoImage.png'
import { Link } from 'react-router-dom';
import { RxTextAlignJustify } from "react-icons/rx";


const navLinks = [
  { label: "Trang Chủ", href: "#" },
  { label: "Dự Án", href: "" },
  { label: "Thiết kế", href: "#integrations" },
  { label: "Bài Viết", href: "#integrations" },
  { label: "Về Chúng Tôi", href: "#faqs" },
  { label: "Liên Hệ", href: "#faqs" },
];

const Header = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 px-4  items-center">
      <div className='w-full h-16 col-span-1'>
        <div className='h-full flex items-center'
          // style={{ marginLeft: '20px' }}
        >
          <img
            src={logoImage}
            className="aspect-square h-[40px]  lg:h-[55px] ml-4 py-3  object-contain bg-white rounded-sm border"
            alt="Layers logo"
          />
        </div>
      </div>
      <div className="lg:flex lg:col-span-2 h-full  justify-center items-center hidden ">
        <nav className="flex gap-10 px-3 h-full font-medium items-center ">
          {navLinks.map((link) => {
            return (<Link
              key={link.label}
              to={link.href}
              className="text-navbar"
            >
              {link.label}
            </Link>)
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4">
        <div className='flex '
        >
          <Button variant="primary" className="hidden md:inline-flex items-center">Get Start</Button>
        </div>
        <RxTextAlignJustify
          size={25}
          className='feather feather-menu md:hidden'
          // style={{ marginRight: '20px' }}
        />
      </div>
    </div>
  )
}

export default Header

import Button from '../Button/Button'
import logoImage from '../../assets/logoImage.png'


const navLinks = [
  { label: "Trang Chủ", href: "#" },
  { label: "Dự Án", href: "" },
  { label: "Thiết kế", href: "#integrations" },
  { label: "Về Chung Tôi", href: "#faqs" },
  { label: "Liên Hệ", href: "#faqs" },
];

const Header = () => {
  return (

    <div className="w-full grid grid-cols-2 lg:grid-cols-4 border border-white/15  py-2 px-4 md:pr-2 items-center">
      <div className='w-16 h-16 flex justify-between items-center  '>
        <img
          src={logoImage}
          className="w-auto h-14 py-3 md:h-auto object-contain bg-white rounded-md"
          width={50} height={50}
          alt="Layers logo"
        />
      </div>
      <div className="lg:flex lg:col-span-2 h-full  justify-center items-center hidden ">
        <nav className="flex gap-10 px-3 h-full font-medium items-center ">
          {navLinks.map((link) => {
            return (<a
              key={link.label}
              href={link.href}
              className="text-navbar"
            >
              {link.label}
            </a>)
          })}
        </nav>
      </div>
      <div className="flex justify-end gap-4">
        <svg xmlns="http://www.w3.org/2000/svg"
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

        <Button variant="primary" className="hidden md:inline-flex items-center">Get Start</Button>
      </div>
    </div>
  )
}

export default Header
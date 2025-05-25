import HeroPage from "../../components/Hero/HeroPage";
import { useState, useRef, useEffect } from "react";

interface DesignStyle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
}

const designStyles: DesignStyle[] = [
  {
    id: "modern",
    title: "Phong cách thiết kế hiện đại",
    description:
      "Phong cách thiết kế nội thất hiện đại (Modern Style) được xem là một trong những xu hướng được ưa chuộng. Phong cách này gồm những đường thẳng và tập trung vào công năng, hạn chế những phụ kiện cầu kỳ quá mức. Khuôn mẫu tạo dựng phong cách này chính là sự chính xác, không có những hậu cảnh phức tạp, không có sự kết hợp màu sắc cầu kì, khối hình học cơ bản được sử dụng đó là vuông, chữ nhật, tròn với bề mặt sắc nét.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAlt: "Modern living room interior",
    imageCaption:
      "Thiết kế phòng khách hiện đại với tông màu trung tính, đường nét đơn giản và ánh sáng tự nhiên",
  },
  {
    id: "minimalist",
    title: "Phong cách thiết kế tối giản",
    description:
      "Phong cách Minimalism nghĩa là sử dụng những đường nét đơn giản, thật ít chi tiết, giảm thiểu đồ nội thất, mọi chi tiết đều có lý trong vị trí của mình. Việc trang trí nội thất theo phong cách Minimalism hướng sự chú ý đến những đường nét và kết cấu được ẩn giấu bên dưới. Các mảng tường, sàn và hiệu quả ánh sáng trên các mặt phẳng này chính là những yếu tố quan trọng làm nên phong cách tối giản.",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    imageAlt: "Minimalist living room interior",
    imageCaption:
      "Không gian sống tối giản với nội thất tinh tế và bố cục hợp lý",
  },
  {
    id: "scandinavian",
    title: "Phong cách thiết kế Bắc Âu",
    description:
      "Phong cách Scandinavian có thể tóm gọn trong 3 từ: Chức năng – Đơn giản – Đẹp. Mặc dù đơn giản trong thiết kế, nhưng các đường nét thường được kết hợp với sự sang trọng kín đáo và ấm áp, đã tạo nên một cảm giác rất giản dị. Phong cách này đặc biệt phù hợp với những căn hộ nhỏ cần tạo không gian thoáng đạt.",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    imageAlt: "Scandinavian style interior",
    imageCaption:
      "Thiết kế nội thất Bắc Âu với gam màu trắng chủ đạo và các chi tiết gỗ tự nhiên",
  },
  {
    id: "indochine",
    title: "Phong cách thiết kế Đông Dương",
    description:
      "Indochine là phong cách nhiệt đới hóa phong cách Pháp bằng những bản sắc văn hóa bản địa, khí hậu, họa tiết hoa văn địa phương, nghệ thuật trang trí tinh xảo. Nội thất phong cách Đông Dương, ngoài vấn đề thẩm mỹ, còn đáp ứng và phù hợp với tập quán sinh hoạt và khí hậu nhiệt đới, nóng ẩm ở Việt Nam.",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    imageAlt: "Indochine style interior",
    imageCaption:
      "Không gian Đông Dương với sự kết hợp giữa phong cách Pháp và văn hóa bản địa",
  },
  {
    id: "neoclassic",
    title: "Phong cách thiết kế Tân Cổ Điển",
    description:
      "Phong cách thiết kế tân cổ điển chính là sự kết hợp hài hòa giữa cổ điển và hiện đại. Phong cách này chú trọng đến chi tiết trang trí cầu kỳ, những đường cong mềm mại, kết hợp với những đường phào chỉ của tường và trần nhà. Phong cách thiết kế Tân cổ điển rất được ưa chuộng bởi sự sang trọng, thời thượng của nó.",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    imageAlt: "Neoclassic style interior",
    imageCaption:
      "Thiết kế tân cổ điển với các chi tiết trang trí cầu kỳ và sang trọng",
  },
  {
    id: "rustic",
    title: "Phong cách thiết kế Rustic",
    description:
      "Rustic là phong cách thiết kế nội thất tươi mới, mộc mạc, giản dị, tập trung nhấn mạnh vào vẻ đẹp tự nhiên. Yếu tố chính cho một không gian mang phong cách rustic hiện đại là sự kết hợp của những đồ dùng hiện đại, những yếu tố kiến trúc bảo vệ thiên nhiên, gam màu đơn giản với những chiếc cửa sổ lớn mang theo ánh sáng thiên nhiên.",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    imageAlt: "Rustic style interior",
    imageCaption:
      "Không gian Rustic với các yếu tố tự nhiên và mộc mạc",
  },
  {
    id: "colorblock",
    title: "Phong cách thiết kế Color Block",
    description:
      "Color block trong nội thất chịu ảnh hưởng trực tiếp của xu hướng thời trang Color block. Đặc điểm của không gian nội thất theo xu hướng Color block là các khối hình họa nhiều màu sắc từ những gam màu tương phản. Phong cách này đặc biệt phù hợp với những người đam mê sự sáng tạo, cá tính và năng động.",
    imageUrl: "https://images.unsplash.com/photo-1532372576444-dda954194ad0",
    imageAlt: "Color block style interior",
    imageCaption:
      "Thiết kế Color Block với các khối màu tương phản tạo điểm nhấn",
  },
  {
    id: "tropical",
    title: "Phong cách thiết kế Tropical",
    description:
      "Phong cách tropical trong thiết kế nội thất là phong cách được nhiều người yêu thích bởi nó kết nối con người gần gũi với thiên nhiên. Cách bài trí đồ nội thất hài hòa luôn mang đến cảm giác hiện đại xen lẫn với yếu tố tự nhiên, mang đến sự yên bình cho chủ nhân ngôi nhà.",
    imageUrl: "https://images.unsplash.com/photo-1617104611622-d5f245d317f0",
    imageAlt: "Tropical style interior",
    imageCaption:
      "Không gian Tropical với các yếu tố nhiệt đới và tự nhiên",
  },
];

const heroContent = {
  page: "Phong Cách Thiết Kế",
  title:
    "VuDecor là công ty thiết kế nội thất chuyên tạo ra những không gian thanh lịch và tiện dụng, phản ánh tính cách và phong cách độc đáo của mỗi khách hàng.",
  image:
    "https://www.sustainablejungle.com/wp-content/uploads/2022/07/Header-Image-by-Spacejoy-Unsplash.jpg",
};

export default function Styles() {
  const [selectedStyle, setSelectedStyle] = useState<string>(
    designStyles[0].id
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedStyle(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelectedStyle(id);
    }
  };

  const setRef = (el: HTMLDivElement | null, id: string) => {
    if (sectionRefs.current) {
      sectionRefs.current[id] = el;
    }
  };

  const scrollToSection = (id: string) => {
    setSelectedStyle(id);
    setIsMenuOpen(false);

    const element = sectionRefs.current[id];
    if (element) {
      const offset = 150; // Increased offset to account for header + dropdown menu
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen text-justify">
      <div>
        <HeroPage {...heroContent} />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Dropdown */}
        <div className="lg:hidden px-4 py-4 sticky top-[64px] z-20 bg-white/95 backdrop-blur-sm">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md"
          >
            <span className="text-gray-700">
              {designStyles.find((s) => s.id === selectedStyle)?.title}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute z-30 mt-2 w-[calc(100%-2rem)] bg-white rounded-lg shadow-lg">
              {designStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => scrollToSection(style.id)}
                  className={`w-full text-left px-4 py-3 transition-colors duration-300 ${
                    selectedStyle === style.id ? 'text-[#D6B26D] font-medium' : 'text-gray-700 hover:bg-[#D6B26D]/5 hover:text-[#D6B26D]'
                  }`}
                >
                  {style.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 px-4 py-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Phong cách thiết kế
              </h3>
              <div className="space-y-2">
                {designStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => handleScroll(style.id)}
                    className={`w-full text-left px-4 py-2 transition-colors duration-300 ${
                      selectedStyle === style.id
                        ? "text-[#D6B26D] font-medium"
                        : "text-gray-600 hover:bg-[#D6B26D]/10 hover:text-[#D6B26D]"
                    }`}
                  >
                    {style.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl space-y-24">
            {designStyles.map((style) => (
              <div
                key={style.id}
                ref={(el) => setRef(el, style.id)}
                id={style.id}
                className="scroll-mt-20"
              >
                <h2 className="text-[#30302e] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
                  {style.title}
                </h2>

                <p className="text-[#30302e] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 lg:mb-12">
                  &#8193; {style.description}
                </p>

                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <img
                      src={style.imageUrl}
                      alt={style.imageAlt}
                      className="w-full h-[200px] sm:h-[350px] lg:h-[500px] object-cover"
                    />
                    <div className="bg-white p-3 sm:p-4 text-center">
                      <p className="text-gray-600 text-xs sm:text-sm italic">
                        {style.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import HeroPage from "../../components/Hero/HeroPage";
import { useState, useRef } from 'react';

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
    description: "Phong cách thiết kế nội thất hiện đại (Modern Style) được xem là một trong những xu hướng được ưa chuộng. Bài viết sau đây của VuDecor sẽ giúp bạn có cái nhìn tổng quan về phong cách thiết kế này với lịch sử hình thành cũng như các đặc trưng của nó. Mời bạn cùng theo dõi nhé!",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAlt: "Modern living room interior",
    imageCaption: "Thiết kế phòng khách hiện đại với tông màu trung tính, đường nét đơn giản và ánh sáng tự nhiên"
  },
  {
    id: "minimalist",
    title: "Phong cách thiết kế tối giản",
    description: "Với sự phát triển nhanh chóng của quá trình hiện đại hóa, người tiêu dùng ngày càng hướng đến những sản phẩm hiện đại, đơn giản, nhưng vẫn đầy đủ các tiện nghi cần dùng. Do đó, phong cách Tối giản hiện đại – Minimalist Style ra đời và nhận được nhiều sự quan tâm. Cùng VuDecor tìm hiểu phong cách này nhé!",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    imageAlt: "Minimalist living room interior",
    imageCaption: "Không gian sống tối giản với nội thất tinh tế và bố cục hợp lý"
  }
];

const heroContent = {
  page: "Phong Cách Thiết Kế",
  title: "VuDecor là công ty thiết kế nội thất chuyên tạo ra những không gian thanh lịch và tiện dụng, phản ánh tính cách và phong cách độc đáo của mỗi khách hàng.",
  image: "https://www.sustainablejungle.com/wp-content/uploads/2022/07/Header-Image-by-Spacejoy-Unsplash.jpg"
};

export default function Styles() {
  const [selectedStyle, setSelectedStyle] = useState<string>(designStyles[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div>
        <HeroPage {...heroContent} />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Dropdown */}
        <div className="lg:hidden px-4 py-4 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-md"
          >
            <span className="text-gray-700">
              {designStyles.find(s => s.id === selectedStyle)?.title}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute z-50 mt-2 w-[calc(100%-2rem)] bg-white rounded-lg shadow-lg">
              {designStyles.map(style => (
                <button
                  key={style.id}
                  onClick={() => scrollToSection(style.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                    selectedStyle === style.id ? 'bg-gray-50 text-[#D6B26D]' : 'text-gray-700'
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
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Phong cách thiết kế</h3>
              <div className="space-y-2">
                {designStyles.map(style => (
                  <button
                    key={style.id}
                    onClick={() => scrollToSection(style.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedStyle === style.id
                        ? 'bg-[#D6B26D] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
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
            {designStyles.map(style => (
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
                  {style.description}
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

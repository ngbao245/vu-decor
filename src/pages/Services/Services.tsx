import React from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import HeroPage from "../../components/Hero/HeroPage";
import Button from "../../components/Button/Button";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

export const Services = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      id: "interior-design",
      title: "Thiết Kế Nội Thất",
      description: "Chúng tôi cung cấp dịch vụ thiết kế nội thất chuyên nghiệp, tạo ra không gian sống độc đáo và phù hợp với phong cách của bạn.",
      icon: (
        <svg className="w-12 h-12 text-[#D6B26D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Tư vấn phong cách thiết kế",
        "Lên ý tưởng và phác thảo 2D",
        "Thiết kế 3D chi tiết",
        "Lựa chọn vật liệu và nội thất",
        "Tối ưu hóa không gian sống"
      ],
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    },
    {
      id: "construction",
      title: "Thi Công Nội Thất",
      description: "Đội ngũ thi công chuyên nghiệp của chúng tôi sẽ biến những bản vẽ thiết kế thành hiện thực với chất lượng cao nhất.",
      icon: (
        <svg className="w-12 h-12 text-[#E34225]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      features: [
        "Thi công đúng bản vẽ thiết kế",
        "Sử dụng vật liệu chất lượng cao",
        "Đội ngũ thợ lành nghề",
        "Giám sát chất lượng chặt chẽ",
        "Bảo hành sau thi công"
      ],
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
    },
    {
      id: "consulting",
      title: "Tư Vấn Thiết Kế",
      description: "Chúng tôi cung cấp dịch vụ tư vấn chuyên sâu, giúp bạn lựa chọn phong cách và giải pháp thiết kế phù hợp nhất.",
      icon: (
        <svg className="w-12 h-12 text-[#D6B26D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      features: [
        "Phân tích nhu cầu khách hàng",
        "Tư vấn phong cách phù hợp",
        "Đề xuất giải pháp tối ưu",
        "Tư vấn lựa chọn vật liệu",
        "Tư vấn ngân sách dự án"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroPage
        page="Dịch Vụ"
        title="VuDecor cung cấp đa dạng dịch vụ thiết kế và thi công nội thất, 
              mang đến những không gian sống đẹp và tiện nghi cho khách hàng."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}

        {/* Enhanced Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-20 rounded-2xl overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Interior design background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Sẵn Sàng Biến Ý Tưởng Thành Hiện Thực?
                </h2>
                <div className="w-20 h-1 bg-[#D6B26D] mx-auto mb-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6 mb-10"
              >
                <p className="text-lg sm:text-xl text-gray-200">
                  Hãy để VuDecor đồng hành cùng bạn trong hành trình kiến tạo không gian sống trong mơ
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6 text-[#D6B26D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tư vấn miễn phí</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6 text-[#D6B26D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Báo giá nhanh chóng</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6 text-[#D6B26D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  variant="primary"
                  onClick={() => navigate("/contact")}
                  className="text-lg px-8 py-4 min-w-[200px]"
                >
                  Liên Hệ Ngay
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate("/projects")}
                  className="text-lg px-8 py-4 min-w-[200px]"
                >
                  Xem Dự Án
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: Service; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
      }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 items-center mb-20`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            visible: { opacity: 1, x: 0 }
          }}
          className="flex items-center gap-4 mb-4"
        >
          {service.icon}
          <h2 className="text-3xl font-bold">{service.title}</h2>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-600 text-lg"
        >
          {service.description}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
          visible: { opacity: 1, x: 0 }
        }}
        className="flex-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

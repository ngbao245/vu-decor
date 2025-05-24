import React, { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import HeroPage from "../../components/Hero/HeroPage";

type TimeoutType = ReturnType<typeof setTimeout>;

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Tư Vấn & Khảo Sát",
    description:
      "Đội ngũ chuyên viên của VuDecor sẽ trao đổi chi tiết về ý tưởng, phong cách và ngân sách của bạn. Chúng tôi sẽ khảo sát không gian để đưa ra giải pháp tối ưu nhất.",
    icon: (
      <svg
        className="w-12 h-12 text-[#D6B26D]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Thiết Kế & Phác Thảo",
    description:
      "Dựa trên yêu cầu của bạn, chúng tôi sẽ tạo ra các bản phác thảo 2D và 3D chi tiết. Bạn có thể xem trước không gian tương lai của mình một cách trực quan nhất.",
    icon: (
      <svg
        className="w-12 h-12 text-[#D6B26D]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Báo Giá & Ký Kết",
    description:
      "VuDecor sẽ cung cấp báo giá chi tiết và minh bạch. Sau khi thống nhất, chúng tôi sẽ ký hợp đồng và lên kế hoạch thi công cụ thể.",
    icon: (
      <svg
        className="w-12 h-12 text-[#D6B26D]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Thi Công & Hoàn Thiện",
    description:
      "Đội ngũ thi công chuyên nghiệp sẽ biến thiết kế thành hiện thực. Chúng tôi cam kết thi công đúng tiến độ và đảm bảo chất lượng cao nhất.",
    icon: (
      <svg
        className="w-12 h-12 text-[#D6B26D]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

export const Services = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const sliderInterval = useRef<TimeoutType>(null);

  const getContact = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const services: Service[] = [
    {
      id: "interior-design",
      title: "Thiết Kế Nội Thất",
      description:
        "Chúng tôi cung cấp dịch vụ thiết kế nội thất chuyên nghiệp, tạo ra không gian sống độc đáo và phù hợp với phong cách của bạn.",
      icon: (
        <svg
          className="w-12 h-12 text-[#D6B26D]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      features: [
        "Tư vấn phong cách thiết kế",
        "Lên ý tưởng và phác thảo 2D",
        "Thiết kế 3D chi tiết",
        "Lựa chọn vật liệu và nội thất",
        "Tối ưu hóa không gian sống",
      ],
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
      id: "construction",
      title: "Thi Công Nội Thất",
      description:
        "Đội ngũ thi công chuyên nghiệp của chúng tôi sẽ biến những bản vẽ thiết kế thành hiện thực với chất lượng cao nhất.",
      icon: (
        <svg
          className="w-12 h-12 text-[#E34225]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      features: [
        "Thi công đúng bản vẽ thiết kế",
        "Sử dụng vật liệu chất lượng cao",
        "Đội ngũ thợ lành nghề",
        "Giám sát chất lượng chặt chẽ",
        "Bảo hành sau thi công",
      ],
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    },
    {
      id: "consulting",
      title: "Tư Vấn Thiết Kế",
      description:
        "Chúng tôi cung cấp dịch vụ tư vấn chuyên sâu, giúp bạn lựa chọn phong cách và giải pháp thiết kế phù hợp nhất.",
      icon: (
        <svg
          className="w-12 h-12 text-[#D6B26D]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      features: [
        "Phân tích nhu cầu khách hàng",
        "Tư vấn phong cách phù hợp",
        "Đề xuất giải pháp tối ưu",
        "Tư vấn lựa chọn vật liệu",
        "Tư vấn ngân sách dự án",
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  useEffect(() => {
    // Auto advance slider every 5 seconds
    sliderInterval.current = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length);
      console.log(currentStep);
      
    }, 5000);

    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-justify">
      <HeroPage
        page="Dịch Vụ"
        title="VuDecor cung cấp đa dạng dịch vụ thiết kế và thi công nội thất, 
              mang đến những không gian sống đẹp và tiện nghi cho khách hàng."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}

        {/* Modern Process Timeline Section */}
        <div className="mt-32 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -mx-4 -my-16" />

          {/* Section Header */}
          <div className="relative text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Quy Trình Làm Việc
            </motion.h2>
            <div className="w-24 h-1 bg-[#D6B26D] mx-auto mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Chúng tôi cam kết mang đến trải nghiệm thiết kế và thi công chuyên
              nghiệp thông qua quy trình làm việc chuẩn mực
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-[#D6B26D] to-[#E34225]" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative mb-24 last:mb-0"
              >
                <div
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-16 md:p-6">
                    <div
                      className={`max-w-lg ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:-translate-y-1 transition-transform duration-300"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D6B26D] to-[#E34225] text-white">
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-[#D6B26D] font-bold text-sm md:text-base">
                              Bước {step.id}
                            </span>
                            <h3 className="text-[17px] leading-tight md:text-2xl font-bold whitespace-nowrap [@media(width<=320px)]:whitespace-normal">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-0 md:static md:w-1/2 flex justify-center">
                    <div className="absolute top-[45px] md:top-1/2 transform md:-translate-y-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        viewport={{ once: true }}
                        className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-[#D6B26D] to-[#E34225] shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mt-32 text-center"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                  alt="Interior design background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F2F2F]/75 to-[#1F1F1F]/75"></div>
              </div>

              <div className="relative z-10 px-4 py-16 md:px-12">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  QUÝ KHÁCH CẦN TƯ VẤN?
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base text-justify">
                  Hãy để VuDecor đồng hành cùng bạn trong hành trình kiến tạo
                  không gian sống trong mơ. Chúng tôi cam kết mang đến giải pháp
                  tối ưu nhất cho không gian của bạn.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button
                    onClick={getContact}
                    className="group relative inline-flex items-center justify-center w-full sm:w-auto min-w-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-[#404040] via-[#1a1a1a] to-[#404040] px-12 py-4 font-medium tracking-[0.2em] text-white transition-all duration-300 hover:scale-[0.98] active:scale-95 shadow-lg"
                  >
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-96"></span>
                    <div className="flex items-center gap-3">
                      <span className="relative overflow-hidden pr-3 border-r border-white/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 absolute top-0 left-0 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                      <span className="relative overflow-hidden">
                        <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-y-[-100%]">
                          LIÊN HỆ
                        </span>
                        <span className="absolute top-0 left-0 transform transition-transform duration-300 ease-out translate-y-[100%] group-hover:translate-y-0">
                          TƯ VẤN
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
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
        visible: {
          opacity: 1,
          transition: { duration: 0.5, staggerChildren: 0.1 },
        },
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
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center gap-4 mb-4"
        >
          {service.icon}
          <h2 className="text-3xl font-bold">{service.title}</h2>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-gray-600 text-lg"
        >
          {service.description}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {service.features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
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
          visible: { opacity: 1, x: 0 },
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

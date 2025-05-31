import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Star, Shield } from "lucide-react";

const StoryValue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const values = [
    {
      title: "Khách Hàng Là Trọng Tâm",
      description:
        "Lắng nghe, thấu hiểu và đáp ứng tối ưu nhu cầu của khách hàng. Chúng tôi cam kết mang đến trải nghiệm dịch vụ tốt nhất.",
      icon: <Users className="w-8 h-8 text-[#E34225]" />,
    },
    {
      title: "Chất Lượng Vượt Trội",
      description:
        "Sản phẩm tinh tế, bền đẹp theo thời gian. Chúng tôi không ngừng cập nhật xu hướng và nâng cao chất lượng dịch vụ.",
      icon: <Star className="w-8 h-8 text-[#E34225]" />,
    },
    {
      title: "Uy Tín Hàng Đầu",
      description:
        "Minh bạch trong quy trình, đúng tiến độ cam kết và dịch vụ tận tâm. Chúng tôi luôn đặt chữ tín lên hàng đầu.",
      icon: <Shield className="w-8 h-8 text-[#E34225]" />,
    },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Giá Trị Cốt Lõi
          </h2>
          <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Những giá trị định hình cách chúng tôi làm việc và phục vụ khách
            hàng.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#E34225]/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E34225]/20 transition-colors duration-300">
                  {value.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-[#2F2F2F] group-hover:text-[#E34225] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify tracking-wide whitespace-normal">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-1 bg-[#E34225] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryValue;

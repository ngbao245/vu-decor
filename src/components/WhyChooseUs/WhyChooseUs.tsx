import { useEffect, useRef } from 'react'
import { Shield, Star, Users } from 'lucide-react';
import { motion, useAnimation, useInView } from "framer-motion";

const WhyChooseUs = () => {
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
        <section ref={ref} className='w-full h-max flex flex-col gap-5'

        >
            <div className='text-center'>
                <h6 className='text-[#828282]'>Tại sao chọn chúng tôi</h6>
                <h1 className='text-[2.5rem]'><span className='text-[#E34225]'>Giá trị</span> cốt lõi</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
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
                        <div className="p-8 h-full  ">
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
        </section>
    )
}

export default WhyChooseUs
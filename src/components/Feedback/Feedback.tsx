import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const Feedback = () => {
    // Testimonials Section
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const testimonials = [
        {
            id: 1,
            quote: "VuDecor đã giúp tôi biến căn hộ cũ kỹ thành không gian sống hiện đại và tiện nghi. Tôi rất hài lòng với kết quả và dịch vụ chuyên nghiệp của họ.",
            name: "Nguyễn Thị Minh",
            position: "Chủ căn hộ tại Vinhomes Grand Park",
            avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        },
        {
            id: 2,
            quote: "Đội ngũ thiết kế của VuDecor rất nhiệt tình và sáng tạo. Họ lắng nghe mọi yêu cầu của tôi và đưa ra giải pháp tối ưu cho không gian sống của gia đình tôi.",
            name: "Trần Văn Hải",
            position: "Chủ căn hộ tại The Beverly Solari",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            quote: "Tôi đánh giá cao sự chuyên nghiệp và tận tâm của đội ngũ VuDecor. Họ đã hoàn thành dự án đúng tiến độ và chất lượng vượt mong đợi của tôi.",
            name: "Lê Thị Hồng",
            position: "Chủ căn hộ tại The Glory Heights",
            avatar: "https://randomuser.me/api/portraits/women/67.jpg",
        },
    ];

    return (
        <section ref={ref} className="py-20 ">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h6 className="text-[#828282] text-md mb-2">Đánh giá</h6>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
                    <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6 rounded-full"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Những đánh giá từ khách hàng đã trải nghiệm dịch vụ thiết kế và thi công nội thất của VuDecor.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-center mb-6">
                                <svg className="w-12 h-12 text-[#E34225]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-justify mb-6 italic min-h-[120px] flex items-center justify-center leading-relaxed">{testimonial.quote}</p>
                            <div className="flex items-center justify-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Feedback
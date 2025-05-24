import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Eye, Flag } from 'lucide-react'

const Story = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

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
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Về Chúng Tôi</h2>
                    <div className="w-20 h-1 bg-[#D6B26D] mx-auto mb-6"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Text Content */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Company Introduction */}
                        <div className="prose prose-lg">
                            <p className="text-gray-600 leading-relaxed">
                                Với đội ngũ kiến trúc sư, kỹ sư sáng tạo cùng đội ngũ thợ lành nghề nhiều năm kinh nghiệm, 
                                chúng tôi lắng nghe, thấu hiểu và hiện thực hóa không gian theo phong cách riêng, cân bằng thẩm mỹ và công năng.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Chúng tôi cam kết đặt khách hàng là trọng tâm, đảm bảo chất lượng vượt trội, uy tín hàng đầu và sáng tạo không ngừng. 
                                Vu Decor không ngừng cập nhật xu hướng, tối ưu thiết kế, mang đến những sản phẩm tinh tế, bền đẹp theo thời gian.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Với chúng tôi, một không gian phù hợp không chỉ đáp ứng nhu cầu sử dụng mà còn nâng cao chất lượng sống cho mỗi khách hàng.
                            </p>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {/* Vision Card */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#D6B26D]/10 rounded-full flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-[#D6B26D]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#D6B26D]">Tầm Nhìn</h3>
                                </div>
                                <p className="text-gray-600">
                                    Từng bước khẳng định vị thế trên thị trường, cung cấp giải pháp thiết kế và thi công nội thất chất lượng, 
                                    đáp ứng nhu cầu đa dạng của khách hàng.
                                </p>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[#D6B26D]/10 rounded-full flex items-center justify-center">
                                        <Flag className="w-6 h-6 text-[#D6B26D]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#D6B26D]">Sứ Mệnh</h3>
                                </div>
                                <p className="text-gray-600">
                                    Mang đến không gian sống chất lượng, kết hợp thẩm mỹ và công năng, tối ưu theo nhu cầu khách hàng.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image and Stats */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                                alt="Vu Decor Studio"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute lg:-bottom-6 lg:-left-6 bottom-0 left-0 w-40 h-40 bg-[#7A876D] rounded-xl shadow-lg flex items-center justify-center p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-[#f5f5f3] text-center">
                                <span className="block text-5xl font-bold font-serif">10</span>
                                <span className="block text-sm mt-2 uppercase tracking-wider">Năm Kinh Nghiệm</span>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D6B26D]/10 rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Story
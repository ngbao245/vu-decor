import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
        <section ref={ref} className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
                        <div className="w-20 h-1 bg-[#D6B26D] mb-6"></div>
                        <p className="text-gray-600 mb-6">
                            Được thành lập vào năm 2024, 
                            VuDecor ra đời từ niềm đam mê thiết kế tân cổ điển 
                            và tầm nhìn tạo ra những không gian tôn vinh di sản kiến ​​trúc đồng thời kết hợp chức năng hiện đại.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Bắt đầu từ một studio nhỏ, công ty đã phát triển thành một công ty thiết kế từng đoạt giải thưởng 
                            với đội ngũ các nhà thiết kế, kiến ​​trúc sư và thợ thủ công tài năng, 
                            những người cùng cam kết theo đuổi sự xuất sắc và đánh giá cao sâu sắc các nguyên tắc thiết kế cổ điển.
                        </p>
                        <p className="text-gray-600">
                            Ngày nay, chúng tôi tự hào được phục vụ khách hàng trên khắp cả nước và quốc tế, 
                            mang đến sự kết hợp độc đáo giữa vẻ đẹp thanh lịch vượt thời gian và sự thoải mái hiện đại cho các khu dân cư, 
                            không gian thương mại và các tổ chức văn hóa.
                        </p>
                    </motion.div>

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
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <img src="https://decormatters-blog-uploads.s3.amazonaws.com/spacejoy_q3_Qd86sfao_U_unsplash_ee33419bee.jpg"
                                alt="Our studio"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute lg:-bottom-6 lg:-left-6 bottom-0 left-0 w-32 h-32 bg-[#7A876D] lg:rounded-lg rounded-tr-lg rounded-bl-lg flex items-center justify-center p-6">
                            <p className="text-white text-center font-serif">
                                <span className="block text-4xl font-bold">18</span>
                                <span className="block text-sm mt-1">năm xuất sắc</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Story
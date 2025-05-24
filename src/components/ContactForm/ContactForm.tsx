import { motion, useAnimation, useInView } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react"
import Button from "../Button/Button";

const ContactForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <section ref={ref} className="py-20 bg-white" id="contact-form">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Liên Hệ</h2>
                        <div className="w-20 h-1 bg-[#D6B26D] mb-6"></div>
                        <p className="text-gray-600 mb-8">
                            Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy điền vào mẫu dưới đây và một trong những chuyên gia tư vấn thiết kế của chúng tôi sẽ phản hồi bạn trong vòng 24 giờ.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="bg-[#D6B26D]/10 p-3 rounded-full mr-4">
                                    <Phone className="h-6 w-6 text-[#D6B26D]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Số điện thoại</h4>
                                    <p className="text-gray-600">(+84) 965 99 4178</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#E34225]/10 p-3 rounded-full mr-4">
                                    <Mail className="h-6 w-6 text-[#E34225]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <p className="text-gray-600">vudecor24@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#E34225]/10 p-3 rounded-full mr-4">
                                    <MapPin className="h-6 w-6 text-[#E34225]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Văn Phòng</h4>
                                    <p className="text-gray-600">Vinhomes Grand Park, đường Nguyễn Xiển, Phường Long Thạnh Mỹ, Thủ Đức, TP.HCM</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-serif font-bold mb-3">Thời gian làm việc</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex justify-between">
                                    <span>Thứ 2 - Thứ 6</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Thứ 7</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Chủ nhật</span>
                                    <span>Đóng cửa</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="border-none shadow-xl overflow-hidden">
                            <div className="p-8">
                                <form className="space-y-6 ">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">
                                                Họ
                                            </label>
                                            <input
                                                id="lastName"
                                                placeholder="Nhập họ của bạn"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium">
                                                Tên
                                            </label>
                                            <input
                                                id="firstName"
                                                placeholder="Nhập tên của bạn"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6B26D]"
                                            />
                                        </div>

                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Nhập email của bạn"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Số Điện Thoại
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Nhập số điện thoại của bạn"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="projectType" className="text-sm font-medium">
                                            Loại Dự Án
                                        </label>
                                        <select
                                            id="projectType"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        >
                                            <option value="">Chọn loại dự án</option>
                                            <option value="residential">Dân Cư</option>
                                            <option value="commercial">Thương Mại</option>
                                            <option value="cultural">Văn Hóa</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Lời nhắn của bạn
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Hãy cho chúng tôi biết về dự án của bạn"
                                            rows={5}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-center">

                                        <Button variant="primary" >Gửi</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
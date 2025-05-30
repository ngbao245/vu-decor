import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const StoryTeam = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    const team = [
        {
            name: "Vũ Nguyễn",
            role: "Nhà Sáng Lập & Giám Đốc Thiết Kế",
            image: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740",
        }
    ]
    
    return (
        <section ref={ref} className="py-20 bg-gray-50">
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4"><span className='text-[#E34225]'>Đội Ngũ</span> Của Chúng Tôi</h2>
                    <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Với kinh nghiệm và đam mê, chúng tôi cam kết mang đến những thiết kế độc đáo và chất lượng.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group max-w-sm"
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 w-full">
                                        <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                                        <p className="text-white/80">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StoryTeam
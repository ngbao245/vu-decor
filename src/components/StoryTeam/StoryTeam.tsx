import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

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
            name: "Elizabeth Harrington",
            role: "Founder & Principal Designer",
            image: "https://www.essentialhome.eu/blog/wp-content/uploads/2020/02/The-20-Most-Famous-Interior-Designers-In-The-Industry-Right-Now_1.jpg",
        },
        {
            name: "Jonathan Pierce",
            role: "Senior Interior Designer",
            image: "https://foyr.com/learn/wp-content/uploads/2021/11/most-famous-female-interior-designers-scaled.jpg",
        },
        {
            name: "Sophia Chen",
            role: "Architectural Specialist",
            image: "https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/12/interior-designer-working-full-time-720x533.jpg",
        },
        {
            name: "Marcus Bennett",
            role: "Project Manager",
            image: "https://www.essentialhome.eu/blog/wp-content/uploads/2020/02/The-20-Most-Famous-Interior-Designers-In-The-Industry-Right-Now_3.jpg",
        },
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
                    <div className="w-20 h-1 bg-[#D6B26D] mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Our talented team of designers, architects, and craftsmen bring a wealth of expertise and passion to every
                        project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                            className="group"
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
                            <div className="mt-4 text-center group-hover:hidden">
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
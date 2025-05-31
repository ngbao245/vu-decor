import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'


const StoryAward = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    const awards = [
        {
            year: "2023",
            title: "Excellence in Residential Design",
            organization: "American Society of Interior Designers",
        },
        {
            year: "2022",
            title: "Best of Houzz - Design",
            organization: "Houzz",
        },
        {
            year: "2021",
            title: "Interior Design Firm of the Year",
            organization: "Architectural Digest",
        },
        {
            year: "2020",
            title: "Innovation in Classical Design",
            organization: "Institute of Classical Architecture & Art",
        },
        {
            year: "2019",
            title: "Best Commercial Interior",
            organization: "International Design Awards",
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Awards & Recognition</h2>
                    <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6 rounded-full"></div>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Our commitment to excellence has been recognized by leading organizations in the design industry.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start mb-8 last:mb-0"
                        >
                            <div className="mr-6 flex-shrink-0">
                                <div className="w-16 h-16 bg-[#E34225] rounded-full flex items-center justify-center text-white font-serif font-bold">
                                    {award.year}
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
                                <h3 className="text-xl font-serif font-bold mb-1">{award.title}</h3>
                                <p className="text-gray-600">{award.organization}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StoryAward
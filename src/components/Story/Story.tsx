import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

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
                            Founded in 2005 by renowned interior designer Elizabeth Harrington, Artisan Interiors was born from a
                            passion for neoclassical design and a vision to create spaces that honor architectural heritage while
                            embracing modern functionality.
                        </p>
                        <p className="text-gray-600 mb-6">
                            What began as a small studio has grown into an award-winning design firm with a team of talented
                            designers, architects, and craftsmen who share a commitment to excellence and a deep appreciation for
                            classical design principles.
                        </p>
                        <p className="text-gray-600">
                            Today, we are proud to serve clients across the country and internationally, bringing our unique blend of
                            timeless elegance and contemporary comfort to residences, commercial spaces, and cultural institutions.
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
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#7A876D] rounded-lg flex items-center justify-center p-6">
                            <p className="text-white text-center font-serif">
                                <span className="block text-4xl font-bold">18</span>
                                <span className="block text-sm mt-1">Years of Excellence</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Story
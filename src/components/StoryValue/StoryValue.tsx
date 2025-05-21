
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
const StoryValue = () => {


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const values = [
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality in every aspect of our work.",
    },
    {
      title: "Integrity",
      description: "We maintain transparency and honesty in all our client and vendor relationships.",
    },
    {
      title: "Innovation",
      description: "We continuously seek new ways to enhance the neoclassical tradition with modern innovations.",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients and craftsmen.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-[#D6B26D] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            The principles that guide our work and define our approach to design and client relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#D6B26D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#D6B26D] font-serif text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoryValue
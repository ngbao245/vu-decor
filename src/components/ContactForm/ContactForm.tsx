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
        <section ref={ref} className="py-20 bg-white">
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get In Touch</h2>
                        <div className="w-20 h-1 bg-[#D6B26D] mb-6"></div>
                        <p className="text-gray-600 mb-8">
                            We'd love to hear from you. Fill out the form below, and one of our design consultants will get back to
                            you within 24 hours.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="bg-[#D6B26D]/10 p-3 rounded-full mr-4">
                                    <Phone className="h-6 w-6 text-[#D6B26D]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Phone</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#E34225]/10 p-3 rounded-full mr-4">
                                    <Mail className="h-6 w-6 text-[#E34225]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <p className="text-gray-600">info@artisaninteriors.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-[#E34225]/10 p-3 rounded-full mr-4">
                                    <MapPin className="h-6 w-6 text-[#E34225]" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Office</h4>
                                    <p className="text-gray-600">123 Luxury Avenue, New York, NY 10001</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-serif font-bold mb-3">Office Hours</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
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
                                            <label htmlFor="firstName" className="text-sm font-medium">
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6B26D]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">
                                                Last Name
                                            </label>
                                            <input
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="projectType" className="text-sm font-medium">
                                            Project Type
                                        </label>
                                        <select
                                            id="projectType"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        >
                                            <option value="">Select project type</option>
                                            <option value="residential">Residential</option>
                                            <option value="commercial">Commercial</option>
                                            <option value="cultural">Cultural</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us about your project"
                                            rows={5}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E34225]"
                                        ></textarea>
                                    </div>

                                    <div className="flex justify-center">

                                        <Button variant="primary" >Submit Inquiry</Button>
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
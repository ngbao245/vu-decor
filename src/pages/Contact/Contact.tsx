import { useEffect } from "react"
import PostService from "../../services/post-service"
import ContactHero from "./components/contact-hero"
import ContactForm from "./components/contact-form"

export const Contact = () => {
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await PostService.getInstance().getAllPosts(2, 2, "id", "desc")
        console.log('Fetched categories:', response)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchTest()
  }, [])
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto_1fr] bg-gray-50">
      <ContactHero />
      <div className="flex justify-center items-start w-full px-4 md:px-6 py-12 md:py-16">
        <div className="w-full max-w-5xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

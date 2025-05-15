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
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <style>{`
        .main {
          min-height: 100vh;
          background-color: #f4edde;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
          position: relative;
        }
        .circle {
          position: absolute;
          border-radius: 50%;
          background-color: #b1a18f;
          opacity: 0.8;
        }
        .circle-left {
          left: 0;
          bottom: 0;
          width: 8rem;
          height: 8rem;
          transform: translate(-50%, -25%);
        }
        .circle-right {
          right: 0;
          top: 0;
          width: 10rem;
          height: 10rem;
          transform: translate(33%, 25%);
        }
        
        @media (max-width: 768px) {
          .circle-left, .circle-right {
            width: 6rem;
            height: 6rem;
          }
        }
      `}</style>

      <main className="main">
        <ContactHero />
        <div className="container">
          <div className="circle circle-left"></div>
          <div className="circle circle-right"></div>
          <ContactForm />
        </div>
      </main>
    </>
  )
}

import ContactForm from "../../components/ContactForm/ContactForm"
import HeroPage from "../../components/Hero/HeroPage"

const ContactUs = () => {
  return (
    <div>
      <div>
        <HeroPage
          page="Liên Hệ"
          title="Artisan Interiors is a leading interior design firm that specializes in creating elegant 
          and functional spaces that reflect the unique character and style of each client."
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
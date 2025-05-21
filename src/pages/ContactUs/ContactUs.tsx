import ContactForm from "../../components/ContactForm/ContactForm";
import HeroPage from "../../components/Hero/HeroPage";

const ContactUs = () => {
  return (
    <div>
      <div id="contact">
        <HeroPage
          page="Liên Hệ"
          title="VuDecor là công ty thiết kế nội thất chuyên tạo ra những không gian thanh lịch và tiện dụng, 
                    phản ánh tính cách và phong cách độc đáo của mỗi khách hàng."
          image="https://www.sustainablejungle.com/wp-content/uploads/2022/07/Header-Image-by-Spacejoy-Unsplash.jpg"
        />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;

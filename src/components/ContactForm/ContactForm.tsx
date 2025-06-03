import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // State cho các trường input
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Hàm kiểm tra số điện thoại Việt Nam
  const isValidVietnamesePhone = (phone: string) => {
    const regex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    return regex.test(phone.trim());
  };

  const isMessageRequired = projectType === "other";
  const isFormValid =
    lastName.trim() &&
    firstName.trim() &&
    email.trim() &&
    phone.trim() &&
    isValidVietnamesePhone(phone) &&
    projectType.trim() &&
    (!isMessageRequired || message.trim());

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTouched(true);
    if (!isFormValid) return;

    setIsLoading(true);
    setError(null);

    try {
      // Email to business
      const businessTemplateParams = {
        last_name: lastName,
        first_name: firstName,
        email: email,
        phone: phone,
        service_type: projectType,
        message: message,
        time: new Date().toLocaleString('vi-VN')
      };

      // Email to customer
      const customerTemplateParams = {
        first_name: firstName,
        service_type: projectType,
        email: email,
      };

      // Send both emails simultaneously
      await Promise.all([
        // Email to business
        emailjs.send(
          'default_service',
          'template_c5nwd3r',
          businessTemplateParams,
          'QZfklo8vAujdTrJdd'
        ),
        // Email to customer
        emailjs.send(
          'service_kck3a2j',
          'template_h5mcn9c',
          customerTemplateParams,
          'QZfklo8vAujdTrJdd'
        )
      ]);

      setIsSubmitted(true);
    } catch (err) {
      setError('Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau.');
      console.error('EmailJS error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} className="" id="contact-form">
      <div className="container mx-auto px-4 md:px-6 bg-white py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full flex flex-col">
              <div className="p-8 flex-0 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                    Liên Hệ
                  </h2>
                  <div className="w-20 h-1 bg-[#E34225] mb-6"></div>
                  <p className="text-gray-600 mb-8">
                    Chúng tôi rất mong nhận được phản hồi từ bạn. Hãy điền vào
                    mẫu dưới đây và một trong những chuyên gia tư vấn thiết kế
                    của chúng tôi sẽ phản hồi bạn trong vòng 24 giờ.
                  </p>
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-[#E34225]/20 rounded-full flex items-center justify-center h-12 w-12">
                        <Phone className="h-6 w-6 text-[#E34225]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Số điện thoại</h4>
                        <p className="text-gray-600">(+84) 965 99 4178</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-[#E34225]/20 rounded-full flex items-center justify-center h-12 w-12">
                        <Mail className="h-6 w-6 text-[#E34225]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-gray-600">vudecor24@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-0">
                      <div className="bg-[#E34225]/20 rounded-full flex items-center justify-center h-12 w-12">
                        <MapPin className="h-6 w-6 text-[#E34225]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Địa Chỉ</h4>
                        <p className="text-gray-600">
                          Vinhomes Grand Park, đường Nguyễn Xiển, <br /> Phường
                          Long Thạnh Mỹ, Thủ Đức, TP.HCM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Google Map */}
              <div
                className="w-full mt-auto shadow-xl overflow-hidden"
                style={{ minHeight: 200 }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src="https://maps.google.com/maps?width=100%25&amp;height600&amp;hl=en&amp;q=Chung%20c%C6%B0%20Vinhomes%20Grand%20Park%20Qu%E1%BA%ADn%209,%20512%20Nguy%E1%BB%85n%20Xi%E1%BB%83n,%20Th%C3%A0nh%20Ph%E1%BB%91,%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c,%20H%E1%BB%93%20Ch%C3%AD%20Minh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Vị trí Vinhomes Grand Park"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="contact-form-mobile"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white shadow-xl h-full flex flex-col justify-center">
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="relative min-h-[500px]">
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium"
                        >
                          Họ
                        </label>
                        <input
                          id="lastName"
                          placeholder="Nhập họ của bạn"
                          className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                            setIsTouched(true);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium"
                        >
                          Tên
                        </label>
                        <input
                          id="firstName"
                          placeholder="Nhập tên của bạn"
                          className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                            setIsTouched(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setIsTouched(true);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Số Điện Thoại
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại của bạn"
                        className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setIsTouched(true);
                        }}
                      />
                      {isTouched && phone && !isValidVietnamesePhone(phone) && (
                        <p className="text-red-500 text-xs mt-1">
                          Số điện thoại không hợp lệ.
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="text-sm font-medium"
                      >
                        Loại Dịch Vụ
                      </label>
                      <select
                        id="projectType"
                        className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                        value={projectType}
                        onChange={(e) => {
                          setProjectType(e.target.value);
                          setIsTouched(true);
                        }}
                      >
                        <option value="">Chọn Dịch Vụ</option>
                        <option value="Thiết Kế Nội Thất">Thiết Kế Nội Thất</option>
                        <option value="Thi Công Nội Thất">Thi Công Nội Thất</option>
                        <option value="Tư Vấn Thiết Kế">Tư Vấn Thiết Kế</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Lời nhắn của bạn
                      </label>
                      <textarea
                        id="message"
                        placeholder="Hãy cho chúng tôi biết về yêu cầu của bạn"
                        rows={5}
                        className="w-full px-[10px] py-[10px] border border-[#f0f0f0] rounded-[4px] transition-colors duration-300 focus:border-[#E34225] focus:outline-none"
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          setIsTouched(true);
                        }}
                      ></textarea>
                      {isTouched && isMessageRequired && !message.trim() && (
                        <p className="text-red-500 text-xs mt-1">
                          Vui lòng nhập lời nhắn.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <button
                        type="submit"
                        className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-md transition-all duration-200 mt-2
                          ${
                            isSubmitted || !isFormValid || isLoading
                              ? "bg-[#f9d9d3] text-white cursor-not-allowed"
                              : "bg-[#E34225] hover:bg-[#BD371F] text-white"
                          }
                        `}
                        disabled={isSubmitted || !isFormValid || isLoading}
                      >
                        {isLoading ? 'Đang gửi...' : 'Gửi'}
                        {!isLoading && <Send className="w-5 h-5 ml-1" />}
                      </button>
                      {error && (
                        <p className="w-full text-red-500 text-xs mt-2 text-start">
                          {error}
                        </p>
                      )}
                      <p
                        className="w-full text-red-500 text-xs mt-2 text-start min-h-[24px] transition-opacity duration-200"
                        style={{
                          opacity: isTouched && !isFormValid ? 1 : 0,
                        }}
                      >
                        Vui lòng điền đầy đủ tất cả thông tin trước khi gửi.
                      </p>
                    </div>
                  </form>
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10"
                      >
                        <svg
                          className="w-14 h-14 text-[#E34225] mb-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <h2 className="text-base sm:text-2xl font-bold mb-2 text-center font-serif px-1 sm:px-4 leading-tight">
                          Cảm ơn Quý khách đã quan tâm.
                        </h2>
                        <p className="text-xs sm:text-base text-gray-700 text-center px-1 sm:px-4 leading-tight">
                          Chúng tôi sẽ liên hệ lại trong vòng 24 giờ tới.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

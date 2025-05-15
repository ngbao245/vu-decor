"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<string | null>(null)

  return (
    <>
      <style>{`
        .form-container {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        .form-wrapper {
          display: flex;
          flex-direction: column;
        }
        .contact-info {
          background-color: #997752;
          padding: 2rem;
          color: white;
        }
        .contact-title {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .contact-description {
          margin-bottom: 2rem;
          color: rgba(244, 237, 222, 0.9);
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
        }
        .contact-icon {
          margin-right: 1rem;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        .form {
          padding: 2rem;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .form-field {
          margin-top: 1.5rem;
        }
        .form-label {
          display: block;
          font-size: 0.875rem;
          color: #4b5563;
          margin-bottom: 0.25rem;
        }
        .form-input {
          width: 100%;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding-bottom: 0.5rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: #997752;
          border-bottom-width: 2px;
        }
        .phone-input-wrapper {
          position: relative;
        }
        .phone-icon {
          position: absolute;
          right: 0;
          bottom: 0.5rem;
          cursor: pointer;
        }
        .form-textarea {
          width: 100%;
          border: none;
          border-bottom: 1px solid #d1d5db;
          padding-bottom: 0.5rem;
          outline: none;
          transition: border-color 0.2s;
          resize: none;
        }
        .form-textarea:focus {
          border-color: #997752;
          border-bottom-width: 2px;
        }
        .radio-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .radio-input {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .radio-button {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 1px solid #9ca3af;
          margin-right: 0.5rem;
          display: inline-block;
        }
        .radio-button-active {
          background-color: #997752;
          border: 2px solid white;
          outline: 1px solid #997752;
        }
        .form-actions {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        }
        .submit-button {
          background-color: #ffaa19;
          color: white;
          font-weight: 500;
          padding: 0.75rem 2.5rem;
          border-radius: 0.25rem;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .submit-button:hover {
          opacity: 0.9;
        }
        
        @media (min-width: 768px) {
          .form-wrapper {
            flex-direction: row;
          }
          .contact-info {
            padding: 3rem;
            width: 40%;
          }
          .form {
            padding: 3rem;
            width: 60%;
          }
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <div className="form-container">
        <div className="form-wrapper">
          {/* Left side - Contact Info */}
          <div className="contact-info">
            <h2 className="contact-title">Liên Hệ Với Chúng Tôi</h2>
            <p className="contact-description">
              Quý khách có bất kỳ câu hỏi hay yêu cầu về dịch vụ, vui lòng điền vào bản thông tin ở bên để được hỗ trợ.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>+1012 3456 789</span>
              </div>

              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>demo@gmail.com</span>
              </div>

              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>
                  132 Dartmouth Street Boston,
                  <br />
                  Massachusetts 02156 United States
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="form">
            <div className="form-grid">
              <div>
                <label htmlFor="name" className="form-label">
                  Nhập tên của bạn
                </label>
                <input type="text" id="name" className="form-input" placeholder="" />
              </div>

              <div>
                <label htmlFor="gender" className="form-label">
                  Giới tính
                </label>
                <input type="text" id="gender" className="form-input" placeholder="*chính lại sau" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Nhập email của bạn
              </label>
              <input type="email" id="email" className="form-input" />
            </div>

            <div className="form-field">
              <label htmlFor="phone" className="form-label">
                Nhập số điện thoại của bạn
              </label>
              <div className="phone-input-wrapper">
                <input type="tel" id="phone" className="form-input" placeholder="+1 012 3456 789" />
                <div className="phone-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#E0E0E0" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-field">
              <p className="form-label">Lựa chọn tiêu đề</p>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="consultation"
                    checked={inquiryType === "consultation"}
                    onChange={() => setInquiryType("consultation")}
                    className="radio-input"
                  />
                  <span
                    className={`radio-button ${inquiryType === "consultation" ? "radio-button-active" : ""}`}
                  ></span>
                  <span>Hỗ trợ tư vấn</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="cooperation"
                    checked={inquiryType === "cooperation"}
                    onChange={() => setInquiryType("cooperation")}
                    className="radio-input"
                  />
                  <span className={`radio-button ${inquiryType === "cooperation" ? "radio-button-active" : ""}`}></span>
                  <span>Hợp tác</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="general1"
                    checked={inquiryType === "general1"}
                    onChange={() => setInquiryType("general1")}
                    className="radio-input"
                  />
                  <span className={`radio-button ${inquiryType === "general1" ? "radio-button-active" : ""}`}></span>
                  <span>General Inquiry</span>
                </label>

                <label className="radio-label">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="general2"
                    checked={inquiryType === "general2"}
                    onChange={() => setInquiryType("general2")}
                    className="radio-input"
                  />
                  <span className={`radio-button ${inquiryType === "general2" ? "radio-button-active" : ""}`}></span>
                  <span>General Inquiry</span>
                </label>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Nội dung liên hệ
              </label>
              <textarea
                id="message"
                rows={3}
                className="form-textarea"
                placeholder="Hãy nhập tin nhắn để được hỗ trợ !"
              ></textarea>
            </div>

            <div className="form-actions">
              <button className="submit-button">Liên hệ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

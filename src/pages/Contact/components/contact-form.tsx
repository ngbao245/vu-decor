"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      {/* Left side - Contact Info */}
      <div className="bg-[#997752] text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-6">Liên Hệ Với Chúng Tôi</h2>
          <p className="mb-8 text-[#f4edde] text-lg leading-relaxed">Quý khách có bất kỳ câu hỏi hay yêu cầu về dịch vụ, vui lòng điền vào bản thông tin ở bên để được hỗ trợ.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                <Phone size={24} className="text-[#f4edde]" />
              </div>
              <div>
                <p className="text-sm text-[#f4edde]/80">Điện thoại</p>
                <p className="text-lg font-medium">0965 99 4178</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                <Mail size={24} className="text-[#f4edde]" />
              </div>
              <div>
                <p className="text-sm text-[#f4edde]/80">Email</p>
                <p className="text-lg font-medium">vudecor24@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                <MapPin size={24} className="text-[#f4edde]" />
              </div>
              <div>
                <p className="text-sm text-[#f4edde]/80">Địa chỉ</p>
                <p className="text-lg font-medium">Vinhome Grand Park, <br/> Thủ Đức, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side - Form */}
      <form className="flex-1 p-8 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nhập tên của bạn</label>
            <input 
            placeholder="Tên của bạn"
              type="text" 
              id="name" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#997752] focus:ring-2 focus:ring-[#997752]/20 outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Giới tính</label>
            <select 
              id="gender" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#997752] focus:ring-2 focus:ring-[#997752]/20 outline-none transition-all"
            >
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Không muốn đề cập</option>
            </select>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Nhập email của bạn</label>
          <input 
          placeholder="Email của bạn"
            type="email" 
            id="email" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#997752] focus:ring-2 focus:ring-[#997752]/20 outline-none transition-all" 
          />
        </div>
        <div className="mt-6 space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nhập số điện thoại của bạn</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#997752] focus:ring-2 focus:ring-[#997752]/20 outline-none transition-all" 
            placeholder="Số điện thoại" 
          />
        </div>
        <div className="mt-6">
          <span className="block text-sm font-medium text-gray-700 mb-3">Lựa chọn tiêu đề</span>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center cursor-pointer gap-2 group">
              <div className="relative">
                <input 
                  type="radio" 
                  name="inquiryType" 
                  value="consultation" 
                  checked={inquiryType === "consultation"} 
                  onChange={() => setInquiryType("consultation")} 
                  className="peer sr-only" 
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-[#997752] peer-checked:bg-[#997752] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="text-gray-700 group-hover:text-[#997752] transition-colors">Hỗ trợ tư vấn</span>
            </label>
            <label className="flex items-center cursor-pointer gap-2 group">
              <div className="relative">
                <input 
                  type="radio" 
                  name="inquiryType" 
                  value="cooperation" 
                  checked={inquiryType === "cooperation"} 
                  onChange={() => setInquiryType("cooperation")} 
                  className="peer sr-only" 
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-[#997752] peer-checked:bg-[#997752] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="text-gray-700 group-hover:text-[#997752] transition-colors">Hợp tác</span>
            </label>
            <label className="flex items-center cursor-pointer gap-2 group">
              <div className="relative">
                <input 
                  type="radio" 
                  name="inquiryType" 
                  value="general" 
                  checked={inquiryType === "general"} 
                  onChange={() => setInquiryType("general")} 
                  className="peer sr-only" 
                />
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-[#997752] peer-checked:bg-[#997752] transition-all flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                </div>
              </div>
              <span className="text-gray-700 group-hover:text-[#997752] transition-colors">Thắc mắc chung</span>
            </label>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nội dung liên hệ</label>
          <textarea 
            id="message" 
            rows={4} 
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:border-[#997752] focus:ring-2 focus:ring-[#997752]/20 outline-none transition-all resize-none" 
            placeholder="Hãy nhập tin nhắn để được hỗ trợ !"
          ></textarea>
        </div>
        <div className="mt-8 flex justify-end">
          <button 
            type="submit" 
            className="bg-[#997752] hover:bg-[#8a6b4d] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Gửi tin nhắn
          </button>
        </div>
      </form>
    </div>
  )
}

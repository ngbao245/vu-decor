import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-5 px-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 py-4' : 'max-h-0'
                }`}
            >
                <p className="px-4 text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "Vu Decor cung cấp những dịch vụ gì?",
            answer: "Chúng tôi cung cấp dịch vụ thiết kế và thi công trọn gói, bao gồm thiết kế nội thất cho nhà ở, văn phòng, nhà hàng, khách sạn. Đội ngũ của chúng tôi sẽ đồng hành cùng bạn từ khâu tư vấn, thiết kế ý tưởng đến thi công hoàn thiện, đảm bảo không gian sống hoàn hảo theo đúng nhu cầu của bạn."
        },
        {
            question: "Quy trình làm việc của Vu Decor như thế nào?",
            answer: "Quy trình làm việc của chúng tôi gồm các bước: (1) Tư vấn và khảo sát hiện trạng, (2) Lên ý tưởng và phương án thiết kế, (3) Báo giá chi tiết, (4) Ký hợp đồng, (5) Triển khai thi công, (6) Nghiệm thu và bàn giao. Trong suốt quá trình này, chúng tôi luôn đảm bảo tính minh bạch và cập nhật tiến độ thường xuyên cho khách hàng."
        },
        {
            question: "Chi phí thiết kế và thi công được tính như thế nào?",
            answer: "Chi phí sẽ được tính dựa trên diện tích, phong cách thiết kế và yêu cầu cụ thể của từng dự án. Chúng tôi cam kết đưa ra mức giá cạnh tranh và minh bạch, với bảng báo giá chi tiết cho từng hạng mục. Khách hàng sẽ được tư vấn để lựa chọn giải pháp tối ưu nhất phù hợp với ngân sách."
        },
        {
            question: "Thời gian hoàn thành một dự án thường mất bao lâu?",
            answer: "Thời gian hoàn thành phụ thuộc vào quy mô và độ phức tạp của dự án. Thông thường, một căn hộ có diện tích 60-80m2 sẽ mất khoảng 45-60 ngày từ thiết kế đến thi công hoàn thiện. Chúng tôi luôn cố gắng tối ưu thời gian nhưng vẫn đảm bảo chất lượng công trình."
        },
        {
            question: "Vu Decor có cam kết về chất lượng và bảo hành không?",
            answer: "Có, chúng tôi cam kết sử dụng vật liệu chất lượng cao và có chính sách bảo hành rõ ràng. Thời gian bảo hành cho công trình hoàn thiện là 12 tháng, bảo hành thiết bị theo chính sách của nhà sản xuất. Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ xử lý các vấn đề phát sinh trong thời gian bảo hành."
        },
        {
            question: "Làm thế nào để bắt đầu một dự án với Vu Decor?",
            answer: "Bạn có thể liên hệ với chúng tôi qua số điện thoại 096 599 4178 hoặc email vudecor24@gmail.com. Văn phòng của chúng tôi tại Vinhomes Grand Park mở cửa từ 8h30 đến 21h hàng ngày. Đội ngũ tư vấn sẽ lắng nghe nhu cầu và sắp xếp cuộc hẹn khảo sát để đưa ra giải pháp phù hợp nhất cho không gian của bạn."
        }
    ];

    return (
        <div className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4"><span className='text-[#E34225]'>Câu Hỏi</span> Thường Gặp</h2>
                    <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6"></div>
                    <p className="text-gray-600">Tìm câu trả lời cho các câu hỏi phổ biến về các dịch vụ và quy trình của chúng tôi</p>
                </div>
                <div className="space-y-2">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ; 
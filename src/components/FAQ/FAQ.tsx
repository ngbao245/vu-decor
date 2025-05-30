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
            question: "What services do you offer?",
            answer: "We offer a comprehensive range of interior design and decoration services, including residential design, commercial spaces, renovation consulting, and custom furniture solutions."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on scope and complexity. Small projects might take 2-4 weeks, while larger renovations can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
            question: "Do you work with specific design styles?",
            answer: "We work with all design styles and can adapt to your preferences, whether it's modern, traditional, minimalist, industrial, or a unique combination. Our goal is to create spaces that reflect your personality and lifestyle."
        },
        {
            question: "What is your pricing structure?",
            answer: "Our pricing varies based on project scope, size, and requirements. We offer transparent pricing and will provide a detailed quote after our initial consultation."
        },
        {
            question: "Do you provide virtual design services?",
            answer: "Yes, we offer virtual design consultations and services for clients who prefer remote collaboration or are located outside our immediate service area."
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
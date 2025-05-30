"use client";

import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#F5F5F3] flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full bg-[#D8D3CD] rounded-xl shadow-xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Content side */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#F5F5F3]">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold text-[#2F2F2F] mb-4"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-[#6B4F3B] mb-6"
            >
              Không gian này đang được trang trí!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#2F2F2F] mb-8 text-lg"
            >
              Có vẻ như bạn đã ghé vào một không gian đang trong quá trình thiết
              kế. Hãy để chúng tôi đưa bạn về khu vực đã hoàn thiện nhé!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-2 bg-[#F5F5F3] border-2 border-[#6B4F3B] text-[#6B4F3B] hover:bg-[#e9e9e7] font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Quay Lại</span>
              </motion.button>

              <motion.button
                onClick={() => navigate("/")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-[#E34225] hover:bg-[#c9a45f] text-[#2F2F2F] font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Trang Chủ</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative side */}
          <div className="w-full md:w-2/5 bg-[#D8D3CD] p-6 flex flex-col items-center justify-center">
            <div className="relative w-full h-64 md:h-full">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(214, 178, 109, 0.3)",
                      "0px 0px 20px rgba(214, 178, 109, 0.7)",
                      "0px 0px 0px rgba(214, 178, 109, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-32 h-32 md:w-48 md:h-48 bg-[#E34225] rounded-full flex items-center justify-center"
                >
                  <Home className="w-16 h-16 md:w-24 md:h-24 text-[#2F2F2F]" />
                </motion.div>
              </motion.div>

              {/* Decorative elements with animations */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-4 left-4"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-8 h-8 bg-[#7A876D] rounded-md"
                />
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 right-4"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="w-12 h-3 bg-[#6B4F3B] rounded-full"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-1/4 right-8"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="w-6 h-6 bg-[#E34225] rounded-full"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute bottom-1/3 left-1/3"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative furniture elements at bottom */}
      <div className="mt-12 flex justify-center gap-6 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex space-x-4"
        >
          <motion.div
            animate={{ width: ["64px", "40px", "64px"] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="h-2 bg-[#7A876D] rounded-full"
          />
          <motion.div
            animate={{ width: ["40px", "80px", "40px"] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="h-2 bg-[#E34225] rounded-full"
          />
          <motion.div
            animate={{ width: ["30px", "50px", "30px"] }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="h-2 bg-[#6B4F3B] rounded-full"
          />
          <motion.div
            animate={{ width: ["50px", "30px", "50px"] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="h-2 bg-[#2F2F2F] rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

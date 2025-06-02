import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const ServiceHome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-max flex flex-col gap-6 md:gap-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h6 className="text-[#828282]">Dịch vụ</h6>
        <h1 className="text-[2rem] md:text-[2.5rem]">
          <span className="text-[#E34225]">Thiết kế</span> nội thất
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <motion.div
          className="relative h-[300px] md:h-[400px] md:col-span-2 rounded-lg bg-black/30"
          variants={floatAnimation}
          whileHover={{ scale: 1.02 }}
          animate="animate"
        >
          <div className="w-full h-full ">
            <img
              src="https://cdn.pixabay.com/photo/2018/08/09/03/58/home-3593729_1280.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-lg"></div>
          </div>

          <div className="absolute flex flex-col gap-3 md:gap-5 bottom-0 w-full text-white px-4 md:px-5 py-4 md:py-5 bg-black/30 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold">
              Thiết kế nội thất không gian sống
            </h3>
            <Button
              variant="secondary"
              color="black"
              rounded="full"
              weight="lg"
              className="hover:text-[#E34225] cursor-pointer"
              onClick={() => navigate("/projects")}
            >
              Xem thêm
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px] rounded-lg bg-black/30"
          variants={floatAnimation}
          whileHover={{ scale: 1.02 }}
          animate="animate"
        >
          <div className="w-full h-full bg-black/50">
            <img
              src="https://cdn.pixabay.com/photo/2023/09/26/09/24/apartment-8276989_1280.jpg"
              alt=""
              className="w-full h-full object-cover rounded-lg bg-black/30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-lg"></div>
          </div>
          <div className="absolute flex flex-col gap-3 md:gap-5 bottom-0 w-full text-white px-4 md:px-5 py-4 md:py-5 bg-black/30 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold">
              Cải tạo không gian
            </h3>
            <Button
              variant="secondary"
              color="black"
              rounded="full"
              weight="lg"
              className="hover:text-[#E34225] cursor-pointer"
              onClick={() => navigate("/projects")}
            >
              <FaArrowRight />
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative h-[300px] md:h-[400px] rounded-lg"
          variants={floatAnimation}
          whileHover={{ scale: 1.02 }}
          animate="animate"
        >
          <div className="w-full h-full">
            <img
              src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg"
              alt=""
              className="w-full h-full object-cover bg-left rounded-lg bg-black/30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 rounded-lg"></div>
          </div>
          <div className="absolute flex flex-col gap-3 md:gap-5 bottom-0 w-full text-white px-4 md:px-5 py-4 md:py-5 bg-black/30 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold">
              Tư vấn màu sắc <br />& phối màu
            </h3>
            <Button
              variant="secondary"
              color="black"
              rounded="full"
              weight="xl"
              className="hover:text-[#E34225] cursor-pointer"
              onClick={() => navigate('/projects')}
            >
              <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHome;

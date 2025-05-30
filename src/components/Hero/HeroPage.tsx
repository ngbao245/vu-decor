import { motion } from "framer-motion";

const HeroPage = ({
  page,
  title,
  image,
}: {
  page: string;
  title: string;
  image: string;
}) => {
  return (
    <section className=" h-[50vh]">
      <div className="relative h-[50vh] ">
        <img
          src={image}
          alt="About us header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="absolute inset-0 h-[50vh]">
        <div className="h-full flex items-center container mx-auto px-4 md:px-6 z-[10]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {page}
            </h1>
            <div className="w-20 h-1 bg-[#E34225] mx-auto mb-6"></div>
            <p className="text-xl text-white/90">{title}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;

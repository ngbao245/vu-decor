import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeroPage from "../../components/Hero/HeroPage";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

// Sample projects data - you can replace this with your actual projects
const projects: Project[] = [
  {
    id: "cc64de86-dbb1-43d0-9390-17ba24445940",
    title: "Căn GH3 - The Glory Heights",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140853/z6845124009596_bbb906055ee524167644d86ff7ae6c1b_ka6rle.jpg",
    description:
      "Căn hộ nhẹ nhàng, ấm áp sẽ được hoàn thiện bàn giao trước 2/9, chăm chút tỉ mỉ từng chi tiết để mang đến không gian sống trọn vẹn.",
  },
  {
    id: "6e16449c-799d-48e6-b7b0-64a9ed42f9f1",
    title: "Căn hộ Viva Plaza",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140777/z6861330147751_e4b962bd61bb3ffc9acb80254eba3c6d_akmms3.jpg",
    description:
      "Căn hộ Viva Plaza Quận 7 - nơi không gian nhẹ nhàng, ấm áp hòa quyện với thiết kế hiện đại đầy tinh tế, được chăm chút tỉ mỉ từng chi tiết để đem lại trải nghiệm sống thư thái và tiện nghi đẳng cấp.",
  },
  {
    id: "4a64ed59-d264-44dc-ab95-56ab74848ea9",
    title: "Căn GH1 - The Glory Heights",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669007/474764109_122117507372618470_2467975998153284394_n_wmlhd8.jpg",
    description:
      "Đang đi YEP mà nghe tin chị khách Hà Nội chốt thiết kế, mừng quá trời! Giám đốc sản xuất lên kế hoạch sẵn, ra Tết thi công liền cho kịp bàn giao.",
  },
  {
    id: "5c107602-c66b-41ef-a69c-90acc4e9fea7",
    title: "Bếp Căn BS10 - The Beverly Solari",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668236/498166510_122133969518618470_2852905110698745605_n_smvs7u.jpg",
    description:
      "Vu Decor tin rằng căn bếp không chỉ đẹp mà còn là nơi giữ lửa yêu thương – nơi cả nhà quây quần, tái tạo năng lượng sau một ngày dài.",
  },
  {
    id: "7e164cb1-49d5-4709-b53d-7a92c7a65320",
    title: "Căn BE1 - The Beverly Vinhomes",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/473806759_122117412578618470_1205087045803481247_n_jltlsj.jpg",
    description:
      "Hình ảnh thực tế căn 1PN những ngày cuối năm, Vu Decor hoàn thiện đúng tiến độ và chất lượng để khách hàng đón Tết Ất Tỵ 2025 trọn vẹn.",
  },
];

export const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    // <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="min-h-screen">
      <div>
        <HeroPage
          page="Dự án của chúng tôi"
          title="VuDecor là công ty thiết kế nội thất chuyên tạo ra những không gian thanh lịch và tiện dụng, 
                    phản ánh tính cách và phong cách độc đáo của mỗi khách hàng."
          image="https://assets.architecturaldigest.in/photos/62026064b5d9eefa7e4e2ddf/16:9/w_1615,h_908,c_limit/How%20to%20furnish%20your%20home%20on%20a%20budget.jpg"
        />
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 transition-colors duration-300 group-hover:bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#E34225]">
                  {project.title}
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700 text-justify">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

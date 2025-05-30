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
    id: "7e164cb1-49d5-4709-b53d-7a92c7a65320",
    title: "Căn BE1 - The Beverly Vinhomes",
    image:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/470618028_122112537152618470_3580512490494805686_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=26tThRdEFGcQ7kNvwHtf0z_&_nc_oc=Adkgxj-JRZrzH8qc_cYLZa9ajqRUNnz9_ZmcxCp0fJbTIQ6Ma0eblmi-4AD-nE1EOJU&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=NZdarDTYL59BJWkpdyWNxQ&oh=00_AfLUimS-A_pwqexN4Y2557edSJ5RBNkaT1OILIj0l2S0vw&oe=6838D75A",
    description:
      "Hình ảnh thực tế căn 1PN những ngày cuối năm, Vu Decor hoàn thiện đúng tiến độ và chất lượng để khách hàng đón Tết Ất Tỵ 2025 trọn vẹn.",
  },
  {
    id: "4a64ed59-d264-44dc-ab95-56ab74848ea9",
    title: "Căn GH1 - The Glory Heights",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473526944_122117507252618470_8918935857155496066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rQiJSDX5q3UQ7kNvwGRRSoQ&_nc_oc=Adk32e6D5NnRfQKQdHm_bzaQJABTqOrb1jQBnXrn6LP6xoJU3r7yeKo_K62JYZXJ_oqHwu28HPJ76KVofw9JVsCu&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=RdKpas1QsRm78_I9hA36BQ&oh=00_AfLG8dE36WL0Am3JY7L54Obv4HEU6Tw21M5Hpk0D_qTelg&oe=683355D2",
    description:
      "Đang đi YEP mà nghe tin chị khách Hà Nội chốt thiết kế, mừng quá trời! Giám đốc sản xuất lên kế hoạch sẵn, ra Tết thi công liền cho kịp bàn giao.",
  },
  {
    id: "5c107602-c66b-41ef-a69c-90acc4e9fea7",
    title: "Bếp Căn BS10 - The Beverly Solari",
    image:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/499221817_122133969560618470_7542221533059836553_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6sNxBnHRc-gQ7kNvwHbZQ8Q&_nc_oc=AdlJDrN7UZzZyHg9NU-eN_99Lim-PwxohAYyauFNtY9SBSiF0vK3jMnK75TFSbE0AfU&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=0qYNjhm2GSuFRkfSHCQ0Hg&oh=00_AfLsRF7G0bH__j00J6k25gbUeWS6bbpbg3-qIHsCyQ81nw&oe=6833EB28",
    description:
      "Vu Decor tin rằng căn bếp không chỉ đẹp mà còn là nơi giữ lửa yêu thương – nơi cả nhà quây quần, tái tạo năng lượng sau một ngày dài.",
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
    <div className="min-h-screen text-justify">
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
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{project.description}</p>
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

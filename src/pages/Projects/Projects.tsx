import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

// Sample projects data - you can replace this with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "The Beverly Vinhomes",
    image:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/473806759_122117412578618470_1205087045803481247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kEN9x-ZpxtYQ7kNvwHQJnqn&_nc_oc=AdmcEQOCPCG8fN_4t-qZ2N4qVqBES7DM5ZM3ZmKoSoaIS2K7do_9st0N8uUtlg5C7V8&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=hBE3_npexKkOls6XsYM28w&oh=00_AfI4hRw4PHy8dvZdbEIcZuPAm4LwRQsr8lGhHrVUuKGhsg&oe=68329F33",
    description:
      "Hình ảnh thực tế căn 1PN những ngày cuối năm, Vu Decor hoàn thiện đúng tiến độ và chất lượng để khách hàng đón Tết Ất Tỵ 2025 trọn vẹn.",
  },
  {
    id: 2,
    title: "Kitchen Renovation",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473526944_122117507252618470_8918935857155496066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rQiJSDX5q3UQ7kNvwGRRSoQ&_nc_oc=Adk32e6D5NnRfQKQdHm_bzaQJABTqOrb1jQBnXrn6LP6xoJU3r7yeKo_K62JYZXJ_oqHwu28HPJ76KVofw9JVsCu&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=RdKpas1QsRm78_I9hA36BQ&oh=00_AfLG8dE36WL0Am3JY7L54Obv4HEU6Tw21M5Hpk0D_qTelg&oe=683355D2",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Bedroom Design",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  // Add more projects as needed
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12 pt-5 capitalize"
        >
          Dự án của chúng tôi
        </motion.h1>

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
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
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

import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Ruler,
  Users,
  Home,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  details?: {
    location: string;
    area: string;
    duration: string;
    features: string[];
    images: string[];
    client: string;
    style: string;
    color: string[];
    challenges: string[];
    solutions: string[];
  };
}

// Sample projects data - replace with your actual data
const projects: Project[] = [
  {
    id: 1,
    title: "The Beverly Vinhomes",
    image:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/473806759_122117412578618470_1205087045803481247_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kEN9x-ZpxtYQ7kNvwHQJnqn&_nc_oc=AdmcEQOCPCG8fN_4t-qZ2N4qVqBES7DM5ZM3ZmKoSoaIS2K7do_9st0N8uUtlg5C7V8&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=hBE3_npexKkOls6XsYM28w&oh=00_AfI4hRw4PHy8dvZdbEIcZuPAm4LwRQsr8lGhHrVUuKGhsg&oe=68329F33",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    details: {
      location: "Toà BE1 Quận 9, TP. Hồ Chí Minh",
      area: "45m²",
      duration: "2 months",
      client: "Mr. & Mrs. Nguyen",
      style: "Modern Minimalist",
      color: ["#2C3E50", "#ECF0F1", "#E74C3C", "#3498DB"],
      features: [
        "Custom furniture design",
        "Smart lighting system",
        "Built-in storage solutions",
        "Modern art integration",
        "Acoustic wall panels",
        "Automated window treatments",
      ],
      challenges: [
        "Limited natural light",
        "Irregular room shape",
        "Need for multifunctional space",
      ],
      solutions: [
        "Strategic mirror placement",
        "Custom curved furniture",
        "Modular storage system",
      ],
      images: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
      ],
    },
  },
  {
    id: 2,
    title: "The Glory Heights",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473526944_122117507252618470_8918935857155496066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rQiJSDX5q3UQ7kNvwGRRSoQ&_nc_oc=Adk32e6D5NnRfQKQdHm_bzaQJABTqOrb1jQBnXrn6LP6xoJU3r7yeKo_K62JYZXJ_oqHwu28HPJ76KVofw9JVsCu&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=RdKpas1QsRm78_I9hA36BQ&oh=00_AfLG8dE36WL0Am3JY7L54Obv4HEU6Tw21M5Hpk0D_qTelg&oe=683355D2",
    description: "Contemporary living room design with minimalist furniture",
    details: {
      location: "District 1, Ho Chi Minh City",
      area: "45m²",
      duration: "2 months",
      client: "Mr. & Mrs. Nguyen",
      style: "Modern Minimalist",
      color: ["#2C3E50", "#ECF0F1", "#E74C3C", "#3498DB"],
      features: [
        "Custom furniture design",
        "Smart lighting system",
        "Built-in storage solutions",
        "Modern art integration",
        "Acoustic wall panels",
        "Automated window treatments",
      ],
      challenges: [
        "Limited natural light",
        "Irregular room shape",
        "Need for multifunctional space",
      ],
      solutions: [
        "Strategic mirror placement",
        "Custom curved furniture",
        "Modular storage system",
      ],
      images: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
      ],
    },
  },
  {
    id: 3,
    title: "Modern Living Room",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
    description: "Contemporary living room design with minimalist furniture",
    details: {
      location: "District 1, Ho Chi Minh City",
      area: "45m²",
      duration: "2 months",
      client: "Mr. & Mrs. Nguyen",
      style: "Modern Minimalist",
      color: ["#2C3E50", "#ECF0F1", "#E74C3C", "#3498DB"],
      features: [
        "Custom furniture design",
        "Smart lighting system",
        "Built-in storage solutions",
        "Modern art integration",
        "Acoustic wall panels",
        "Automated window treatments",
      ],
      challenges: [
        "Limited natural light",
        "Irregular room shape",
        "Need for multifunctional space",
      ],
      solutions: [
        "Strategic mirror placement",
        "Custom curved furniture",
        "Modular storage system",
      ],
      images: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
      ],
    },
  },
  // Add more projects as needed
];

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.details?.images) {
      const newIndex =
        (currentImageIndex - 1 + project.details.images.length) %
        project.details.images.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage(project.details.images[newIndex]);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.details?.images) {
      const newIndex = (currentImageIndex + 1) % project.details.images.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage(project.details.images[newIndex]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-center max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate("/projects")}
          className="absolute top-6 left-6 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Project Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
          >
            <MapPin className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Location</p>
              <p className="font-semibold">{project.details?.location}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
          >
            <Ruler className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-gray-500 text-sm">Area</p>
              <p className="font-semibold">{project.details?.area}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
          >
            <Calendar className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <p className="font-semibold">{project.details?.duration}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4"
          >
            <Users className="w-8 h-8 text-orange-600" />
            <div>
              <p className="text-gray-500 text-sm">Client</p>
              <p className="font-semibold">{project.details?.client}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-blue-600" />
                Project Overview
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Style</p>
                  <p className="font-semibold">{project.details?.style}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Color Palette</p>
                  <div className="flex gap-2 mt-2">
                    {project.details?.color.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                Challenges & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.details?.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <span className="text-red-600">•</span>
                        <span className="text-gray-600">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.details?.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <span className="text-green-600">•</span>
                        <span className="text-gray-600">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Gallery */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="bg-white rounded-xl shadow-lg p-8 sticky top-8"
            >
              <h3 className="text-xl font-semibold mb-6">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.details?.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={handleCloseLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={handleCloseLightbox}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={handlePreviousImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected project image"
                className="max-w-full max-h-[90vh] object-contain"
              />
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {project.details?.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

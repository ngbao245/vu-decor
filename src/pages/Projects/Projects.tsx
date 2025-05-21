import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        title: "Modern Living Room",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
        description: "Contemporary living room design with minimalist furniture"
    },
    {
        id: 2,
        title: "Kitchen Renovation",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000",
        description: "Complete kitchen makeover with modern appliances"
    },
    {
        id: 3,
        title: "Bedroom Design",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000",
        description: "Cozy bedroom with custom furniture"
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
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center text-gray-900 mb-12"
                >
                    Our Projects
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
                                <p className="text-gray-600">
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
                                <p className="text-gray-600">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
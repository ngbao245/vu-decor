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
  id: string;
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
    id: "7e164cb1-49d5-4709-b53d-7a92c7a65320",
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
        "Thiết kế nội thất theo yêu cầu",
        "Hệ thống chiếu sáng thông minh",
        "Giải pháp lưu trữ âm tường",
        "Kết hợp nghệ thuật hiện đại",
        "Tấm tường cách âm",
      ],
      challenges: [
        "Thiếu ánh sáng tự nhiên",
        "Hình dạng phòng không vuông vức",
        "Cần không gian đa chức năng",
      ],
      solutions: [
        "Bố trí gương hợp lý",
        "Nội thất bo cong thiết kế riêng",
        "Hệ thống lưu trữ dạng mô-đun",
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
    id: "4a64ed59-d264-44dc-ab95-56ab74848ea9",
    title: "The Glory Heights",
    image:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473526944_122117507252618470_8918935857155496066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rQiJSDX5q3UQ7kNvwGRRSoQ&_nc_oc=Adk32e6D5NnRfQKQdHm_bzaQJABTqOrb1jQBnXrn6LP6xoJU3r7yeKo_K62JYZXJ_oqHwu28HPJ76KVofw9JVsCu&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=RdKpas1QsRm78_I9hA36BQ&oh=00_AfLG8dE36WL0Am3JY7L54Obv4HEU6Tw21M5Hpk0D_qTelg&oe=683355D2",
    description:
      "Đang đi YEP bên cồn mà nghe đồn chị Khách Hà Nội đã chốt được phần thiết kế, ta nói trong lòng nô nức rộn ràng hihi, thế là giám đốc sản xuất vừa được ăn tết vừa đựợc lên kế hoạch sản xuất cho anh em ra tết chạy vèo vèo bàn giao cho chị hen☺️\n\nBật mí đây là căn thứ hai Vu Decor thực hiện cho chị Khách đó nha mọi người, đội ngũ rất hạnh phúc khi tiếp tục được chị lựa chọn.\n\nĐừng quên chúng mình nhận thiết kế và thi công nhoa!",
    details: {
      location: "Quận 9, TP. Hồ Chí Minh",
      area: "45m²",
      duration: "2 tháng",
      client: "anh Nguyên",
      style: "Modern Minimalist",
      color: ["#2C3E50", "#ECF0F1", "#E74C3C", "#3498DB"],
      features: [
        "Thiết kế nội thất theo yêu cầu",
        "Hệ thống chiếu sáng thông minh",
        "Giải pháp lưu trữ âm tường",
        "Kết hợp nghệ thuật hiện đại",
      ],
      challenges: [
        "Thiếu ánh sáng tự nhiên",
        "Hình dạng phòng không vuông vức",
        "Cần không gian đa chức năng",
      ],
      solutions: [
        "Bố trí gương hợp lý",
        "Nội thất bo cong thiết kế riêng",
        "Hệ thống lưu trữ dạng mô-đun",
      ],
      images: [
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473526944_122117507252618470_8918935857155496066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rQiJSDX5q3UQ7kNvwGRRSoQ&_nc_oc=Adk32e6D5NnRfQKQdHm_bzaQJABTqOrb1jQBnXrn6LP6xoJU3r7yeKo_K62JYZXJ_oqHwu28HPJ76KVofw9JVsCu&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=RdKpas1QsRm78_I9hA36BQ&oh=00_AfLG8dE36WL0Am3JY7L54Obv4HEU6Tw21M5Hpk0D_qTelg&oe=683355D2",
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473527516_122117507396618470_5542111533382416441_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nV0YwZOR0JoQ7kNvwF7uJIm&_nc_oc=AdkaZQErfP6LHW5HodcF8gSH3OqtlW3IbLuH7Nu038PTDG-0p5Dt4563nzepl0lGqaoeCIbqyxLeMIEqcfuE2olz&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=FizoV63pXJG_DU8mbmcE3g&oh=00_AfIr9ifF1GBlJt0hg0AuE0tsQmB7rP7KDZEWOg6DWKTRxw&oe=68336819",
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/474693850_122117507408618470_6833572208990826419_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XvzkVUhNWk4Q7kNvwHJow2G&_nc_oc=AdnyzcYIkL_abm7gm5r9wno8vJnE_-CBQGc3vzPgfZXlBavKARQhCt_jDR7VqX7bbEPQ_VK2Oj8sTZ5Xijrh7UTO&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=CaKxoLXM_5KLFFc6ctD6Dg&oh=00_AfL5rYUUcmX7FV1HQF0re2iGzHK-a9wVgouSyIiUH3g8ag&oe=68334F29",
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/474764109_122117507372618470_2467975998153284394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NmwG3_x4LwkQ7kNvwHbaa_R&_nc_oc=Adndmmv6DkWx8cXBQ2X_FT6-4-Uo-e6pCjDgwZsCFa9z175JEH3zp0w8k3ZdpyVMfZ6fHRL18mFZtYM3d2Ed5MpQ&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=MlwBMhz5WLh98JlDms-6DQ&oh=00_AfIh-KzwGnJuiyp4CZI7MMDqZBsR3GPR3E-I1xrWV5nZNg&oe=683373B2",
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/474635398_122117507678618470_2300152676572287118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ee4H5huWYiIQ7kNvwEFNFJx&_nc_oc=AdlIeP4wDNs3PJkXoTcIcWmZPkOV3CWD09BJbJ4I4U_ybUv8Lti_IH9UQMH-LYPe5bVZCjGV9IzPubrneSocLO1F&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=x67ADXzpt95niuZB1yjPHQ&oh=00_AfJQdbJ8Xu5YffwfCvgSCgKI1B7V4Jzj9CrKsxanv9dAhA&oe=68336E91",
        "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/474745664_122117507288618470_6984210968044790840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0kZYGFKi-FcQ7kNvwGNIZHD&_nc_oc=AdlsJepTOKIWDmbeu22tkzII9EXOWvfxLhg4XvzrsPx4g4cKXDTuPKtvLujwcTsLjhWVUK8eWchV5Ee6gucEC1C4&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=6fTyTkFS-q7RBnxYzHDJOQ&oh=00_AfLhvIHblI_m0VSrC0-uonOp07-BoYVvJQ9CD7nJK5h8zg&oe=68336678",
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/474757402_122117507606618470_5740428839371742761_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jfiI4_DSSckQ7kNvwFo7IYN&_nc_oc=Adn1bJ9fCu68E0a0fQpawCRqnat5qeYn0DruD8M4ZpHJJuyH0TZ1_bK5Z8zYMKjtiiXWgzuXz7W_rj5FKq9PcLek&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=-VRsvMTlfaRCRi70nI8Ggg&oh=00_AfL00s42KppZQRLCsTnl9HcpDFAdIXxP5s5Xy9W7M5xZnw&oe=68337C24",
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473526882_122117507666618470_3369083212097705845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YTERVuSPwVkQ7kNvwHHCgab&_nc_oc=AdlWodWTZtcGIvjTcVo60Txu7YGytKRfRD0SmqF7aCstzbhtAhqVN8oSQT48aebeKOzh-xmTOQUE_1IBcRL7UldE&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=G0Nj7GZgWieS2GCEya6zlg&oh=00_AfJSSv8gYDGKZH5xk8LHeDkTgLzhiJX3ZQRksRqbiGP9OQ&oe=68335204",
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/474256557_122117507264618470_2458993751385876198_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y-brZ1w9qhAQ7kNvwE_OElV&_nc_oc=AdnXky5DaBbJB6gdWffE3q2SzxQS-8qI_L14xTHqh5Ckx0ROvkOZ12gGxQ-OHiviwuwulS1FvGnOZi_H0ZjA8QuI&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=_Tl1aKVdRjlIRO5FLmFUsQ&oh=00_AfIS9UOgyfJa3tLBlh6U86zCnEb-iVXm9-AjuFJA1m7ljw&oe=6833650D",
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/473528799_122117507720618470_1685065332290092137_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eVexQ7rcYDAQ7kNvwEUdrzB&_nc_oc=AdkBJxrz1VcJa-XdNGEyJbiUBc3Pm3wbQVmT1e5H9YD42SN-TWqq9SIQRbC9YQ8jYq7_I903NYcBVWHpXqaPjGcw&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=e2HRQlf5UVxyElErFOoUuA&oh=00_AfLvkL1JRvXClGBWJCOaM7bXbbnLv095oksjB_MiJRU5ZA&oe=6833598B",
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/474762578_122117507498618470_796406394774957181_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U4kSd9rDksYQ7kNvwFvoRvB&_nc_oc=AdltfCsqHoKR18D-tXUknBkXE0Od_MrnHye9Y4Py7e10Dw-bFLfGXIWvsHSfD2euowetuvvBSYMS3L_3OkPVtC5h&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=c70Vwhqxvi5oV9kZpsk74g&oh=00_AfIq8LwqSrVTBQGRQJpD0taxtkipcAB8xcnJtbjTNwu38Q&oe=68335823",
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/474699701_122117507450618470_2758433090803825961_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ELd3eXCOuisQ7kNvwGjmD5P&_nc_oc=Adm5wZBiun79fbLpizCdK6UHK2l89hp_HphYathaFAAumPs54DfFJxVWd1E6pftPAN8V_q7fv76pRUQWJcHV4Sha&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=uY-e5_n4QFvfB12LRpQ6-Q&oh=00_AfLqwnONh3zmZgLh4vi3yFM14Q9MrGiT9toTHE5J6JwwAg&oe=6833663B",
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/473808180_122117507276618470_1894949370043405865_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pa6UU8_KSiQQ7kNvwG0i-B4&_nc_oc=AdmWZfsSZ5Ga5S5oW96yfDu0ty7lYPnLOsiVSFhWF-j9nvQ4jKfTlMxRAfhoYAJhmesvZC6d0HxGtj9Kz_Ynkiyo&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=PUICru0lqosPR0kvgr_fIw&oh=00_AfJ_EzqycW3fV1KsB0TXsVuB-jvUvFVqIWVBrpUkYBj25w&oe=68335CE8",
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473442957_122117507588618470_6526909686666761724_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KE1jqnEp8asQ7kNvwE_ZFrn&_nc_oc=AdlF4oRZyWDV6fw9Tm7SU6QugjoxAlssXEcMkcp6YJ2S-PBkz8y4o-EUchWgqe9IurSe3uPijoBBWQ4y_WQi3WoZ&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=rKXMnjBUp-Ix1GxU8cIyWA&oh=00_AfJIYk6qmtgDb-jZPmekeNaPlOYhmB4QcsypTP0pPImnyg&oe=68335253",
        "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/473807765_122117507360618470_2621310494850892689_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M2CJ94CcVwYQ7kNvwGiNjzQ&_nc_oc=Adn9TwCgl0ALbqTaNrXbTRTqTSx4GkyYC_IeoxUYC53DMzUFk6ciORSmlfanpGFHHeMS-CnVyIwK_Ul5TWoymDo9&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=a0CBYvw1bgmBMWZwF1nhdg&oh=00_AfJ-tfVm8Pr9qlzFe_zclz37kabDfmPFPdriX877omPARQ&oe=683346FA",
      ],
    },
  },
  {
    id: "3",
    title: "Modern Living Room",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    details: {
      location: "District 1, Ho Chi Minh City",
      area: "45m²",
      duration: "2 months",
      client: "Mr. & Mrs. Nguyen",
      style: "Modern Minimalist",
      color: ["#2C3E50", "#ECF0F1", "#E74C3C", "#3498DB"],
      features: [
        "Thiết kế nội thất theo yêu cầu",
        "Hệ thống chiếu sáng thông minh",
        "Giải pháp lưu trữ âm tường",
        "Kết hợp nghệ thuật hiện đại",
      ],
      challenges: [
        "Thiếu ánh sáng tự nhiên",
        "Hình dạng phòng không vuông vức",
        "Cần không gian đa chức năng",
      ],
      solutions: [
        "Bố trí gương hợp lý",
        "Nội thất bo cong thiết kế riêng",
        "Hệ thống lưu trữ dạng mô-đun",
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
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

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

  // Calculate pagination
  const totalPages = project.details?.images
    ? Math.ceil(project.details.images.length / imagesPerPage)
    : 0;

  const currentImages = project.details?.images
    ? project.details.images.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
      )
    : [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
          ></motion.p>
        </div>
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate("/projects")}
          className="absolute top-18 left-6 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
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
              <p className="text-gray-500 text-sm">Vị Trí</p>
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
              <p className="text-gray-500 text-sm">Diện Tích</p>
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
              <p className="text-gray-500 text-sm">Thời Gian Thực Hiện</p>
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
              <p className="text-gray-500 text-sm">Khách Hàng</p>
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
              className="bg-white rounded-xl shadow-lg p-8 capitalize"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-blue-600" />
                Tổng quan dự án
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Phong cách thiết kế</p>
                  <p className="font-semibold">{project.details?.style}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Bảng phối màu </p>
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
                Tính năng
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
              <h2 className="text-2xl font-bold mb-6">Khó khăn & giải pháp</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">
                    Khó khăn
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
                    Giải pháp
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
          <div className="lg:col-span-1 select-none">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="bg-white rounded-xl shadow-lg p-8 sticky top-8"
            >
              <h3 className="text-xl font-semibold mb-6">Trưng bày dự án</h3>
              <div className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                  {currentImages.map((image, index) => (
                    <motion.div
                      key={`${currentPage}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
                      onClick={() =>
                        handleImageClick(
                          image,
                          (currentPage - 1) * imagesPerPage + index
                        )
                      }
                    >
                      <img
                        src={image}
                        alt={`Project image ${
                          (currentPage - 1) * imagesPerPage + index + 1
                        }`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Trước
                  </motion.button>
                  
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={currentPage}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-600"
                    >
                      Trang {currentPage} / {totalPages}
                    </motion.span>
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Sau
                  </motion.button>
                </div>
              )}
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

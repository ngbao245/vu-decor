import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Ruler,
  Users,
  Home,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  TrafficCone,
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

const projects: Project[] = [
  {
    id: "7e164cb1-49d5-4709-b53d-7a92c7a65320",
    title: "Căn BE1 - The Beverly Vinhomes",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/470179083_122111718866618470_4964193957081971556_n_dko0aa.jpg",
    description:
      'Hình ảnh thực tế từ công trình của căn 1pn, những ngày cuối năm ai ai cũng tốc độ hoàn thành những công việc cuối cùng để chính thức đón Tết Ất Tỵ 2025, đội ngũ nhà Vu Decor cũng vậy, đảm bảo đúng tiến độ, chất lượng cho khách để anh em đều có cái "Tết đong đầy"✨',
    details: {
      location: "Căn BE1, Quận 9,\nTP. Hồ Chí Minh",
      area: "45m²",
      duration: "1 tháng",
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
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/473806759_122117412578618470_1205087045803481247_n_jltlsj.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668664/474163971_122117412554618470_6285346111792169121_n_v93brk.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668664/474702606_122117412638618470_9085434426572049700_n_orm8ff.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/473522308_122117412542618470_2171786139999124298_n_kayhz0.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/470236959_122111718662618470_8354748329989370045_n_dm3v7j.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/470179083_122111718866618470_4964193957081971556_n_dko0aa.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668663/470207962_122111718308618470_1443124588074599849_n_jyzegj.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668662/470167834_122111718584618470_2046871624640909778_n_irbjuf.jpg",
      ],
    },
  },
  {
    id: "4a64ed59-d264-44dc-ab95-56ab74848ea9",
    title: "Căn GH1 - The Glory Heights",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669007/474764109_122117507372618470_2467975998153284394_n_wmlhd8.jpg",
    description:
      "Đang đi YEP bên cồn mà nghe đồn chị Khách Hà Nội đã chốt được phần thiết kế, ta nói trong lòng nô nức rộn ràng hihi, thế là giám đốc sản xuất vừa được ăn tết vừa đựợc lên kế hoạch sản xuất cho anh em ra tết chạy vèo vèo bàn giao cho chị hen☺️\n\nBật mí đây là căn thứ hai Vu Decor thực hiện cho chị Khách đó nha mọi người, đội ngũ rất hạnh phúc khi tiếp tục được chị lựa chọn.\n\nĐừng quên chúng mình nhận thiết kế và thi công nhoa!",
    details: {
      location: "Căn GH1, Quận 9,\nTP. Hồ Chí Minh",
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
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669015/495461037_122131508624618470_8468045824133995839_n_hldood.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669012/495037842_122131508570618470_4086890529871778401_n_okyubd.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668984/473526944_122117507252618470_8918935857155496066_n_hupiyd.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669010/495003192_122131508924618470_4839603948637284212_n_mk3xfy.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669008/494910056_122131508822618470_1834109329452996836_n_ys8diy.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669007/474764109_122117507372618470_2467975998153284394_n_wmlhd8.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669002/474635398_122117507678618470_2300152676572287118_n_kocp4r.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668990/473527516_122117507396618470_5542111533382416441_n_glwfwy.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669003/474693850_122117507408618470_6833572208990826419_n_lmgraw.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668999/473528799_122117507720618470_1685065332290092137_n_lhdgum.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669005/474745664_122117507288618470_6984210968044790840_n_roeki2.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669009/494920108_122131508654618470_8964154820094277942_n_rqriee.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669006/474762578_122117507498618470_796406394774957181_n_ofyozj.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669004/474699701_122117507450618470_2758433090803825961_n_lyntw3.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669000/473808180_122117507276618470_1894949370043405865_n_q8zwpc.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669000/473807765_122117507360618470_2621310494850892689_n_zpaq81.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668984/473526882_122117507666618470_3369083212097705845_n_mh2jkp.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669001/474256557_122117507264618470_2458993751385876198_n_qqb4sf.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669006/474757402_122117507606618470_5740428839371742761_n_jfklht.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668984/473442957_122117507588618470_6526909686666761724_n_wrdaj8.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669013/495307403_122131508618618470_6386607100362867728_n_dvry78.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748669014/495341203_122131508660618470_5321181397266787130_n_fzmrgv.jpg",
      ],
    },
  },
  {
    id: "5c107602-c66b-41ef-a69c-90acc4e9fea7",
    title: "Bếp Căn BS10 - The Beverly Solari",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668236/498166510_122133969518618470_2852905110698745605_n_smvs7u.jpg",
    description:
      'Vu Decor tin rằng căn bếp không chỉ là nơi thể hiện tính thẩm mỹ cho căn nhà mà còn là "nơi giữ lửa" cho gia đình, còn điều gì tuyệt vời hơn sau một ngày dài làm việc ta được trở về ăn bữa cơm với người mình yêu thương, nuôi dưỡng cơ thể bằng những bữa ăn lành mạnh, tái tạo lại năng lượng và lại bắt đầu một ngày mới.',
    details: {
      location: "Quận 9,\nTP. Hồ Chí Minh",
      area: "45m²",
      duration: "1 tuần",
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
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668237/499339264_122133969530618470_3095973869182188006_n_aate60.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668237/499221817_122133969560618470_7542221533059836553_n_fmh95r.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668236/498166510_122133969518618470_2852905110698745605_n_smvs7u.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668237/499378682_122133969590618470_3366880959960670107_n_ps3ps9.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668236/498213824_122133969548618470_6851937525598168220_n_ejbn4b.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1748668237/498176785_122133969596618470_7196264313840046581_n_laclhb.jpg",
      ],
    },
  },
  {
    id: "cc64de86-dbb1-43d0-9390-17ba24445940",
    title: "Căn GH3 - The Glory Heights",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140853/z6845124009596_bbb906055ee524167644d86ff7ae6c1b_ka6rle.jpg",
    description:
      "Một không gian nhẹ nhàn và ấm áp sẽ được hoàn chỉnh bàn giao trước lễ Quốc Khánh 2/9, làm việc ngoài kiếm tiền ra nó phải là sự đam mê tột cùng, mỗi ngôi nhà mỗi không gian sống phải được cắt ghép thi công một cách chỉnh chu và tỉ mĩ, đem lại sự hài lòng cho bản thân- cho khách hàng hiện tại và hướng tới những khách hàng tìm năng",
    details: {
      location: "Quận 9,\nTP. Hồ Chí Minh",
      area: "45m²",
      duration: "1 tháng",
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
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140853/z6845124009596_bbb906055ee524167644d86ff7ae6c1b_ka6rle.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140854/z6845124087716_35024a66173edf9d4da92526233906e2_fxwysa.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140854/z6845124049019_cac789b7cb8d7a2fbb55cfc12fc8d523_sdddks.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140849/z6845123780366_e56be07fa8e4836003d8193054d0441d_z4xcru.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140854/z6845123972922_c94c446cb70fed7086d2afe8570af6d2_q4ww9m.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140855/z6845123819663_ef756817f5991e010a6e3bca199275e7_nvstov.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140852/z6845123933148_e6958e6aae7ae0985fcca71767846288_ako20f.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140851/z6845123896218_50376dff2c668012b9b641c443481043_nw1p09.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140862/z6845123896130_70ec828a7bce2f8e75847544e5cba82c_yllifg.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140850/z6845123856967_29dc7179ce914484fbee1948d8ee00fa_ex6ozj.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140847/z6845123666609_7b2bf9d271dfaea8c3b5bb9973ef95dd_nc2ggv.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140850/z6845123666597_8ae875b001c408e8f8ce7581f573a557_l8wuef.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140854/z6845123666611_eedc054d36209eb3d9106e930991f3d6_lo7y24.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140849/z6845123743927_56daea1b276ae2b37119bcb16c37c606_tpmo2p.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140848/z6845123703307_2718dea5002d83463c81cc2e8ce8d750_cx2ego.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140848/z6845123703211_3574575fa6623fcb6a09fb321ae67653_g3oliq.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140862/z6845124431974_4e43e776153485ad013913c09aea8965_fsjigp.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140855/z6845124125452_ad129eb2ad69116f9a45617856f27955_jv8un6.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140857/z6848554581964_90735f9c692f062e1afbf0eb64cc0340_vscneo.jpg",
      ],
    },
  },
  {
    id: "6e16449c-799d-48e6-b7b0-64a9ed42f9f1",
    title: "Căn hộ Viva Plaza",
    image:
      "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140862/z6845123896130_70ec828a7bce2f8e75847544e5cba82c_yllifg.jpg",
    description:
      "Viva Plaza Quận 7 tọa lạc ngay mặt tiền đường Nguyễn Lương Bằng – vị trí trung tâm kết nối dễ dàng đến Phú Mỹ Hưng và các tiện ích cao cấp như trung tâm thương mại, bệnh viện, trường học quốc tế. Dự án mang đến không gian sống hiện đại, nhẹ nhàng và ấm áp, được thiết kế tối ưu công năng, phù hợp cho gia đình trẻ và người độc thân. \n\nVới tiến độ thi công đảm bảo, các căn hộ đang được hoàn thiện tỉ mỉ, chỉnh chu từng chi tiết và dự kiến bàn giao trước lễ Quốc Khánh 2/9. Viva Plaza không chỉ là nơi ở, mà còn là lựa chọn lý tưởng để an cư và đầu tư sinh lời bền vững tại trung tâm Quận 7.",
    details: {
      location: "Quận 7,\nTP. Hồ Chí Minh",
      area: "45m²",
      duration: "1 tháng",
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
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140765/z6861330152449_7c319eba90e8f3f4884a6bcfd0a416d8_fwvpue.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140770/z6861330149073_b2729b930f93919253cd1b2dd66af55e_jekxsh.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140769/z6861330145945_98cf0f51105c97eea39ac7b758da259d_oxsbmg.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140777/z6861330147751_e4b962bd61bb3ffc9acb80254eba3c6d_akmms3.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140770/z6861330141934_c329f8f8fc9545abc3d4a2e1a450d1b5_oxsiqo.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140769/z6861330147500_905e11b71f22a44686d3194483f20735_i1qutw.jpg",
        "https://res.cloudinary.com/dkx0y97jo/image/upload/v1754140769/z6861330136357_591dc80d90c160a1acad3879000ee15b_wz0czj.jpg",
      ],
    },
  },
  // Add more projects as needed
];

export const ProjectDetail = () => {
  const { id } = useParams();
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
      className="min-h-screen bg-gray-50 whitespace-pre-wrap"
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
        {/* <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate("/projects")}
          className="fixed top-1/2 -translate-y-1/2 left-6 z-50 bg-[#E34225] p-3 rounded-full shadow-lg backdrop-blur-sm 
          hover:bg-[#9d7e3b] hover:text-black transform hover:scale-110 transition-all duration-300 ease-in-out
          group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform duration-300" />
        </motion.button> */}
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
            <MapPin className="w-8 h-8 text-[#E34225]" />
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
            <Ruler className="w-8 h-8 text-[#E34225]" />
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
            <Calendar className="w-8 h-8 text-[#E34225]" />
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
            <Users className="w-8 h-8 text-[#E34225]" />
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
              className="bg-white rounded-xl shadow-lg p-8 "
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-[#E34225]" />
                Tổng quan dự án
              </h2>
              <p className=" mb-6 leading-relaxed">{project.description}</p>

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
                <CheckCircle2 className="w-5 h-5 mr-2 text-[#E34225]" />
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
                    <CheckCircle2 className="w-5 h-5 text-[#E34225] flex-shrink-0" />
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
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TrafficCone className="w-6 h-6 mr-2 text-[#E34225]" />
                Khó khăn & giải pháp
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#c1564c]">
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
                        <span className="text-[#c1564c]">•</span>
                        <span className="text-gray-600">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#7A876D]">
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
                        <span className="text-[#7A876D]">•</span>
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
                        : "bg-[#377b72] text-white hover:bg-[#2a626c]"
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
                        : "bg-[#377b72] text-white hover:bg-[#2a626c]"
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

export default ProjectDetail;

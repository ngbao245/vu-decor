import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

const GalleryHome = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();
    const imageURL = "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/474635398_122117507678618470_2300152676572287118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jsJU4e3-_esQ7kNvwEUJy0O&_nc_oc=Adn7OoitLOfLA_qdbrYgF6hvSiEdy6k0llkFo7LxcR1djMgQjDAdga9uCIEuOFWbBj9fJwVPkwC587lPhIzixrSQ&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=07B5_Tq-u_62wmoVZ4Lopw&oh=00_AfJohl8EuLA8ZVg44hIb6MyzoJ9hnYPYxexX1hUKSDCX7w&oe=683CA911"

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <section ref={ref} className='w-full h-max flex flex-col gap-5'>
            <div className='text-center'>
                <h6 className='text-[#828282]'>Thư viện</h6>
                <h1 className='text-[2.5rem]'><span className='text-[#E34225]'>Cảm hứng</span> & không gian </h1>
                <h5 className='text-sm'>Không gian sống lý tưởng chính là nơi nuôi dưỡng cảm hứng và
                    khơi gợi sự hứng khởi mỗi sớm mai thức giấc. <br /> Với niềm đam mê kiến tạo, chúng tôi
                    mong muốn thổi hồn vào từng mét vuông, biến ngôi nhà thành nguồn năng lượng tích cực,
                    nơi bạn tìm thấy niềm vui và sự thư thái trọn vẹn.
                </h5>
            </div>
            <div className='flex w-full flex-nowrap items-center gap-3'>
                <div className='grow h-[300px] bg-amber-400 rounded-2xl'
                    style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover", backgroundPosition: "left" }}
                ></div>
                <div className='grow h-[400px] bg-amber-400 rounded-2xl'
                    style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover" }}
                ></div>
                <div className='grow-3 h-[500px] bg-amber-400 rounded-2xl'
                    style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <div className='grow h-[400px]  bg-amber-400 rounded-2xl'
                    style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover" }}
                ></div>
                <div className='grow h-[300px] bg-amber-400 rounded-2xl'
                    style={{ backgroundImage: `url(${imageURL})`, backgroundSize: "cover", backgroundPosition: "right" }}
                ></div>

            </div>
        </section>
    )
}

export default GalleryHome
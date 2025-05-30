
import Button from '../Button/Button'
import { FaArrowRight } from "react-icons/fa6";
const ServiceHome = () => {
    return (
        <div className='w-full h-max flex flex-col gap-10'>
            <div className='text-center'>
                <h6 className='text-[#828282]'>Dịch vụ</h6>
                <h1 className='text-[2.5rem]'><span className='text-[#E34225]'>Thiết kế</span> nội thất</h1>
            </div>

            <div className='grid grid-cols-4 gap-10'>
                <div className='relative h-[400px] col-span-2  rounded-lg bg-black/30'>
                    <div className='w-full h-full '>
                        <img
                            src="https://cdn.pixabay.com/photo/2018/08/09/03/58/home-3593729_1280.jpg"
                            alt=""
                            className='w-full h-full object-cover rounded-lg '
                        />
                    </div>

                    <div className='absolute flex flex-col gap-5 bottom-0 w-full text-white px-5 py-5 bg-black/30 rounded-lg'>
                        <h3 className='text-2xl font-semibold'>Thiết kế nội thất không gian sống</h3>
                        <Button variant='secondary' color='black' rounded='full' weight='lg' className='hover:text-[#E34225]' >Xem thêm</Button>
                    </div>

                </div>
                <div className='relative h-[400px] col-span-1  rounded-lg bg-black/30'>
                    <div className='w-full h-full bg-black/50'>
                        <img
                            src="https://cdn.pixabay.com/photo/2023/09/26/09/24/apartment-8276989_1280.jpg"
                            alt=""
                            className='w-full h-full object-cover rounded-lg bg-black/30'
                        />
                    </div>
                    <div className='absolute flex flex-col gap-5 bottom-0 w-full text-white px-5 py-5 bg-black/30 rounded-lg'>
                        <h3 className='text-2xl font-semibold'>Cải tạo không gian</h3>
                        <Button variant='secondary' color='black' rounded='full' weight='lg' className='hover:text-[#E34225]' ><FaArrowRight /></Button>
                    </div>

                </div>
                <div className='relative h-[400px] col-span-1 rounded-lg '>
                    <div className='w-full h-full'>
                        <img
                            src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg"
                            alt=""
                            className='w-full h-full object-cover bg-left rounded-lg bg-black/30 '
                        />
                    </div>
                    <div className='absolute flex flex-col gap-5 bottom-0 w-full text-white px-5 py-5 bg-black/30 rounded-lg'>
                        <h3 className='text-2xl font-semibold'>Tư vấn màu sắc <br />& phối màu</h3>
                        <Button variant='secondary' color='black' rounded='full' weight='xl' className='hover:text-[#E34225]' ><FaArrowRight /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHome
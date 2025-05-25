import './hero.css'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 w-full h-[800px] bg-black'>
      <div className='flex flex-col justify-between pl-20 col-span-1 text-white text-[10rem] leading-none font-bold'>
        <div className="flex flex-col font-sans">
          <span className="">DESIGN</span>
          <span className="">SPEAKS</span>
        </div>
        <div className='flex flex-col gap-5 text-2xl '>
          <p>
            Transform your space with custom interiors that blend sophistication, comfort, and style.
            Designed for modern living, curated for timeless appeal
          </p>
          <div>
            <button
              className='
              bg-[#7A876D] text-white hover:bg-[#7a876de5] active:bg-[#7a876dc9] active:shadow-md
              cursor-pointer px-6 py-3 rounded-lg  '
            >
              View Projects
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 py-[1rem] text-xl bg-[#2f2f2f]'>
          <div className='flex flex-col items-center'>
            <span className='text-[3rem]'>150</span>
            <span className='flex flex-col items-center'>Happy Clients</span>
          </div >
          <div className='flex flex-col items-center'>
            <span className='text-[3rem]'>500+</span>
            <span>Successfull Projects</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-[3rem]'>10+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </div>

      <div className="realtive h-full flex flex-col hero-bg col-span-1 text-white text-[10rem] font-bold font-sans">
        <div className="flex flex-col">
          <div className="flex">
            <span className="flex bg-black leading-none px-5">THAT</span>
          </div>
          <div className="relative flex ">
            <div className="absolute flex w-full h-44 bg-black opacity-30"></div>
            <span className="absolute leading-none">LUXURY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
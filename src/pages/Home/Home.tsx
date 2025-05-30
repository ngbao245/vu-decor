import GalleryHome from "../../components/GalleryHome/GalleryHome"
import Hero from "../../components/Hero/Hero"
import ServiceHome from "../../components/ServiceHome/ServiceHome"
import StoryTeam from "../../components/StoryTeam/StoryTeam"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"
import FAQ from "../../components/FAQ/FAQ"

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <div>
                {/* <div className="h-16 bg-[#2f2f2f]"></div> */}
                <Hero />
            </div>
            <div className="flex bg-white min-h-[700px] px-4 py-8 md:px-8 lg:px-20 items-center">
                <ServiceHome />
            </div>
            <div className="flex bg-white min-h-[700px] px-4 py-8 md:px-8 lg:px-20 items-center"
                style={{ backgroundImage: 'url("/images/whyChooseUs.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <WhyChooseUs />
            </div>
            <div className="flex bg-white min-h-[800px] px-4 py-8 md:px-8 lg:px-20 items-center">
                <GalleryHome />
            </div>

            {/* <div className="bg-[#2f2f2f] flex flex-col items-center pt-10">
                <div className=" flex flex-col gap-5 items-center text-white text-[3rem] leading-none font-bold">
                    <span className="">Projects</span>
                    <div className="w-50 h-2 bg-[#7A876D]"></div>
                </div>
                <ProjectCate />
            </div> */}
            <div className="bg-white">
                <StoryTeam />
            </div>
            <FAQ />
        </div>
    )
}
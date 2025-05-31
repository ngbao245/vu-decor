import GalleryHome from "../../components/GalleryHome/GalleryHome"
import Hero from "../../components/Hero/Hero"
import ServiceHome from "../../components/ServiceHome/ServiceHome"
import StoryTeam from "../../components/StoryTeam/StoryTeam"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"
import FAQ from "../../components/FAQ/FAQ"
import Feedback from "../../components/Feedback/Feedback"

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-full bg-[#f5f5f3]">
            <div>
                {/* <div className="h-16 bg-[#2f2f2f]"></div> */}
                <Hero />
            </div>
            <div className="flex bg-[#f5f5f3] min-h-[700px] px-4 py-8 md:px-8 lg:px-20 items-center">
                <ServiceHome />
            </div>
            <div className="flex bg-white min-h-[700px] px-4 py-8 md:px-8 lg:px-20 items-center"
                style={{ backgroundImage: 'url("/images/whyChooseUs.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <WhyChooseUs />
            </div>
            <div className="flex bg-[#f5f5f3] min-h-[800px] px-4 py-8 md:px-8 lg:px-20 items-center">
                <GalleryHome />
            </div>
            <div className="flex bg-white min-h-[800px] px-4 py-8 md:px-8 lg:px-20 items-center">
                <Feedback />
            </div>
            <div className="bg-[#f5f5f3]">
                <StoryTeam />
            </div>
            <FAQ />
        </div>
    )
}
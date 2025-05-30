import Hero from "../../components/Hero/Hero1"
import ProjectCate from "../../components/ProjectCate/ProjectCate"
import StoryTeam from "../../components/StoryTeam/StoryTeam"

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-full gap-20">
            <div>
                <div className="h-16 bg-[#2f2f2f]"></div>
                <Hero />
            </div>
            <div className="bg-white h-[500px]">

            </div>

            <div className="bg-[#2f2f2f] flex flex-col items-center pt-10">
                <div className=" flex flex-col gap-5 items-center text-white text-[3rem] leading-none font-bold">
                    <span className="">Projects</span>
                    <div className="w-50 h-2 bg-[#7A876D]"></div>
                </div>
                <ProjectCate />
            </div>
            <div className="bg-white">
                <StoryTeam />
            </div>
        </div>
    )
}
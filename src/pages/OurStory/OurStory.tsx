import HeroPage from "../../components/Hero/HeroPage"
import Story from "../../components/Story/Story"
import StoryTeam from "../../components/StoryTeam/StoryTeam"
import StoryValue from "../../components/StoryValue/StoryValue"
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs"

export const OurStory = () => {
    return (
        <div className="min-h-screen text-justify">
            {/* Hero Section */}
            <HeroPage
                page="Giới Thiệu Vu Decor"
                title="Vu Decor chuyên Thiết kế & Thi công trọn gói, mang đến giải pháp nội thất tối ưu cho cá nhân, doanh nghiệp, nhà hàng, khách sạn."
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            />

            {/* Main Content */}
            <div className="flex flex-col">
                {/* About Us Section - Light Background */}
                <div className="bg-white">
                    <Story />
                </div>

                {/* Core Values Section - Gray Background */}
                <div className="bg-gray-50  ">
                    <StoryValue />
                    {/* <WhyChooseUs /> */}
                </div>

                {/* Team Section - White Background */}
                <div className="bg-white">
                    <StoryTeam />
                </div>
            </div>
        </div>
    )
}